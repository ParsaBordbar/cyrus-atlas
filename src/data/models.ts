export type ModelId = 'cyrusTomb' | 'cyrusCylinder'

export type Model = {
  id: ModelId
  file: string
  thumb: string
  thumbWidth: number
  thumbHeight: number
  author: string
  authorUrl: string
  license: string
  licenseUrl: string
  sourceUrl: string
}

const CC_BY = 'https://creativecommons.org/licenses/by/4.0/'

export const models: Model[] = [
  {
    id: 'cyrusTomb',
    file: 'cyrus-tomb.glb',
    thumb: 'cyrus-tomb-thumb.jpg',
    thumbWidth: 720,
    thumbHeight: 405,
    author: 'Pooya_dh',
    authorUrl: 'https://sketchfab.com/Pooya_dh',
    license: 'CC BY 4.0',
    licenseUrl: CC_BY,
    sourceUrl: 'https://sketchfab.com/3d-models/pasargadae-tomb-of-cyrus-the-great-880e223990d048f3840b5bc25ab2c900',
  },
  {
    id: 'cyrusCylinder',
    file: 'cyrus-cylinder.glb',
    thumb: 'cyrus-cylinder-thumb.jpg',
    thumbWidth: 720,
    thumbHeight: 405,
    author: 'artfletch',
    authorUrl: 'https://sketchfab.com/artfletch',
    license: 'CC BY 4.0',
    licenseUrl: CC_BY,
    sourceUrl: 'https://sketchfab.com/3d-models/the-cyrus-cylinder-f8d0a48f63f44bb49323b623853f6592',
  },
]

export const modelById = Object.fromEntries(models.map((m) => [m.id, m])) as Record<ModelId, Model>

export const modelSrc = (id: ModelId) => `${import.meta.env.BASE_URL}models/${modelById[id].file}`

export const modelThumbSrc = (id: ModelId) => `${import.meta.env.BASE_URL}models/${modelById[id].thumb}`
