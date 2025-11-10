import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
  currentPath?: string;
  onNavigate?: (path: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPath, onNavigate }) => {
  return (
    <div className="layout">
      <Header currentPath={currentPath} onNavigate={onNavigate} />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
