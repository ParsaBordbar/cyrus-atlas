import type { PictureId } from './gallery'
import type { PlaceId } from './places'
import type { VerseId } from './shahnameh'
import type { SourceId } from './sources'

export type EventId =
  | 'birth' | 'king' | 'media' | 'lydia' | 'east' | 'babylon' | 'cylinder' | 'exiles' | 'tomb'

export type AtlasEvent = {
  id: EventId
  bce: number
  endBce?: number
  circa?: boolean
  disputed?: boolean
  deed?: boolean
  places: PlaceId[]
  zoom?: number
  sources: SourceId[]
  hero?: PictureId
  relics?: PictureId[]
  rivals?: PictureId[]
  verse?: VerseId
}

export const events: AtlasEvent[] = [
  { id: 'birth', bce: 600, circa: true, places: ['anshan'], sources: ['herodotus', 'cicero'], verse: 'shepherds' },
  { id: 'king', bce: 559, places: ['anshan'], sources: ['cyrusCylinder', 'herodotus'] },
  {
    id: 'media', bce: 550, deed: true, places: ['ecbatana', 'pasargadae'],
    sources: ['nabonidusChronicle', 'sipparCylinder', 'herodotus', 'strabo'],
    rivals: ['astyages'], relics: ['winged'], verse: 'spared',
  },
  {
    id: 'lydia', bce: 547, disputed: true, deed: true, places: ['sardis'],
    sources: ['nabonidusChronicle', 'herodotus'], rivals: ['croesus'],
  },
  { id: 'east', bce: 545, endBce: 540, circa: true, places: ['bactra', 'cyropolis'], sources: ['herodotus', 'arrian'] },
  {
    id: 'babylon', bce: 539, deed: true, places: ['babylon', 'opis'],
    sources: ['nabonidusChronicle', 'berossus'], rivals: ['nabonidus'], relics: ['chronicle'], verse: 'mercy',
  },
  {
    id: 'cylinder', bce: 539, endBce: 538, circa: true, deed: true, places: ['babylon'], zoom: 6,
    sources: ['cyrusCylinder'], relics: ['cylinder'], verse: 'justice',
  },
  {
    id: 'exiles', bce: 538, deed: true, places: ['jerusalem', 'babylon'],
    sources: ['ezra', 'isaiah', 'cyrusCylinder'],
  },
  {
    id: 'tomb', bce: 530, places: ['pasargadae'], zoom: 6.8,
    sources: ['arrian', 'strabo', 'plutarch', 'herodotus'], hero: 'tomb', relics: ['inscription'],
  },
]
