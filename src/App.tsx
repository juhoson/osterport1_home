import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import PageContent from './components/PageContent';
import { PageContent as PageContentType } from './types/content';
import './App.css';

function App() {
  const [currentPath, setCurrentPath] = useState('/');
  const [pageContent, setPageContent] = useState<PageContentType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadPageContent(currentPath);
  }, [currentPath]);

  const loadPageContent = async (path: string) => {
    setIsLoading(true);
    setError(null);

    try {
      let pageId = 'home';
      if (path !== '/') {
        pageId = path.substring(1);
      }

      const content = await import(`./data/pages/${pageId}.json`);
      setPageContent(content.default || content);
    } catch (err) {
      console.error('Error loading page content:', err);
      setError('Kunde inte ladda sidan. Försök igen senare.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleNavigate = (path: string) => {
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Layout currentPath={currentPath} onNavigate={handleNavigate}>
        {isLoading && <div className="loading">Laddar...</div>}
        {error && <div className="error">{error}</div>}
        {!isLoading && !error && pageContent && (
          <PageContent content={pageContent} />
        )}
      </Layout>
    </div>
  );
}

export default App;
