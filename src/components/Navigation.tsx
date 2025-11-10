import React, { useState } from 'react';
import menuData from '../data/menu.json';
import { MenuItem } from '../types/content';
import './Navigation.css';

interface NavigationProps {
  currentPath?: string;
  onNavigate?: (path: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPath = '/', onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = menuData as MenuItem[];

  const handleClick = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
    }
    setIsOpen(false);
  };

  return (
    <nav className="navigation">
      <button
        className="nav-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
        {menuItems.map((item) => (
          <li key={item.id} className="nav-item">
            <a
              href={item.path}
              className={`nav-link ${currentPath === item.path ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleClick(item.path);
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
