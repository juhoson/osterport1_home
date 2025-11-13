import React from 'react';
import { InfoBoxItem } from '../types/content';
import './InfoBox.css';

interface InfoBoxProps {
  title?: string;
  items: InfoBoxItem[];
  highlight?: boolean;
}

const InfoBox: React.FC<InfoBoxProps> = ({ title, items, highlight = false }) => {
  const renderItem = (item: InfoBoxItem, index: number) => {
    const { label, value, type } = item;

    let displayValue = value;
    let href: string | undefined;

    switch (type) {
      case 'email':
        href = `mailto:${value}`;
        displayValue = value;
        break;
      case 'phone':
        href = `tel:${value.replace(/\s/g, '')}`;
        displayValue = value;
        break;
      case 'website':
        href = value.startsWith('http') ? value : `https://${value}`;
        displayValue = value;
        break;
      case 'address':
        // Preserve line breaks in addresses
        displayValue = value;
        break;
      default:
        displayValue = value;
    }

    return (
      <div key={index} className="info-box-item">
        {label && <span className="info-box-label">{label}:</span>}
        {href ? (
          <a href={href} className={`info-box-value info-box-${type}`}>
            {displayValue}
          </a>
        ) : type === 'address' ? (
          <div className="info-box-value info-box-address">
            {displayValue.split('\n').map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>
        ) : (
          <span className="info-box-value">{displayValue}</span>
        )}
      </div>
    );
  };

  return (
    <div className={`info-box ${highlight ? 'info-box-highlight' : ''}`}>
      {title && <h4 className="info-box-title">{title}</h4>}
      <div className="info-box-content">
        {items.map((item, index) => renderItem(item, index))}
      </div>
    </div>
  );
};

export default InfoBox;
