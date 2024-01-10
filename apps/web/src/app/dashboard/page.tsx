import App from "@components/sections/App";

import { trpc } from "@web/src/utils";

export default async function Dashboard() {
  // const users = await trpc.getUsers.query();

  

  return (
    <main>
      {/* <pre>{JSON.stringify(users, null, 2)}</pre> */}
      <App />
    </main>
  );
}
