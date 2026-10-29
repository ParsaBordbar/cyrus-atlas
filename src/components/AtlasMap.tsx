import { useEffect, useMemo, useState, type RefObject } from 'react'
import Map, { Layer, Marker, Source, type MapRef, type StyleSpecification } from '@vis.gl/react-maplibre'
import type { FeatureCollection, LineString, Polygon, MultiPolygon } from 'geojson'
import { setWorkerUrl } from 'maplibre-gl'
import workerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url'
import 'maplibre-gl/dist/maplibre-gl.css'
import landUrl from '../data/land.geojson?url'
import riversUrl from '../data/rivers.geojson?url'
import territoriesRaw from '../data/territories.geojson?raw'
import { EMPIRE_BOUNDS, placeById, places, regionLabels, type PlaceId } from '../data/places'
import type { AtlasEvent } from '../data/events'
import type { Dict } from '../i18n/en'

setWorkerUrl(workerUrl)

const C = { paper: '#ecdfbf', sea: '#ded5b8', ink: '#3b2b1c', rubric: '#a5361f', river: '#6d8790' }

type TerritoryProps = { id: string; bce: number; color: string }
const territories = JSON.parse(territoriesRaw) as FeatureCollection<Polygon | MultiPolygon, TerritoryProps>

const graticule: FeatureCollection<LineString> = {
  type: 'FeatureCollection',
  features: [
    ...Array.from({ length: 21 }, (_, i) => i * 5).map((lon) => line([[lon, 5], [lon, 58]])),
    ...Array.from({ length: 11 }, (_, i) => 5 + i * 5).map((lat) => line([[0, lat], [100, lat]])),
  ],
}

function line(coordinates: [number, number][]) {
  return { type: 'Feature' as const, properties: {}, geometry: { type: 'LineString' as const, coordinates } }
}

const ripples = [
  { gap: 3, width: 0.8, opacity: 0.5 },
  { gap: 8, width: 0.6, opacity: 0.3 },
  { gap: 14, width: 0.5, opacity: 0.16 },
]

const baseStyle: StyleSpecification = {
  version: 8,
  sources: {
    land: { type: 'geojson', data: new URL(landUrl, location.href).href },
    rivers: { type: 'geojson', data: new URL(riversUrl, location.href).href },
    graticule: { type: 'geojson', data: graticule },
  },
  layers: [
    { id: 'sea', type: 'background', paint: { 'background-color': C.sea } },
    ...ripples.map((r, i) => ({
      id: `ripple-${i}`,
      type: 'line' as const,
      source: 'land',
      paint: { 'line-color': C.ink, 'line-width': r.width, 'line-gap-width': r.gap, 'line-opacity': r.opacity },
    })),
    { id: 'land', type: 'fill', source: 'land', paint: { 'fill-color': C.paper } },
    {
      id: 'graticule',
      type: 'line',
      source: 'graticule',
      paint: { 'line-color': C.ink, 'line-width': 0.5, 'line-opacity': 0.22, 'line-dasharray': [8, 5] },
    },
    {
      id: 'rivers',
      type: 'line',
      source: 'rivers',
      layout: { 'line-cap': 'round', 'line-join': 'round' },
      paint: {
        'line-color': C.river,
        'line-opacity': 0.85,
        'line-width': ['interpolate', ['linear'], ['zoom'], 3, 0.7, 7, 1.8],
      },
    },
    {
      id: 'coast',
      type: 'line',
      source: 'land',
      layout: { 'line-join': 'round' },
      paint: { 'line-color': C.ink, 'line-width': ['interpolate', ['linear'], ['zoom'], 3, 0.9, 7, 1.7] },
    },
  ],
}

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

function cameraPadding(dir: 'ltr' | 'rtl') {
  const w = window.innerWidth
  const h = window.innerHeight
  if (w < 900) return { top: 110, bottom: Math.round(h * 0.5), left: 36, right: 36 }
  const panel = Math.min(440, w * 0.38) + 40
  return { top: 210, bottom: 150, left: dir === 'ltr' ? 220 : panel, right: dir === 'ltr' ? panel : 220 }
}

function marchLine(from: PlaceId, to: PlaceId): FeatureCollection<LineString> {
  const a = placeById[from]
  const b = placeById[to]
  const [mx, my] = [(a.lon + b.lon) / 2, (a.lat + b.lat) / 2]
  const [dx, dy] = [b.lon - a.lon, b.lat - a.lat]
  const [cx, cy] = [mx - dy * 0.18, my + dx * 0.18]
  const coordinates = Array.from({ length: 33 }, (_, i) => {
    const t = i / 32
    const u = 1 - t
    return [u * u * a.lon + 2 * u * t * cx + t * t * b.lon, u * u * a.lat + 2 * u * t * cy + t * t * b.lat]
  })
  return { type: 'FeatureCollection', features: [line(coordinates as [number, number][])] }
}

type Props = {
  mapRef: RefObject<MapRef | null>
  t: Dict
  event: AtlasEvent | null
  previous: AtlasEvent | null
  heldSince: number
  onSelectPlace: (id: PlaceId) => void
}

export function AtlasMap({ mapRef, t, event, previous, heldSince, onSelectPlace }: Props) {
  const [zoom, setZoom] = useState(4)
  const activePlaces = useMemo(() => new Set(event?.places ?? []), [event])

  useEffect(() => {
    const map = mapRef.current
    if (!map) return
    const padding = cameraPadding(t.dir)
    const duration = reducedMotion() ? 0 : 2200
    if (!event) {
      map.fitBounds(EMPIRE_BOUNDS, { padding, duration })
      return
    }
    const pts = event.places.map((id) => placeById[id])
    if (pts.length === 1) {
      map.flyTo({ center: [pts[0].lon, pts[0].lat], zoom: event.zoom ?? 5.2, padding, duration, essential: true })
      return
    }
    const lons = pts.map((p) => p.lon)
    const lats = pts.map((p) => p.lat)
    map.fitBounds([Math.min(...lons), Math.min(...lats), Math.max(...lons), Math.max(...lats)], {
      padding,
      maxZoom: 5.2,
      duration,
    })
  }, [event, mapRef, t.dir])

  const march = previous && event && previous.places[0] !== event.places[0]
    ? marchLine(previous.places[0], event.places[0])
    : null

  const scale = zoom < 3.8 ? 'far' : zoom < 5.4 ? 'mid' : 'near'

  return (
    <div className="atlas-map" data-scale={scale}>
      <Map
        ref={mapRef}
        initialViewState={{ bounds: EMPIRE_BOUNDS, fitBoundsOptions: { padding: cameraPadding(t.dir) } }}
        mapStyle={baseStyle}
        minZoom={2.6}
        maxZoom={8}
        maxBounds={[-8, 0, 108, 60]}
        dragRotate={false}
        pitchWithRotate={false}
        touchPitch={false}
        attributionControl={false}
        onLoad={(e) => e.target.touchZoomRotate.disableRotation()}
        onZoom={(e) => setZoom(e.viewState.zoom)}
      >
        <Source id="territories" type="geojson" data={territories}>
          {territories.features.map(({ properties: { id, color, bce } }) => {
            const held = bce >= heldSince
            return [
              <Layer
                key={`${id}-wash`}
                id={`${id}-wash`}
                type="fill"
                beforeId="rivers"
                filter={['==', ['get', 'id'], id]}
                paint={{
                  'fill-color': color,
                  'fill-opacity': held ? 0.55 : 0,
                  'fill-opacity-transition': { duration: 1400, delay: 300 },
                }}
              />,
              <Layer
                key={`${id}-edge`}
                id={`${id}-edge`}
                type="line"
                beforeId="rivers"
                filter={['==', ['get', 'id'], id]}
                layout={{ 'line-join': 'round' }}
                paint={{
                  'line-color': color,
                  'line-width': 9,
                  'line-blur': 6,
                  'line-offset': -4.5,
                  'line-opacity': held ? 1 : 0,
                  'line-opacity-transition': { duration: 1400, delay: 300 },
                }}
              />,
            ]
          })}
          <Layer
            id="satrapy-borders"
            type="line"
            beforeId="rivers"
            layout={{ 'line-join': 'round', 'line-cap': 'round' }}
            paint={{ 'line-color': C.ink, 'line-width': 0.9, 'line-opacity': 0.55, 'line-dasharray': [0.6, 2.2] }}
          />
        </Source>

        {march && (
          <Source id="march" type="geojson" data={march}>
            <Layer
              id="march-line"
              type="line"
              layout={{ 'line-cap': 'round' }}
              paint={{ 'line-color': C.rubric, 'line-width': 1.8, 'line-dasharray': [2.5, 2], 'line-opacity': 0.9 }}
            />
          </Source>
        )}

        {regionLabels.map((r) => (
          <Marker key={r.id} longitude={r.lon} latitude={r.lat} anchor="center" style={{ pointerEvents: 'none' }}>
            <span
              className="region-label"
              data-kind={r.kind}
              data-held={r.kind !== 'satrapy' || isHeld(r.id, heldSince) ? 'yes' : 'no'}
              style={{ rotate: `${t.dir === 'rtl' ? 0 : (r.rotate ?? 0)}deg` }}
            >
              {t.regions[r.id]}
            </span>
          </Marker>
        ))}

        {places.map((p) => (
          <Marker key={p.id} longitude={p.lon} latitude={p.lat} anchor="center">
            <button
              type="button"
              className="place"
              data-side={p.side}
              data-tomb={p.tomb ? 'yes' : undefined}
              data-active={activePlaces.has(p.id) ? (event?.places[0] === p.id ? 'primary' : 'yes') : 'no'}
              onClick={() => onSelectPlace(p.id)}
              aria-label={p.approximate ? `${t.places[p.id]} (${t.approximate})` : t.places[p.id]}
            >
              {p.tomb ? <TombMark /> : <span className="place-mark" aria-hidden="true" />}
              <span className="place-name" aria-hidden="true">
                {t.places[p.id]}
                {p.approximate && <span className="place-approx">?</span>}
              </span>
            </button>
          </Marker>
        ))}
      </Map>
    </div>
  )
}

function TombMark() {
  return (
    <svg className="place-tomb" viewBox="0 0 20 18" width="20" height="18" aria-hidden="true">
      <path d="M1 17h18v-2H1zM3 15h14v-2H3zM5 13h10v-2H5zM6.5 11h7V7h-7zM5.5 7h9L10 3.5z" />
    </svg>
  )
}

function isHeld(regionId: string, heldSince: number) {
  const f = territories.features.find((x) => x.properties.id === regionId)
  return f ? f.properties.bce >= heldSince : false
}
