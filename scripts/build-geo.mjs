import fs from 'node:fs'
import path from 'node:path'
import * as turf from '@turf/turf'

const root = path.resolve(import.meta.dirname, '..')
const cache = (f) => JSON.parse(fs.readFileSync(path.join(root, '.cache', `${f}.geojson`), 'utf8'))
const out = (f, data) => {
  const file = path.join(root, 'src/data', f)
  fs.writeFileSync(file, JSON.stringify(data))
  console.log(`${f}  ${(fs.statSync(file).size / 1024).toFixed(0)} KB  ${data.features.length} features`)
}

const BBOX = [0, 5, 100, 58]
const tidy = (f) => turf.truncate(turf.simplify(f, { tolerance: 0.015, highQuality: true }), { precision: 3 })

const landParts = cache('ne_50m_land').features
  .map((f) => turf.bboxClip(f, BBOX))
  .filter((f) => turf.area(f) > 0)
let land = turf.union(turf.featureCollection(landParts))

const skipLakes = /aral|reservoir|bögeni|res\./i
const lakes = [
  ...cache('ne_50m_lakes').features.filter(
    (f) => f.properties.scalerank <= 1 && !skipLakes.test(f.properties.name ?? ''),
  ),
  ...cache('ne_50m_lakes_historic').features.filter((f) => /aral/i.test(f.properties.name ?? '')),
]
  .map((f) => turf.bboxClip(f, BBOX))
  .filter((f) => turf.area(f) > 0)
land = turf.difference(turf.featureCollection([land, ...lakes]))
land = tidy(land)

const keepRivers = new Set([
  'Nile', 'Damietta Branch', 'Rosetta Branch', 'Euphrates', 'Firat', 'Al Furat', 'Tigris', 'Dicle',
  'Shatt al Arab', 'Indus', 'Amu  Darya', 'Panj', 'Syr Darya', 'Naryn', 'Helmand', 'Jordan', 'Chenab', 'Sutlej',
])
const rivers = cache('ne_50m_rivers_lake_centerlines').features
  .filter((f) => f.properties.featurecla === 'River' && keepRivers.has(f.properties.name))
  .map((f) => turf.bboxClip(f, BBOX))
  .filter((f) => f.geometry.coordinates.length > 0)
  .map((f) => tidy(turf.feature(f.geometry, { name: f.properties.name })))

const satrapies = [
  { id: 'persis', bce: 559, color: '#ebcf7c', ring: [[49.5,30.5],[51,31.8],[53.5,32],[56,30.5],[57.5,28],[57.5,25.5],[54,25],[50,27],[48.8,29.6],[49.5,30.5]] },
  { id: 'media', bce: 550, color: '#a9c49c', ring: [[44.5,38],[47,39.5],[49.5,38],[53,36.5],[54,35],[53.5,32],[51,31.8],[49.5,33.2],[47.5,33],[46,34.5],[45,36],[44.5,38]] },
  { id: 'armenia', bce: 550, color: '#e4a9a3', ring: [[38.5,40.5],[40,41.3],[42,41.8],[45,41.5],[47,39.5],[44.5,38],[42,37.3],[40,37.6],[38.5,38.5],[38.5,40.5]] },
  { id: 'cappadocia', bce: 550, color: '#efc290', ring: [[33.6,42.5],[38.5,41.5],[38.5,40.5],[38.5,38.5],[37,37.3],[34.5,37.6],[33.8,39.5],[33.6,42.5]] },
  { id: 'assyria', bce: 550, color: '#cbb6cf', ring: [[40,37.6],[42,37.3],[44.5,38],[45,36],[46,34.5],[44.3,34.4],[43.2,34.5],[42,35.3],[40,36.1],[40,37.6]] },
  { id: 'lydia', bce: 547, color: '#cbb6cf', ring: [[25,42],[29,41.6],[33.6,42.5],[33.8,39.5],[34.5,37.6],[32,36],[29,36],[26,36.5],[25,42]] },
  { id: 'hyrcania', bce: 545, color: '#e4a9a3', ring: [[53,36.5],[53.9,38.2],[56,38.4],[58,38.1],[60,37],[61,35.5],[58,34.5],[55,34.5],[54,35],[53,36.5]] },
  { id: 'carmania', bce: 545, color: '#a9c49c', ring: [[53.5,32],[54,35],[55,34.5],[58,34.5],[58.5,31],[60,29.5],[61.5,28],[61.5,25],[57.5,25.5],[57.5,28],[56,30.5],[53.5,32]] },
  { id: 'aria', bce: 545, color: '#ebcf7c', ring: [[58,34.5],[61,35.5],[63,35],[63.5,33],[62,30.5],[60,29.5],[58.5,31],[58,34.5]] },
  { id: 'bactria', bce: 545, color: '#cbb6cf', ring: [[60,37],[61.5,38.8],[65,38.3],[68,37.8],[70.5,38],[71.5,36.5],[69,35.2],[66,35],[63,35],[61,35.5],[60,37]] },
  { id: 'sogdia', bce: 545, color: '#efc290', ring: [[61.5,38.8],[61.2,40.6],[63,42],[66,41.6],[69,41.4],[71,41],[72,40],[70.5,38],[68,37.8],[65,38.3],[61.5,38.8]] },
  { id: 'arachosia', bce: 545, color: '#e4a9a3', ring: [[63,35],[66,35],[69,35.2],[69.6,33],[68.5,30.5],[66,29.5],[62,30.5],[63.5,33],[63,35]] },
  { id: 'susiana', bce: 539, color: '#e4a9a3', ring: [[47.5,33],[49.5,33.2],[51,31.8],[49.5,30.5],[48.8,29.6],[48,29.6],[47.7,30.2],[47,31.5],[47.5,33]] },
  { id: 'babylonia', bce: 539, color: '#efc290', ring: [[44.3,34.4],[46,34.5],[47.5,33],[47,31.5],[47.7,30.2],[48,29.6],[46.5,29.1],[44,31],[42.5,33],[43.2,34.5],[44.3,34.4]] },
  { id: 'syria', bce: 539, color: '#ebcf7c', ring: [[34.2,29.5],[34.2,31.5],[35,33.5],[35.7,35.5],[36,36.9],[37,37.3],[38.5,38.5],[40,37.6],[40,36.1],[42,35.3],[43.2,34.5],[42.5,33],[40,33],[38.5,32],[37,29.5],[35,28],[34.2,29.5]] },
]

const territories = satrapies.map(({ id, bce, color, ring }) => {
  const shape = turf.polygon([[...ring, ring[0]]])
  const clipped = turf.intersect(turf.featureCollection([shape, land]))
  return turf.rewind(tidy(turf.feature(clipped.geometry, { id, bce, color })))
})

out('land.geojson', turf.featureCollection([land]))
out('rivers.geojson', turf.featureCollection(rivers))
out('territories.geojson', turf.featureCollection(territories))
