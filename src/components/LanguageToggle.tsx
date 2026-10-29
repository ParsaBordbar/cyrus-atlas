import type { Lang } from '../i18n/en'

const options: { lang: Lang; short: string; name: string }[] = [
  { lang: 'en', short: 'EN', name: 'English' },
  { lang: 'fa', short: 'فا', name: 'فارسی' },
]

export function LanguageToggle({ lang, onChange }: { lang: Lang; onChange: (l: Lang) => void }) {
  return (
    <div className="lang" role="group">
      {options.map((o) => (
        <button
          key={o.lang}
          type="button"
          lang={o.lang}
          aria-pressed={lang === o.lang}
          aria-label={o.name}
          onClick={() => onChange(o.lang)}
        >
          {o.short}
        </button>
      ))}
    </div>
  )
}
