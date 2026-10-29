import type { RefObject } from 'react'
import { Maximize, Minus, Plus } from 'lucide-react'
import type { MapRef } from '@vis.gl/react-maplibre'
import { EMPIRE_BOUNDS } from '../data/places'
import type { Dict } from '../i18n/en'

export function MapControls({ mapRef, t }: { mapRef: RefObject<MapRef | null>; t: Dict }) {
  const map = () => mapRef.current
  return (
    <div className="controls" role="group">
      <button type="button" onClick={() => map()?.zoomIn()} aria-label={t.zoomIn} title={t.zoomIn}>
        <Plus size={16} strokeWidth={1.6} aria-hidden="true" />
      </button>
      <button type="button" onClick={() => map()?.zoomOut()} aria-label={t.zoomOut} title={t.zoomOut}>
        <Minus size={16} strokeWidth={1.6} aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => map()?.fitBounds(EMPIRE_BOUNDS, { padding: 60 })}
        aria-label={t.showEmpire}
        title={t.showEmpire}
      >
        <Maximize size={15} strokeWidth={1.6} aria-hidden="true" />
      </button>
    </div>
  )
}
