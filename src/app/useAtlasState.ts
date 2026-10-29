import { useCallback, useEffect, useState } from 'react'
import { events, type AtlasEvent } from '../data/events'
import type { PlaceId } from '../data/places'
import { en, type Dict, type Lang } from '../i18n/en'
import { fa } from '../i18n/fa'

const dicts: Record<Lang, Dict> = { en, fa }
const LANG_KEY = 'cyrus-atlas:lang'

const LAST_BCE = events[events.length - 1].bce

function storedLang(): Lang {
  try {
    const v = localStorage.getItem(LANG_KEY)
    if (v === 'en' || v === 'fa') return v
  } catch {
  }
  return navigator.language.startsWith('fa') ? 'fa' : 'en'
}

export function formatYear(e: AtlasEvent, t: Dict) {
  const span = e.endBce ? `${t.digits(e.bce)}–${t.digits(e.endBce)}` : t.digits(e.bce)
  return { prefix: e.circa ? t.circa : '', year: span + (e.disputed ? '*' : ''), era: t.era }
}

export function useAtlasState() {
  const [index, setIndex] = useState<number | null>(null)
  const [lang, setLangState] = useState<Lang>(storedLang)
  const t = dicts[lang]

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    try {
      localStorage.setItem(LANG_KEY, l)
    } catch {
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = t.dir
    document.title = t.intro.heading
  }, [lang, t])

  const next = useCallback(() => setIndex((i) => (i === null ? 0 : Math.min(i + 1, events.length - 1))), [])
  const prev = useCallback(() => setIndex((i) => (i === null || i === 0 ? null : i - 1)), [])
  const overview = useCallback(() => setIndex(null), [])

  const selectPlace = useCallback((id: PlaceId) => {
    const i = events.findIndex((e) => e.places.includes(id))
    if (i >= 0) setIndex(i)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('input, textarea, .maplibregl-canvas-container')) return
      if (document.querySelector('dialog[open], .verse-card:popover-open')) return
      const forward = t.dir === 'ltr' ? 'ArrowRight' : 'ArrowLeft'
      const back = t.dir === 'ltr' ? 'ArrowLeft' : 'ArrowRight'
      if (e.key === forward) next()
      else if (e.key === back) prev()
      else if (e.key === 'Escape') overview()
      else return
      e.preventDefault()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev, overview, t.dir])

  const event = index === null ? null : events[index]
  const previous = index === null || index === 0 ? null : events[index - 1]

  return {
    t,
    lang,
    setLang,
    index,
    setIndex,
    event,
    previous,
    heldSince: event?.bce ?? LAST_BCE,
    next,
    prev,
    overview,
    selectPlace,
  }
}
