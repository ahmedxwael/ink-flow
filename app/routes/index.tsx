import type { MetaFunction } from "@remix-run/node";
import CTASection from "~/modules/home/components/CTASection";
import FeaturedPosts from "~/modules/home/components/FeaturedPosts";
import FeaturesSection from "~/modules/home/components/FeaturesSection";
import HeroSection from "~/modules/home/components/HeroSection";
import { featuredPosts } from "~/modules/home/components/mock";
import { appName } from "~/shared/flags";

export const meta: MetaFunction = () => {
  return [
    { title: `${appName} | Home` },
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
