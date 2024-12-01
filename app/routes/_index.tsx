import type { MetaFunction } from "@remix-run/node";
import FeaturedPosts from "~/modules/home/components/FeaturedPosts";
import HeroSection from "~/modules/home/components/HeroSection";
import { featuredPosts } from "~/modules/home/components/mock";

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export default function Index() {
	return (
		<section className="">
			<HeroSection />
			<FeaturedPosts posts={featuredPosts} />
		</section>
	);
}
