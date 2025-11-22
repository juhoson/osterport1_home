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
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const menuItems = menuData as MenuItem[];

  const handleClick = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
    }
    setIsOpen(false);
    setOpenSubmenu(null);
  };

  const toggleSubmenu = (itemId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenSubmenu(openSubmenu === itemId ? null : itemId);
  };

  const isItemActive = (item: MenuItem): boolean => {
    if (currentPath === item.path) return true;
    if (item.children) {
      return item.children.some(child => currentPath === child.path);
    }
    return false;
  };

  const renderMenuItem = (item: MenuItem) => {
    const hasChildren = item.children && item.children.length > 0;
    const isActive = isItemActive(item);
    const isSubmenuOpen = openSubmenu === item.id;

    return (
      <li key={item.id} className={`nav-item ${hasChildren ? 'has-submenu' : ''}`}>
        <a
          href={item.path}
          className={`nav-link ${isActive ? 'active' : ''}`}
          onClick={(e) => {
            if (hasChildren) {
              toggleSubmenu(item.id, e);
            } else {
              e.preventDefault();
              handleClick(item.path);
            }
          }}
        >
          {item.label}
          {hasChildren && (
            <svg
              className={`submenu-arrow ${isSubmenuOpen ? 'open' : ''}`}
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </a>
        {hasChildren && (
          <ul className={`submenu ${isSubmenuOpen ? 'open' : ''}`}>
            {item.children!.map((child) => (
              <li key={child.id} className="submenu-item">
                <a
                  href={child.path}
                  className={`submenu-link ${currentPath === child.path ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(child.path);
                  }}
                >
                  {child.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
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
        {menuItems.map((item) => renderMenuItem(item))}
      </ul>
    </nav>
  );
};

export default Navigation;
