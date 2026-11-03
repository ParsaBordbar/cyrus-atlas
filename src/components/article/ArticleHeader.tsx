interface ArticleHeaderProps {
  title: string
  category: string
  subtitle: string
  readingTime: string
  date?: string
}

export default function ArticleHeader({
  title,
  category,
  subtitle,
  readingTime,
  date,
}: ArticleHeaderProps) {
  return (
    <header className="article-header">
      <div className="article-category">{category}</div>

      <h1>{title}</h1>

      <p className="article-subtitle">{subtitle}</p>

      <div className="article-meta">
        <span>{readingTime}</span>
        {date && <span>{date}</span>}
      </div>
    </header>
  )
}