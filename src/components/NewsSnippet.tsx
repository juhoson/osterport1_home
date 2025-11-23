import React from 'react';
import { NewsItem } from '../types/content';
import './NewsSnippet.css';

interface NewsSnippetProps {
  items: NewsItem[];
  maxItems?: number;
  linkToFull?: string;
  onNavigate?: (path: string) => void;
}

const NewsSnippet: React.FC<NewsSnippetProps> = ({ items, maxItems = 4, linkToFull, onNavigate }) => {
  const displayItems = items.slice(0, maxItems);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('sv-SE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const truncateContent = (content: string, maxLength: number = 150): string => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength).trim() + '...';
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    if (linkToFull && onNavigate) {
      e.preventDefault();
      onNavigate(linkToFull);
    }
  };

  return (
    <div className="news-snippet">
      <div className="news-snippet-grid">
        {displayItems.map((item, index) => (
          <div key={index} className="news-snippet-item">
            <div className="news-snippet-date">{formatDate(item.date)}</div>
            <h3 className="news-snippet-title">{item.title}</h3>
            <p className="news-snippet-content">{truncateContent(item.content)}</p>
          </div>
        ))}
      </div>
      {linkToFull && (
        <div className="news-snippet-footer">
          <a
            href={linkToFull}
            className="news-snippet-link"
            onClick={handleLinkClick}
          >
            Se alla nyheter →
          </a>
        </div>
      )}
    </div>
  );
};

export default NewsSnippet;
