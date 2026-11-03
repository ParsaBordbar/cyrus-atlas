import type { ReactNode } from 'react'

interface ArticleContentProps {
  id: string
  title: string
  children: ReactNode
}

export default function ArticleContent({
  id,
  title,
  children,
}: ArticleContentProps) {
  return (
    <section id={id} className="article-section">
      <h2>{title}</h2>
      <div className="article-section-content">
        {children}
      </div>
    </section>
  )
}