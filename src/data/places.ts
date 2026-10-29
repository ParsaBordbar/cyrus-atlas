export type PlaceId =
  | 'anshan'
  | 'pasargadae'
  | 'ecbatana'
  | 'sardis'
  | 'opis'
  | 'babylon'
  | 'bactra'
  | 'cyropolis'
  | 'jerusalem'

export type Place = {
  id: PlaceId
  lon: number
  lat: number
  side: 'left' | 'right'
  approximate?: boolean
  tomb?: boolean
}

export const places: Place[] = [
  { id: 'anshan', lon: 52.41, lat: 30.01, side: 'left' },
  { id: 'pasargadae', lon: 53.1673, lat: 30.1937, side: 'right', tomb: true },
  { id: 'ecbatana', lon: 48.52, lat: 34.8, side: 'right' },
  { id: 'sardis', lon: 28.04, lat: 38.49, side: 'right' },
  { id: 'opis', lon: 44.25, lat: 33.25, side: 'right', approximate: true },
  { id: 'babylon', lon: 44.42, lat: 32.54, side: 'left' },
  { id: 'bactra', lon: 66.9, lat: 36.76, side: 'right' },
  { id: 'cyropolis', lon: 69.0, lat: 39.91, side: 'right', approximate: true },
  { id: 'jerusalem', lon: 35.23, lat: 31.78, side: 'left' },
]

export const placeById = Object.fromEntries(places.map((p) => [p.id, p])) as Record<PlaceId, Place>

export type RegionId =
  | 'persis' | 'media' | 'armenia' | 'cappadocia' | 'assyria' | 'lydia' | 'hyrcania' | 'carmania'
  | 'aria' | 'bactria' | 'sogdia' | 'arachosia' | 'susiana' | 'babylonia' | 'syria'
  | 'mediterranean' | 'euxine' | 'caspian' | 'persianGulf' | 'erythraean' | 'aral'
  | 'arabia' | 'aegyptus' | 'scythia' | 'india'

export type RegionLabel = {
  id: RegionId
  lon: number
  lat: number
  kind: 'satrapy' | 'sea' | 'land'
  rotate?: number
}

export const regionLabels: RegionLabel[] = [
  { id: 'persis', lon: 54.9, lat: 28.9, kind: 'satrapy' },
  { id: 'media', lon: 49.6, lat: 35.6, kind: 'satrapy', rotate: -14 },
  { id: 'armenia', lon: 43.2, lat: 39.8, kind: 'satrapy' },
  { id: 'cappadocia', lon: 36.2, lat: 39.7, kind: 'satrapy', rotate: -8 },
  { id: 'assyria', lon: 43.1, lat: 36.4, kind: 'satrapy' },
  { id: 'lydia', lon: 29.8, lat: 39.2, kind: 'satrapy' },
  { id: 'hyrcania', lon: 57.6, lat: 36.4, kind: 'satrapy' },
  { id: 'carmania', lon: 59.2, lat: 27.2, kind: 'satrapy' },
  { id: 'aria', lon: 60.9, lat: 32.6, kind: 'satrapy' },
  { id: 'bactria', lon: 64.6, lat: 37.2, kind: 'satrapy' },
  { id: 'sogdia', lon: 66.2, lat: 40.3, kind: 'satrapy' },
  { id: 'arachosia', lon: 66.1, lat: 32.2, kind: 'satrapy' },
  { id: 'susiana', lon: 49.2, lat: 32.2, kind: 'satrapy' },
  { id: 'babylonia', lon: 44.9, lat: 31.0, kind: 'satrapy', rotate: -38 },
  { id: 'syria', lon: 38.2, lat: 34.2, kind: 'satrapy', rotate: -40 },
  { id: 'mediterranean', lon: 27.2, lat: 34.0, kind: 'sea' },
  { id: 'euxine', lon: 34.2, lat: 43.4, kind: 'sea' },
  { id: 'caspian', lon: 50.9, lat: 41.8, kind: 'sea', rotate: -78 },
  { id: 'persianGulf', lon: 50.4, lat: 27.7, kind: 'sea', rotate: -38 },
  { id: 'erythraean', lon: 62.5, lat: 20.5, kind: 'sea' },
  { id: 'aral', lon: 59.9, lat: 45.1, kind: 'sea' },
  { id: 'arabia', lon: 45, lat: 24.6, kind: 'land' },
  { id: 'aegyptus', lon: 29.6, lat: 27.4, kind: 'land' },
  { id: 'scythia', lon: 62, lat: 48.2, kind: 'land' },
  { id: 'india', lon: 74.5, lat: 27.5, kind: 'land' },
]

export const EMPIRE_BOUNDS: [number, number, number, number] = [25, 25, 72, 44]
