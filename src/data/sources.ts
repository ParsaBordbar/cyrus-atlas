export type SourceId =
  | 'nabonidusChronicle'
  | 'cyrusCylinder'
  | 'sipparCylinder'
  | 'herodotus'
  | 'strabo'
  | 'arrian'
  | 'plutarch'
  | 'cicero'
  | 'berossus'
  | 'ezra'
  | 'isaiah'

export type SourceKind = 'cuneiform' | 'classical' | 'hebrew'

export const sources: Record<SourceId, { kind: SourceKind; ref: string }> = {
  nabonidusChronicle: { kind: 'cuneiform', ref: 'BM 35382 (ABC 7)' },
  cyrusCylinder: { kind: 'cuneiform', ref: 'BM 90920' },
  sipparCylinder: { kind: 'cuneiform', ref: 'BM 91109' },
  herodotus: { kind: 'classical', ref: 'Histories I.130, I.86–88, III.89' },
  strabo: { kind: 'classical', ref: 'Geography XV.3.7–8' },
  arrian: { kind: 'classical', ref: 'Anabasis IV.3, VI.29' },
  plutarch: { kind: 'classical', ref: 'Life of Alexander 69' },
  cicero: { kind: 'classical', ref: 'On Divination I.46' },
  berossus: { kind: 'classical', ref: 'Josephus, Against Apion I.20' },
  ezra: { kind: 'hebrew', ref: 'Ezra 1:1–4, 6:3–5' },
  isaiah: { kind: 'hebrew', ref: 'Isaiah 44:28–45:1' },
}
