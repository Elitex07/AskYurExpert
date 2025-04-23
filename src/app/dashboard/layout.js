'use client';
import React, { useState, useEffect, useRef } from 'react';
import Nav from '../components/nav';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import { useUser } from '@clerk/nextjs';

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(80); // default fallback
  const navRef = useRef(null);
  const { user } = useUser();

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
    <section className="w-full">
      <Nav ref={navRef} toggleSidebar={toggleSidebar} setNavHeight={setNavHeight}/>

      {/* Sidebar + Main Content */}
      <div className="flex pt-[80px]">
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
        <div className="flex-1 ml-0">
          <div className="p-4">
            <Header avatarurl={user && user.imageUrl}/>
            <main className="mt-4">{children}</main>
          </div>
        </div>
      </div>
    </section>
  );
}
