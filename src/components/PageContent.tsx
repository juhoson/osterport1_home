import React from 'react';
import { PageContent as PageContentType } from '../types/content';
import ContentSectionComponent from './ContentSection';
import './PageContent.css';

interface PageContentProps {
  content: PageContentType;
}

const PageContent: React.FC<PageContentProps> = ({ content }) => {
  return (
    <article className="page-content">
      <h1 className="page-title">{content.title}</h1>
      <div className="page-sections">
        {content.sections.map((section, index) => (
          <ContentSectionComponent key={index} section={section} />
        ))}
      </div>
    </article>
  );
};

export default PageContent;
