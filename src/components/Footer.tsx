import React from 'react';
import siteConfig from '../data/site-config.json';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {currentYear} {siteConfig.siteName}. Alla rättigheter förbehållna.</p>
      </div>
    </footer>
  );
};

export default Footer;
