import { Button } from "~/components/ui/button";

// export async function action() {
//   return redirect("/", {
//     headers: {
//       "Set-Cookie": await userCookie.serialize(""),
//     },
//   });
// }

export default function ProfilePage() {
  const handleLogout = () => {
    // console.log("first");
  };

  return (
    <section className="container">
      <Button onClick={handleLogout}>Logout</Button>
    </section>
  );
}
