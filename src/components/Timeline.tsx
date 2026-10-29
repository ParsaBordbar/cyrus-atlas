import { events } from '../data/events'
import { formatYear } from '../app/useAtlasState'
import type { Dict } from '../i18n/en'
import { Rosette } from './Rosette'

type Props = { t: Dict; index: number | null; onSelect: (i: number) => void }

export function Timeline({ t, index, onSelect }: Props) {
  return (
    <nav className="scale" aria-label={t.timelineLabel} data-state={index === null ? 'overview' : 'story'}>
      <p className="scale-caption">{t.timelineCaption}</p>
      <ol className="scale-bar">
        {events.map((e, i) => {
          const { prefix, year } = formatYear(e, t)
          const band = index === null ? (i % 2 ? 'light' : 'dark') : i < index ? 'dark' : 'light'
          const label = `${prefix} ${year} ${t.era}: ${t.events[e.id].title}${e.deed ? ` (${t.deed})` : ''}`
          return (
            <li key={e.id} className="scale-step" data-band={band}>
              <button
                type="button"
                className="scale-tick"
                aria-current={index === i ? 'step' : undefined}
                aria-label={label}
                title={t.events[e.id].title}
                onClick={() => onSelect(i)}
              >
                <span className="scale-year">
                  {prefix && <span className="scale-circa">{prefix}</span>}
                  {e.endBce ? t.digits(e.bce) : year}
                </span>
                {e.deed && (
                  <span className="scale-deed">
                    <Rosette size={13} />
                  </span>
                )}
              </button>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
