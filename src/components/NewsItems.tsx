import React from 'react';
import { NewsItem } from '../types/content';
import './NewsItems.css';

interface NewsItemsProps {
  items: NewsItem[];
}

const NewsItems: React.FC<NewsItemsProps> = ({ items }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('sv-SE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="news-items">
      {items.map((item, index) => (
        <article key={index} className="news-item">
          <div className="news-header">
            <time className="news-date" dateTime={item.date}>
              {formatDate(item.date)}
            </time>
            <h3 className="news-title">{item.title}</h3>
          </div>
          <div className="news-content">
            <p>{item.content}</p>
            {item.updated && (
              <div className="news-update">
                <strong>Uppdatering:</strong> {item.updated}
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  );
};

export default NewsItems;
