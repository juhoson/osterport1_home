import React from 'react';
import logo from '../assets/logo.svg';
import Navigation from './Navigation';
import siteConfig from '../data/site-config.json';
import './Header.css';

interface HeaderProps {
  currentPath?: string;
  onNavigate?: (path: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <img src={logo} alt={siteConfig.siteName} />
        </div>
        <Navigation currentPath={currentPath} onNavigate={onNavigate} />
      </div>
    </header>
  );
};

export default Header;
