'use client';
import React, { useState, useEffect } from 'react';
import Nav from '../components/nav';
import Sidebar from '../components/sidebar';
import Header from '../components/header';

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(80); // default fallback

  useEffect(() => {
    if (typeof window !== "undefined") {
      const navEl = document.getElementById('main-nav');
      if (navEl) {
        setNavHeight(navEl.offsetHeight);
      }
    }
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="relative">
      {/* Nav */}
      <div id="main-nav" className="fixed top-0 left-0 w-full z-50">
        <Nav toggleSidebar={toggleSidebar} setNavHeight={setNavHeight} />
      </div>

      {/* Sidebar + Main Content */}
      <div className="flex pt-[80px] min-h-screen">
        {/* Sidebar */}
        <div
  className={`fixed left-0 z-40 transition-transform duration-300
    ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
    lg:translate-x-0 lg:static lg:block
    w-64`}
  style={{ top: `${navHeight}px`, height: `calc(100vh - ${navHeight}px)` }}
>


          <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-0 lg:ml-64">
          <div className="p-4">
            <Header />
            <main className="mt-4">{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
}
