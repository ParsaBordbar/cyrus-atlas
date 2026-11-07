import { Suspense, lazy, useState } from 'react'
import { models, modelSrc, modelThumbSrc, type ModelId } from '../data/models'
import { useAtlasState } from '../app/useAtlasState'
import './Models.css'

const ModelViewer = lazy(() =>
  import('../components/ModelViewer').then((m) => ({ default: m.ModelViewer })),
)

export default function Models() {
  const { t } = useAtlasState()
  const [active, setActive] = useState<ModelId>(models[0].id)
  const activeModel = models.find((m) => m.id === active) ?? models[0]

  return (
    <main className="models-page">
      <div className="models-container">
        <header className="models-header">
          <h1 className="models-title">{t.modelsPage.title}</h1>
          <p className="models-description">{t.modelsPage.description}</p>
          <div className="models-divider">
            <span />
            <span className="models-divider-symbol">✦</span>
            <span />
          </div>
        </header>

        <section className="models-stage">
          <div className="models-stage-frame">
            <Suspense fallback={<p className="models-stage-note">{t.modelsPage.loading}</p>}>
              <ModelViewer
                key={active}
                src={modelSrc(active)}
                t={t}
                label={t.models[active].title}
              />
            </Suspense>
          </div>

          <div className="models-stage-meta">
            <h2 className="models-stage-title">{t.models[activeModel.id].title}</h2>
            <p className="models-stage-caption">{t.models[activeModel.id].caption}</p>
            <p className="models-credit" dir="ltr">
              {t.modelsPage.sourceLabel}:&nbsp;
              <a href={activeModel.sourceUrl} target="_blank" rel="noreferrer">
                {activeModel.author}
              </a>
              {', '}
              <a href={activeModel.licenseUrl} target="_blank" rel="noreferrer">
                {activeModel.license}
              </a>
              {', via Sketchfab'}
            </p>
          </div>
        </section>

        <ul className="models-grid">
          {models.map((m) => (
            <li key={m.id}>
              <button
                type="button"
                className="models-card"
                data-active={m.id === active}
                onClick={() => setActive(m.id)}
                aria-pressed={m.id === active}
              >
                <span className="models-card-frame">
                  <img
                    src={modelThumbSrc(m.id)}
                    width={m.thumbWidth}
                    height={m.thumbHeight}
                    alt=""
                    loading="lazy"
                  />
                  <span className="models-card-title">{t.models[m.id].title}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
