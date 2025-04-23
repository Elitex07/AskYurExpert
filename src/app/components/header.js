import React from 'react';

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <span className="text-gray-600">Welcome, User</span>
        <div className="rounded-full bg-gray-200 p-2">
          <img src="/path/to/profile.jpg" alt="User Avatar" className="w-8 h-8 rounded-full" />
        </div>
      </div>
    </header>
  );
}
