import { useLoaderData } from "@remix-run/react";
import { db } from "~/db";

export async function loader() {
  const users = await db.query.users.findMany();
  return users;
}

export default function UsersPage() {
  const users = useLoaderData<typeof loader>();

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}
