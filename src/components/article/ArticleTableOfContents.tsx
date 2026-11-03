interface Section {
  id: string
  title: string
}

interface Props {
  heading: string
  sections: Section[]
}

export default function ArticleTableOfContents({ heading, sections }: Props) {
  return (
    <nav className="article-toc" aria-label={heading}>
      <h2>{heading}</h2>

      <ol>
        {sections.map((section) => (
          <li key={section.id}>
            <a href={`#${section.id}`}>{section.title}</a>
          </li>
        ))}
      </ol>
    </nav>
  )
}