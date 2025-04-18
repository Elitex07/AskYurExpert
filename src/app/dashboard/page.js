import Nav from "../components/nav";
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import { currentUser } from '@clerk/nextjs/server';
import Cus from "../classes/customer";

export default async function Dashboard() {
  const user = await currentUser();
  
  let userFromDb = new Cus(user);
  await userFromDb.init();

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