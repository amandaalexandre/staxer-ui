import React, { ReactNode } from 'react';
import Header from './components/Header';

interface LayoutProps {
    children: React.ReactNode;
  }

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='layout'>
      <Header />
      <main>
        {/* Render the children components */}
        {children}
      </main>
    </div>
  );
};

export default Layout;
