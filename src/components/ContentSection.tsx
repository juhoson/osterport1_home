import React from 'react';
import { ContentSection as ContentSectionType, BoardMember, NewsItem } from '../types/content';
import BoardMembers from './BoardMembers';
import NewsItems from './NewsItems';
import './ContentSection.css';

interface ContentSectionProps {
  section: ContentSectionType;
}

const ContentSection: React.FC<ContentSectionProps> = ({ section }) => {
  switch (section.type) {
    case 'heading':
      const headingLevel = section.level || 2;
      return React.createElement(
        `h${headingLevel}`,
        { className: 'section-heading' },
        section.content
      );

    case 'text':
      return <p className="section-text">{section.content}</p>;

    case 'board-members':
      return <BoardMembers members={section.items as BoardMember[]} />;

    case 'list':
      return (
        <ul className="section-list">
          {(section.items as string[]).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );

    case 'image-gallery':
      return (
        <div className="section-gallery">
          {section.images?.map((image, index) => (
            <img key={index} src={image} alt={`Construction ${index + 1}`} />
          ))}
        </div>
      );

    case 'news-list':
      return <NewsItems items={section.items as NewsItem[]} />;

    case 'document-link':
      return (
        <div className="document-link">
          <a href={section.url} target="_blank" rel="noopener noreferrer" className="document-link-button">
            <svg className="document-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V16C4 16.5304 4.21071 17.0391 4.58579 17.4142C4.96086 17.7893 5.46957 18 6 18H14C14.5304 18 15.0391 17.7893 15.4142 17.4142C15.7893 17.0391 16 16.5304 16 16V6L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 2V6H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 11V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 13H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {section.linkText || 'Ladda ner dokument'}
          </a>
        </div>
      );

    default:
      return null;
  }
};

export default ContentSection;
