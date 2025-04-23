import React from 'react';

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <div>
        <span>User</span>
      </div>
    </header>
  );
}
