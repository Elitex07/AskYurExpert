import { currentUser } from "@clerk/nextjs/server";
import Cus from "../classes/customer";
import DashboardPage from "./Dashboard";

export default async function Dashboard() {
  const user = await currentUser();
  const data = [
    { id: 1, name: "John Doe", role: "Admin", createdAt: "2023-01-01", panNumber: "ABCDE1234F", status: "Active" },
    { id: 2, name: "Jane Smith", role: "User", createdAt: "2023-02-15", panNumber: "XYZ9876543", status: "Suspended" },
    { id: 3, name: "Alice Johnson", role: "Moderator", createdAt: "2023-03-10", panNumber: "", status: "Inactive" },
  ];

  let userFromDb = new Cus(user);
  await userFromDb.init();

  const compressUser = {
    publicMetadata: user.publicMetadata
  }

  return <DashboardPage user={compressUser} data={data} />;
}
