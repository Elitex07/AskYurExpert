import React from 'react';
import Image from 'next/image';

export default function Header({ avatarurl}) {
  return (
    <header className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <span className="text-gray-600">Welcome, User</span>
        <div className="rounded-full p-2">
          <Image 
            src={avatarurl || "/fallback.png"} 
            height={32} 
            width={32} 
            alt="user-avatar" 
            style={{ objectFit: 'fill', borderRadius: '50%' }} 
          />
        </div>
      </div>
    </header>
  );
}
