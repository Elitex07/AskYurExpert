'use client';
import Nav from "../components/nav";
import Sidebar from '../components/sidebar';
import Header from '../components/header';

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header />
        <main className="p-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 shadow rounded"> Card 1</div>
            <div className="bg-white p-4 shadow rounded"> Card 2</div>
            <div className="bg-white p-4 shadow rounded"> Card 3</div>
          </div>
        </main>
      </div>
      <Nav />
    </div>
  );
}