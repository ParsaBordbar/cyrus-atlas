export type PictureId =
  | 'cylinder'
  | 'chronicle'
  | 'winged'
  | 'inscription'
  | 'tomb'
  | 'astyages'
  | 'croesus'
  | 'nabonidus'
  | 'kaykhosrow'

export type Picture = {
  id: PictureId
  kind: 'relic' | 'ruler' | 'manuscript'
  width: number
  height: number
  author: string
  license: string
  licenseUrl?: string
  sourceUrl: string
}

const commons = (file: string) => `https://commons.wikimedia.org/wiki/File:${file}`
const CC0 = 'https://creativecommons.org/publicdomain/zero/1.0/'

export const pictures: Record<PictureId, Picture> = {
  cylinder: {
    id: 'cylinder', kind: 'relic', width: 1600, height: 813, author: 'Daderot', license: 'CC0', licenseUrl: CC0,
    sourceUrl: commons('Cyrus_Cylinder,_Babylon,_Iraq,_mid_500s_BC,_cuneiform_on_clay_-_British_Museum_-_DSC01316.jpg'),
  },
  chronicle: {
    id: 'chronicle', kind: 'relic', width: 1216, height: 1170, author: 'ChrisO', license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/', sourceUrl: commons('Nabonidus_chronicle.jpg'),
  },
  winged: {
    id: 'winged', kind: 'relic', width: 836, height: 1400, author: 'Ziegler175', license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', sourceUrl: commons('IranPasargadaeReliefNordtor.jpg'),
  },
  inscription: {
    id: 'inscription', kind: 'relic', width: 938, height: 1400, author: 'Paweł Ryszawa', license: 'CC BY 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/3.0/', sourceUrl: commons('Pasargadae_inscription_column.jpg'),
  },
  tomb: {
    id: 'tomb', kind: 'relic', width: 1600, height: 1063, author: 'A. Davey', license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0/', sourceUrl: commons('Cyrus_the_Great_Tomb,_Pasargadae.jpg'),
  },
  astyages: {
    id: 'astyages', kind: 'ruler', width: 448, height: 895, author: 'Maximilien de Haese, woven by Jacques van der Borght',
    license: 'Public domain', sourceUrl: commons('King_Astyages_submitting_to_Cyrus.jpg'),
  },
  croesus: {
    id: 'croesus', kind: 'ruler', width: 1280, height: 1068, author: 'Myson, painter; photo Bibi Saint-Pol',
    license: 'Public domain', sourceUrl: commons('Kroisos_stake_Louvre_G197.jpg'),
  },
  nabonidus: {
    id: 'nabonidus', kind: 'ruler', width: 1280, height: 960, author: 'Wikimedia Commons contributor', license: 'CC0',
    licenseUrl: CC0, sourceUrl: commons('British_Museum_Stela_of_Nabonidus,_top.jpg'),
  },
  kaykhosrow: {
    id: 'kaykhosrow', kind: 'manuscript', width: 1202, height: 1400, author: 'The Metropolitan Museum of Art',
    license: 'CC0', licenseUrl: CC0,
    sourceUrl: commons('"Kai_Khusrau_Enthroned_Holding_a_Sword",_Folio_from_a_Shahnama_(Book_of_Kings)_MET_DP215666.jpg'),
  },
}

export const pictureSrc = (id: PictureId, thumb = false) => `/relics/${id}${thumb ? '-thumb' : ''}.webp`
