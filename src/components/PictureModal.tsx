import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { pictures, pictureSrc, type PictureId } from '../data/gallery'
import type { Dict } from '../i18n/en'

type Props = { id: PictureId | null; t: Dict; onClose: () => void }

export function PictureModal({ id, t, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (id && !dialog.open) dialog.showModal()
    if (!id && dialog.open) dialog.close()
  }, [id])

  const pic = id ? pictures[id] : null
  const text = id ? t.pictures[id] : null

  return (
    <dialog
      ref={ref}
      className="plate"
      aria-labelledby="plate-title"
      onClose={onClose}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {pic && text && (
        <figure className="plate-figure">
          <button type="button" className="plate-close" onClick={onClose} aria-label={t.close} title={t.close}>
            <X size={18} strokeWidth={1.6} aria-hidden="true" />
          </button>
          <div className="plate-image" data-orientation={pic.width >= pic.height ? 'landscape' : 'portrait'}>
            <img src={pictureSrc(pic.id)} width={pic.width} height={pic.height} alt={text.title} />
          </div>
          <figcaption>
            <h2 id="plate-title" className="plate-title">{text.title}</h2>
            <p className="plate-caption">{text.caption}</p>
            {text.treatment && <p className="plate-treatment">{text.treatment}</p>}
            <p className="plate-credit" dir="ltr">
              <a href={pic.sourceUrl} target="_blank" rel="noreferrer">{pic.author}</a>
              {', '}
              {pic.licenseUrl ? (
                <a href={pic.licenseUrl} target="_blank" rel="noreferrer">{pic.license}</a>
              ) : (
                pic.license
              )}
              , via Wikimedia Commons
            </p>
          </figcaption>
        </figure>
      )}
    </dialog>
  )
}
