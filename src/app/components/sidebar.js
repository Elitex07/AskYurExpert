import React from 'react';
import { FaHome, FaCog, FaUsers } from 'react-icons/fa'; // Example icon imports from react-icons

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <>
      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-4 z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:block`}
      >
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <ul className="space-y-2">
          <li><a href="#" className="flex items-center space-x-2 hover:text-gray-300"><FaHome /><span>Overview</span></a></li>
          <li><a href="#" className="flex items-center space-x-2 hover:text-gray-300"><FaCog /><span>Settings</span></a></li>
          <li><a href="#" className="flex items-center space-x-2 hover:text-gray-300"><FaUsers /><span>Users</span></a></li>
        </ul>
      </aside>
    </>
  );
}
