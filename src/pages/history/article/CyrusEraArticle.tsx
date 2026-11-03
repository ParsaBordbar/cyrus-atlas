import { useEffect } from 'react'

import type { ArticleSourceId, Dict } from '../../../i18n/en' // adjust path
import ArticleHeader from '../../../components/article/ArticleHeader'
import ArticleImage from '../../../components/article/ArticleImage'
import ArticleContent from '../../../components/article/ArticleContent'
import ArticleTableOfContents from '../../../components/article/ArticleTableOfContents'
import ArticleSources from '../../../components/article/ArticleSources'
import { useAtlasState } from '../../../app/useAtlasState'

const sourceUrls: Record<ArticleSourceId, string> = {
  iranicaCyrus: 'https://www.iranicaonline.org/articles/cyrus-iii/',
  unescoPasargadae: 'https://whc.unesco.org/en/list/1106/',
  metCylinder: 'https://www.metmuseum.org/exhibitions/listings/2013/cyrus-cylinder',
  iranicaCuneiform: 'https://www.iranicaonline.org/articles/cuneiform-script/',
  iranicaLanguages:
    'https://www.iranicaonline.org/articles/iran-vii1-non-iranian-languages-overview/',
  oxfordCyrus: 'https://academic.oup.com/edited-volume/61673/chapter-abstract/548061815',
}

const sourceOrder: ArticleSourceId[] = [
  'iranicaCyrus',
  'unescoPasargadae',
  'metCylinder',
  'iranicaCuneiform',
  'iranicaLanguages',
  'oxfordCyrus',
]

/* Wikimedia Commons files. Use standard thumbnail widths (1280 / 1920). */
const FILES = {
  hero: 'Pasargad Tomb Cyrus3.jpg',
  politics: 'Median Empire.svg',
  language: 'Behistun inscription.jpg',
  writing: 'Cyrus Cylinder 2.jpg',
  dailyLife: 'Persepolis stairs of the Apadana relief.jpg',
  clothing: 'Archers frieze Darius palace Louvre AOD487.jpg',
  architecture: 'Pasargades winged man.jpg',
  religion: 'Pergamonmuseum Ishtartor 05.jpg',
  empire: 'Achaemenid Empire under different kings (flat map).svg',
  identity: 'Medes and Persians at eastern stairs of the Apadana, Persepolis.JPG',
} as const

const commonsSrc = (file: string, width: 1280 | 1920 = 1280) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${width}`

const commonsPage = (file: string) =>
  `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file.replace(/ /g, '_'))}`

interface CommonsImageProps {
  file: string
  alt: string
  caption: string
  t: Dict
  width?: 1280 | 1920
  variant?: 'cover' | 'contain'
}

function CommonsImage({ file, alt, caption, t, width = 1280, variant }: CommonsImageProps) {
  return (
    <ArticleImage
      src={commonsSrc(file, width)}
      alt={alt}
      caption={caption}
      source={t.article.imageSource}
      sourceUrl={commonsPage(file)}
      sourceLabel={t.article.sourceLabel}
      variant={variant}
    />
  )
}


function CyrusEraArticle() {
  const { t } = useAtlasState()
  const a = t.article

  useEffect(() => {
    document.title = a.metaTitle
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', a.metaDescription)
  }, [a.metaTitle, a.metaDescription])

  const sections = [
    { id: 'politics', title: a.politics.title },
    { id: 'language', title: a.language.title },
    { id: 'writing', title: a.writing.title },
    { id: 'daily-life', title: a.dailyLife.title },
    { id: 'clothing', title: a.clothing.title },
    { id: 'architecture', title: a.architecture.title },
    { id: 'religion', title: a.religion.title },
    { id: 'empire', title: a.empire.title },
    { id: 'comparison', title: a.comparison.title },
    { id: 'identity', title: a.identity.title },
  ]

  const sources = sourceOrder.map((id) => ({
    ...a.sources[id],
    url: sourceUrls[id],
  }))

  return (
    <main className="article-page">
      <div className="article-container">
        <ArticleHeader
          title={a.title}
          category={a.category}
          subtitle={a.subtitle}
          readingTime={a.readingTime}
        />

        <CommonsImage
          file={FILES.hero}
          alt={a.heroAlt}
          caption={a.heroCaption}
          t={t}
          width={1920}
        />

        <div className="article-layout">
          <aside className="article-sidebar">
            <ArticleTableOfContents heading={a.tocHeading} sections={sections} />
          </aside>

          <article className="article-body">
            <p className="article-intro">{a.intro[0]}</p>
            <p>{a.intro[1]}</p>
            <p>{a.intro[2]}</p>

            <ArticleContent id="politics" title={a.politics.title}>
              <p>{a.politics.p1}</p>
              <CommonsImage
                file={FILES.politics}
                alt={a.images.politics.alt}
                caption={a.images.politics.caption}
                t={t}
                variant="contain"
              />
              <ul>
                {a.politics.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>{a.politics.p2}</p>
            </ArticleContent>

            <ArticleContent id="language" title={a.language.title}>
              <p>{a.language.p1}</p>
              <CommonsImage
                file={FILES.language}
                alt={a.images.language.alt}
                caption={a.images.language.caption}
                t={t}
              />
              <ul>
                {a.language.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>{a.language.p2}</p>
            </ArticleContent>

            <ArticleContent id="writing" title={a.writing.title}>
              <p>{a.writing.p1}</p>
              <CommonsImage
                file={FILES.writing}
                alt={a.writing.imageAlt}
                caption={a.writing.imageCaption}
                t={t}
              />
              <p>{a.writing.p2}</p>
            </ArticleContent>

            <ArticleContent id="daily-life" title={a.dailyLife.title}>
              <p>{a.dailyLife.p1}</p>
              <CommonsImage
                file={FILES.dailyLife}
                alt={a.images.dailyLife.alt}
                caption={a.images.dailyLife.caption}
                t={t}
              />

              <h3>{a.dailyLife.farmingTitle}</h3>
              <p>{a.dailyLife.farming}</p>

              <h3>{a.dailyLife.herdingTitle}</h3>
              <p>{a.dailyLife.herding}</p>

              <h3>{a.dailyLife.tradeTitle}</h3>
              <p>{a.dailyLife.trade}</p>
            </ArticleContent>

            <ArticleContent id="clothing" title={a.clothing.title}>
              <p>{a.clothing.p1}</p>
              <CommonsImage
                file={FILES.clothing}
                alt={a.images.clothing.alt}
                caption={a.images.clothing.caption}
                t={t}
                variant="contain"
              />
              <ul>
                {a.clothing.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </ArticleContent>

            <ArticleContent id="architecture" title={a.architecture.title}>
              <p>{a.architecture.p1}</p>
              <CommonsImage
                file={FILES.architecture}
                alt={a.architecture.imageAlt}
                caption={a.architecture.imageCaption}
                t={t}
                variant="contain"
              />
              <p>{a.architecture.p2}</p>
            </ArticleContent>

            <ArticleContent id="religion" title={a.religion.title}>
              <p>{a.religion.p1}</p>
              <CommonsImage
                file={FILES.religion}
                alt={a.images.religion.alt}
                caption={a.images.religion.caption}
                t={t}
              />
              <p>{a.religion.p2}</p>
              <p>{a.religion.p3}</p>
            </ArticleContent>

            <ArticleContent id="empire" title={a.empire.title}>
              <p>{a.empire.p1}</p>
              <CommonsImage
                file={FILES.empire}
                alt={a.images.empire.alt}
                caption={a.images.empire.caption}
                t={t}
                variant="contain"
              />

              <div className="timeline">
                {a.empire.timeline.map(([date, event]) => (
                  <div className="timeline-item" key={date}>
                    <strong>{date}</strong>
                    <span>{event}</span>
                  </div>
                ))}
              </div>
            </ArticleContent>

            <ArticleContent id="comparison" title={a.comparison.title}>
              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      {a.comparison.headers.map((h) => (
                        <th key={h}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {a.comparison.rows.map((row) => (
                      <tr key={row[0]}>
                        {row.map((cell) => (
                          <td key={cell}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ArticleContent>

            <ArticleContent id="identity" title={a.identity.title}>
              <p>{a.identity.p1}</p>
              <CommonsImage
                file={FILES.identity}
                alt={a.images.identity.alt}
                caption={a.images.identity.caption}
                t={t}
              />
              <p>{a.identity.p2}</p>
            </ArticleContent>

            <section className="article-conclusion">
              <h2>{a.conclusion.title}</h2>
              <p>{a.conclusion.p1}</p>
              <p>{a.conclusion.p2}</p>
            </section>

            <ArticleSources heading={a.sourcesHeading} sources={sources} />
          </article>
        </div>
      </div>
    </main>
  )
}

export default CyrusEraArticle