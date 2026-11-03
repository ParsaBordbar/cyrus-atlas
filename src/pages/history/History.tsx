import { Link } from "react-router";
import { useAtlasState } from "../../app/useAtlasState";
import { getCyrusEra } from "../../data/articles/cyrus-era";
import "./History.css";

export default function History() {
    const { t } = useAtlasState();

    const article = getCyrusEra(t);

    return (
        <main className="history-page">
            <div className="history-container">
                {/* Header */}
                <header className="history-header">

                    <h1 className="history-title">
                        {t.history?.title ?? "History"}
                    </h1>

                    <p className="history-description">
                        {t.history?.description ??
                            "Explore the stories, civilizations, and people that shaped Persian history."}
                    </p>

                    <div className="history-divider">
                        <span />
                        <span className="history-divider-symbol">✦</span>
                        <span />
                    </div>
                </header>

                {/* Articles */}
                <section className="grid grid-cols-3 gap-4 justify-center">
                    {article.map((a) => (
                        <Link to={a.href} className="history-card">
                            <div className="history-card-frame">
                                <div className="history-card-top">
                                    <span className="history-card-number">01</span>

                                    <span className="history-card-category">
                                        {a.category}
                                    </span>
                                </div>

                                <div className="history-card-content">
                                    <h2 className="history-card-title">
                                        {a.name}
                                    </h2>
                                    <p className="history-card-subtitle">
                                        {a.subtitle}
                                    </p>
                                </div>

                                <div className="history-card-bottom">
                                    <span className="history-reading-time">
                                        <span className="history-clock">◷</span>
                                        {a.readingTime}
                                    </span>

                                    <span className="history-read-more">
                                        {t.article?.readMore}
                                        <span>↗</span>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </section>
            </div>
        </main>
    );
}