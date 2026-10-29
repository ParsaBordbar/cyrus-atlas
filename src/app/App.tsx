import { useRef, useState } from 'react'
import type { MapRef } from '@vis.gl/react-maplibre'
import { events } from '../data/events'
import type { PictureId } from '../data/gallery'
import { AtlasMap } from '../components/AtlasMap'
import { LanguageToggle } from '../components/LanguageToggle'
import { MapControls } from '../components/MapControls'
import { PictureModal } from '../components/PictureModal'
import { Rosette } from '../components/Rosette'
import { StoryPanel } from '../components/StoryPanel'
import { Timeline } from '../components/Timeline'
import { useAtlasState } from './useAtlasState'

export default function App() {
  const mapRef = useRef<MapRef>(null)
  const [picture, setPicture] = useState<PictureId | null>(null)
  const s = useAtlasState()
  const { t } = s

  return (
    <div className="sheet">
      <main className="neatline">
        <AtlasMap
          mapRef={mapRef}
          t={t}
          event={s.event}
          previous={s.previous}
          heldSince={s.heldSince}
          onSelectPlace={s.selectPlace}
        />
        <div className="grain" aria-hidden="true" />

        <header className="cartouche">
          <h1 className="cartouche-title">{t.title}</h1>
          <p className="cartouche-subtitle">{t.subtitle}</p>
          <ul className="legend">
            <li><span className="legend-swatch" data-held="yes" />{t.legendHeld}</li>
            <li><span className="legend-swatch" data-held="no" />{t.legendLater}</li>
            <li><span className="legend-rosette"><Rosette size={14} /></span>{t.legendDeed}</li>
          </ul>
          <p className="cartouche-note">{t.dayNote}</p>
        </header>

        <div className="toolbar">
          <LanguageToggle lang={s.lang} onChange={s.setLang} />
          <MapControls mapRef={mapRef} t={t} />
        </div>

        <StoryPanel
          t={t}
          event={s.event}
          isFirst={s.index === 0}
          isLast={s.index === events.length - 1}
          onPrev={s.prev}
          onNext={s.next}
          onOverview={s.overview}
          onOpenPicture={setPicture}
        />

        <Timeline t={t} index={s.index} onSelect={s.setIndex} />

        <p className="credit" dir="ltr">Coastlines and rivers: Natural Earth. Images: Wikimedia Commons</p>
      </main>

      <PictureModal id={picture} t={t} onClose={() => setPicture(null)} />
    </div>
  )
}
