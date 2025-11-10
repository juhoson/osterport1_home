import React from 'react';
import { ContentSection as ContentSectionType, BoardMember } from '../types/content';
import BoardMembers from './BoardMembers';
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

    default:
      return null;
  }
};

export default ContentSection;
