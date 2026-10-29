import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { BookOpen } from 'lucide-react'
import { pictureSrc } from '../data/gallery'
import { verses, type VerseId } from '../data/shahnameh'
import type { Dict } from '../i18n/en'

type Props = { id: VerseId; t: Dict }

export function ShahnamehVerse({ id, t }: Props) {
  const [open, setOpen] = useState(false)
  const [pos, setPos] = useState({ top: 0, left: 0 })
  const triggerRef = useRef<HTMLButtonElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const hideTimer = useRef<number | undefined>(undefined)
  const cardId = useId()
  const verse = verses[id]
  const copy = t.verses[id]
  const english = t.dir === 'ltr' ? copy.lines : undefined

  const show = useCallback(() => {
    window.clearTimeout(hideTimer.current)
    setOpen(true)
  }, [])

  const hide = useCallback(() => {
    window.clearTimeout(hideTimer.current)
    hideTimer.current = window.setTimeout(() => setOpen(false), 160)
  }, [])

  useEffect(() => {
    const card = cardRef.current
    const trigger = triggerRef.current
    if (!card || !trigger) return
    if (!open) {
      if (card.matches(':popover-open')) card.hidePopover()
      return
    }
    if (!card.matches(':popover-open')) card.showPopover()
    const r = trigger.getBoundingClientRect()
    const w = card.offsetWidth
    const h = card.offsetHeight
    const gap = 10
    const left = Math.min(Math.max(12, r.left + r.width / 2 - w / 2), window.innerWidth - w - 12)
    const top = r.top - h - gap > 12 ? r.top - h - gap : Math.min(r.bottom + gap, window.innerHeight - h - 12)
    setPos({ top, left })
  }, [open])

  useEffect(() => () => window.clearTimeout(hideTimer.current), [])

  return (
    <div className="verse">
      <button
        ref={triggerRef}
        type="button"
        className="verse-trigger"
        aria-expanded={open}
        aria-controls={cardId}
        onMouseEnter={show}
        onMouseLeave={hide}
        onFocus={show}
        onBlur={hide}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={(e) => {
          if (e.key === 'Escape' && open) {
            e.stopPropagation()
            setOpen(false)
          }
        }}
      >
        <BookOpen size={15} strokeWidth={1.6} aria-hidden="true" />
        {t.shahnameh.trigger}
      </button>

      <div
        ref={cardRef}
        id={cardId}
        popover="manual"
        role="dialog"
        aria-label={t.shahnameh.heading}
        className="verse-card"
        style={{ top: pos.top, left: pos.left }}
        onMouseEnter={show}
        onMouseLeave={hide}
      >
        <div className="verse-head">
          <img src={pictureSrc('kaykhosrow', true)} alt="" width="44" height="52" />
          <p className="verse-heading">{t.shahnameh.heading}</p>
        </div>
        <div className="verse-couplets" lang="fa" dir="rtl">
          {verse.couplets.map(([a, b]) => (
            <p key={a} className="verse-couplet">
              <span>{a}</span>
              <span>{b}</span>
            </p>
          ))}
        </div>
        {english && (
          <div className="verse-english">
            {english.map(([a, b]) => (
              <p key={a}>
                {a}
                <br />
                {b}
              </p>
            ))}
          </div>
        )}
        <p className="verse-context">{copy.context}</p>
        <a className="verse-link" href={verse.url} target="_blank" rel="noreferrer" onFocus={show} onBlur={hide}>
          {t.shahnameh.readMore}
        </a>
      </div>
    </div>
  )
}
