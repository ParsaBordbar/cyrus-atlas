interface Source {
  title: string
  description: string
  url: string
}

interface Props {
  heading: string
  sources: Source[]
}

export default function ArticleSources({ heading, sources }: Props) {
  return (
    <section className="article-sources">
      <h2>{heading}</h2>

      <ol>
        {sources.map((source) => (
          <li key={source.url}>
            <a href={source.url} target="_blank" rel="noreferrer">
              {source.title}
            </a>
            <p>{source.description}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}