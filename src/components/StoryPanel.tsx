import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import type { AtlasEvent } from '../data/events'
import { pictures, pictureSrc, type PictureId } from '../data/gallery'
import { placeById } from '../data/places'
import { formatYear } from '../app/useAtlasState'
import type { Dict } from '../i18n/en'
import { Rosette } from './Rosette'
import { ShahnamehVerse } from './ShahnamehVerse'
import { SourceBadge } from './SourceBadge'

type Props = {
  t: Dict
  event: AtlasEvent | null
  isFirst: boolean
  isLast: boolean
  onPrev: () => void
  onNext: () => void
  onOverview: () => void
  onOpenPicture: (id: PictureId) => void
}

export function StoryPanel({ t, event, isFirst, isLast, onPrev, onNext, onOverview, onOpenPicture }: Props) {
  const Back = t.dir === 'ltr' ? ChevronLeft : ChevronRight
  const Forward = t.dir === 'ltr' ? ChevronRight : ChevronLeft

  if (!event) {
    return (
      <aside className="story" aria-live="polite">
        <h2 className="story-title story-title-intro">{t.intro.heading}</h2>
        <p className="story-body">{t.intro.body}</p>
        <button type="button" className="story-start" onClick={onNext}>
          {t.intro.start}
          <Forward size={16} strokeWidth={1.6} aria-hidden="true" />
        </button>
      </aside>
    )
  }

  const { prefix, year, era } = formatYear(event, t)
  const copy = t.events[event.id]

  return (
    <aside className="story" aria-live="polite" key={event.id}>
      <div className="story-year">
        {prefix && <span className="story-circa">{prefix}</span>}
        <span className="story-numeral">{year}</span>
        <span className="story-era">{era}</span>
        <button type="button" className="story-close" onClick={onOverview} aria-label={t.overview} title={t.overview}>
          <X size={16} strokeWidth={1.6} aria-hidden="true" />
        </button>
      </div>
      <h2 className="story-title">{copy.title}</h2>
      {event.deed && (
        <p className="story-deed">
          <Rosette size={16} />
          {t.deed}
        </p>
      )}
      {event.disputed && <p className="story-dispute">* {t.disputed}</p>}

      {event.hero && (
        <button type="button" className="story-hero" onClick={() => onOpenPicture(event.hero!)} aria-label={`${t.enlarge}: ${t.pictures[event.hero].title}`}>
          <img
            src={pictureSrc(event.hero)}
            width={pictures[event.hero].width}
            height={pictures[event.hero].height}
            alt={t.pictures[event.hero].title}
          />
        </button>
      )}

      <p className="story-body">{copy.body}</p>

      {event.verse && <ShahnamehVerse id={event.verse} t={t} />}

      {event.rivals?.map((id) => (
        <section key={id} className="story-group">
          <h3 className="story-label">{t.rivalsHeading}</h3>
          <button type="button" className="rival" onClick={() => onOpenPicture(id)} aria-label={`${t.enlarge}: ${t.pictures[id].title}`}>
            <img src={pictureSrc(id, true)} alt="" />
            <span className="rival-text">
              <span className="rival-name">{t.pictures[id].title}</span>
              <span className="rival-fate">{t.pictures[id].treatment}</span>
            </span>
          </button>
        </section>
      ))}

      {event.relics && (
        <section className="story-group">
          <h3 className="story-label">{t.relicsHeading}</h3>
          <ul className="relics">
            {event.relics.map((id) => (
              <li key={id}>
                <button type="button" className="relic" onClick={() => onOpenPicture(id)} aria-label={`${t.enlarge}: ${t.pictures[id].title}`}>
                  <img src={pictureSrc(id, true)} alt="" />
                  <span className="relic-title">{t.pictures[id].title}</span>
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}

      <p className="story-where">
        <span className="story-label">{t.where}</span>{' '}
        {event.places
          .map((id) => (placeById[id].approximate ? `${t.places[id]} (${t.approximate})` : t.places[id]))
          .join(t.dir === 'rtl' ? '، ' : ', ')}
      </p>

      <h3 className="story-label story-sources-heading">{t.sourcesHeading}</h3>
      <ul className="sources">
        {event.sources.map((id) => (
          <SourceBadge key={id} id={id} t={t} />
        ))}
      </ul>

      <nav className="story-steps" aria-label={t.timelineLabel}>
        <button type="button" onClick={onPrev} disabled={isFirst}>
          <Back size={16} strokeWidth={1.6} aria-hidden="true" />
          {t.earlier}
        </button>
        <button type="button" onClick={onNext} disabled={isLast}>
          {t.later}
          <Forward size={16} strokeWidth={1.6} aria-hidden="true" />
        </button>
      </nav>
    </aside>
  )
}
