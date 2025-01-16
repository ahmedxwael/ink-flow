import { LoaderFunctionArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { buttonVariants } from "~/components/ui/button";
import { userCookie } from "~/cookies/server";
import { cn } from "~/lib/utils";
import { appName, cryptoSecret } from "~/shared/flags";
import { urls } from "~/shared/urls";
import { navLinks } from "../data";

export type User = {
  name: string;
  email: string;
  password: string;
};

export async function loader({
  request,
}: LoaderFunctionArgs): Promise<User | null> {
  const cookieString = request.headers.get("Cookie");
  const hashedCookie = (await userCookie.parse(cookieString)) || {};
  const userStr = CryptoJS.AES.decrypt(hashedCookie, cryptoSecret).toString(
    CryptoJS.enc.Utf8
  );

  console.log("userStr", userStr);

  const user: User = JSON.parse(userStr || "");

  if (user) {
    return user;
  }

  return null;
}

export default function Header() {
  const data = useLoaderData<typeof loader>();

  return (
    <header className="bg-primary/5 backdrop-blur sticky top-0 z-50">
      <nav className="py-8 flex items-center gap-6 justify-between container">
        <Link to={urls.home}>{appName}</Link>
        <ul className="flex items-center ml-auto gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link to={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <Link to={"/users"}>Users</Link>
        {data ? (
          <Link
            className={cn(buttonVariants({ variant: "default" }))}
            to={urls.profile}>
            {data.name}
          </Link>
        ) : (
          <Link
            className={cn(
              buttonVariants({ variant: "default" }),
              "rounded-full"
            )}
            to={urls.signUp}>
            Sign Up
          </Link>
        )}
      </nav>
    </header>
  );
}
