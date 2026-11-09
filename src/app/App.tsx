import { Routes, Route } from 'react-router'
import Home from '../pages/Home'
import CyrusEraArticle from '../pages/history/article/CyrusEraArticle'
import NotFound from '../pages/NotFound'
import '../styles/base.css';
import '../styles/atlas.css';
import '../styles/article.css';
import Header from '../components/Header';
import History from '../pages/history/History';
import Models from '../pages/Models';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/models" element={<Models />} />

        <Route
          path="/history/cyrus-era"
          element={<CyrusEraArticle />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App