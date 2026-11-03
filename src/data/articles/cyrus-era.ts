export interface HistoryArticle {
  name: string;
  subtitle: string;
  readingTime: string;
  category: string;
  href: string;
}

export const getCyrusEra = (t: any): HistoryArticle[] => [
  {
    name: t.article.title,
    subtitle: t.article.subtitle,
    readingTime: t.article.readingTime,
    category: t.article.category,
    href: "/history/cyrus-era",
  },
];
