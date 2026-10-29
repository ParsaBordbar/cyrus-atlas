import { useId, useState } from 'react'
import { Feather, ScrollText } from 'lucide-react'
import { sources, type SourceId } from '../data/sources'
import type { Dict } from '../i18n/en'

function Wedges() {
  return (
    <svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true">
      <path d="M2 3h6L5 6.5z M9 3h5l-2.5 3z M5 9h6l-3 5z" fill="currentColor" />
    </svg>
  )
}

export function SourceBadge({ id, t }: { id: SourceId; t: Dict }) {
  const [open, setOpen] = useState(false)
  const noteId = useId()
  const { kind, ref } = sources[id]
  const text = t.sources[id]

  return (
    <li className="source" data-kind={kind}>
      <button type="button" className="source-head" aria-expanded={open} aria-controls={noteId} onClick={() => setOpen((o) => !o)}>
        <span className="source-mark">
          {kind === 'cuneiform' ? (
            <Wedges />
          ) : kind === 'hebrew' ? (
            <ScrollText size={14} strokeWidth={1.6} aria-hidden="true" />
          ) : (
            <Feather size={14} strokeWidth={1.6} aria-hidden="true" />
          )}
        </span>
        <span className="source-title">{text.title}</span>
        <span className="source-kind">{t.sourceKind[kind]}</span>
      </button>
      <div id={noteId} className="source-note" hidden={!open}>
        <p>{text.note}</p>
        <p className="source-ref" dir="ltr">{ref}</p>
      </div>
    </li>
  )
}
