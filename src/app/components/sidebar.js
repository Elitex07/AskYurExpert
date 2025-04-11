import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white fixed">
      <h2 className="text-xl font-bold p-4 border-b border-gray-700">My Dashboard</h2>
      <nav className="flex flex-col p-4 space-y-2">
        <Link href="/"><span className="hover:bg-gray-700 p-2 rounded">Home</span></Link>
        <Link href="/dashboard"><span className="hover:bg-gray-700 p-2 rounded">Dashboard</span></Link>
      </nav>
    </div>
  );
}