import { clerkClient } from '@clerk/nextjs/server';

export default async function AdminDashboard() {

  // const client = await clerkClient()

  // const users = await client.users.getUserList();
  // // log users to nextjs console
  // console.log(users);

  return (
    <>
      <p>This is the protected admin dashboard restricted to users with the `admin` role.</p>
    </>
  )
}