import type { LinksFunction } from "@remix-run/node";
import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";
import { ArrowLeftIcon } from "lucide-react";
import GlowingBackground from "./components/GlowingBackground";
import { buttonVariants } from "./components/ui/button";
import Footer from "./design-system/layout/Footer";
import Header from "./design-system/layout/Header";
import { urls } from "./shared/urls";
import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="apple-mobile-web-app-title" content="Ink Flow" />
        <Meta />
        <Links />
      </head>
      <body className="relative overflow-x-hidden">
        <GlowingBackground />
        <Header />
        <main className="min-h-dvh relative">{children}</main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary() {
  const error = useRouteError();

  console.log("error", error);

  return (
    <html lang="en">
      <head>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <h1 className="text-4xl font-bold text-red-600 mb-4">
            {isRouteErrorResponse(error)
              ? `${error.status} ${error.statusText}`
              : error instanceof Error
                ? error.message
                : "Unknown Error"}
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Sorry, something went wrong. Please try again later.
          </p>
          <Link to={urls.home} className={buttonVariants({ variant: "link" })}>
            <ArrowLeftIcon /> Go back home
          </Link>
        </div>
        <Scripts />
      </body>
    </html>
  );
}
