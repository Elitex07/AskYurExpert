import { currentUser } from "@clerk/nextjs/server";
import Cus from "../classes/customer";
import DashboardPage from "./Dashboard";
import { Configs } from "../../constants";

export default async function Dashboard() {
  const user = await currentUser();
  const data = await fetch(`${Configs.API_URL}/customers`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': `${Configs.API_HOST}`
    }
  }).then(res => res.json());

  let userFromDb = new Cus(user);
  await userFromDb.init();

  const compressUser = {
    publicMetadata: user.publicMetadata
  }

  return <DashboardPage user={compressUser} data={data} />;
}
