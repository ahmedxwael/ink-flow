import { Link } from "@remix-run/react";
import { flags } from "~/flags";
import { urls } from "~/shared/urls";

const navLinks = [
	{
		label: "Home",
		href: urls.home,
	},
	{
		label: "About",
		href: urls.about,
	},
	{
		label: "Posts",
		href: urls.posts.list,
	},
	{
		label: "Contact",
		href: urls.contact,
	},
];

export default function Header() {
	return (
		<header className="bg-primary/5 backdrop-blur sticky top-0 z-50">
			<nav className="py-8 flex items-center justify-between container">
				<Link to={urls.home}>{flags.appName}</Link>
				<ul className="flex items-center gap-4">
					{navLinks.map((link) => (
						<li key={link.href}>
							<Link to={link.href}>{link.label}</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
