import type { MetaFunction } from "@remix-run/node";
import { flags } from "~/flags";
import CTASection from "~/modules/home/components/CTASection";
import FeaturedPosts from "~/modules/home/components/FeaturedPosts";
import FeaturesSection from "~/modules/home/components/FeaturesSection";
import HeroSection from "~/modules/home/components/HeroSection";
import { featuredPosts } from "~/modules/home/components/mock";

export const meta: MetaFunction = () => {
	return [
		{ title: flags.appName },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export default function Index() {
	return (
		<>
			<HeroSection />
			<FeaturedPosts posts={featuredPosts} />
			<FeaturesSection />
			<CTASection />
		</>
	);
}
