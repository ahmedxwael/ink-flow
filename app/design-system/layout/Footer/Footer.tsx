import { Link } from "@remix-run/react";
import { urls } from "~/shared/urls";

export default function Footer() {
  return (
    <footer className="bg-muted">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-bold mb-4">About InkFlow</h3>
            <p className="text-sm text-muted-foreground">
              InkFlow is a modern blogging platform designed to help you share
              your stories with the world.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to={urls.home} className="text-sm hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to={urls.posts.list} className="text-sm hover:underline">
                  All Posts
                </Link>
              </li>
              <li>
                <Link to={urls.about} className="text-sm hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to={urls.contact} className="text-sm hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to={urls.privacy} className="text-sm hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to={urls.terms} className="text-sm hover:underline">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://twitter.com"
                  className="text-sm hover:underline">
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  className="text-sm hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  className="text-sm hover:underline">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © 2023 InkFlow. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
