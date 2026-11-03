interface ArticleImageProps {
  src: string
  alt: string
  caption?: string
  source?: string
  sourceUrl?: string
  sourceLabel?: string
  variant?: 'cover' | 'contain'
}

export default function ArticleImage({
  src,
  alt,
  caption,
  source,
  sourceUrl,
  sourceLabel = 'Source',
  variant = 'cover',
}: ArticleImageProps) {
  return (
    <figure
      className={`article-image${variant === 'contain' ? ' article-image--contain' : ''}`}
    >
      <img src={src} alt={alt} loading="lazy" decoding="async" />

      {caption && (
        <figcaption>
          <span>{caption}</span>

          {source && (
            <span className="image-source">
              {sourceLabel}:{' '}
              {sourceUrl ? (
                <a href={sourceUrl} target="_blank" rel="noreferrer">
                  {source}
                </a>
              ) : (
                source
              )}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  )
}