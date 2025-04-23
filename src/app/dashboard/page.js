import React from 'react';

export default function DashboardPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h2>
      
      {/* Example of cards or widgets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg p-4 rounded-lg">
          <h3 className="text-lg font-semibold">Recent Activity</h3>
          <p className="mt-2 text-gray-600">Here are the latest updates and notifications.</p>
        </div>
        <div className="bg-white shadow-lg p-4 rounded-lg">
          <h3 className="text-lg font-semibold">User Stats</h3>
          <p className="mt-2 text-gray-600">Quick overview of user activity and performance.</p>
        </div>
        <div className="bg-white shadow-lg p-4 rounded-lg">
          <h3 className="text-lg font-semibold">System Status</h3>
          <p className="mt-2 text-gray-600">Track server and system performance in real-time.</p>
        </div>
      </div>
    </div>
  );
}
