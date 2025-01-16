import { MetaFunction } from "@remix-run/react";
import FeaturedPosts from "~/modules/home/components/FeaturedPosts";
import { featuredPosts } from "~/modules/home/components/mock";
import { appName } from "~/shared/flags";

export const meta: MetaFunction = () => {
  return [
    {
      title: `${appName} | Posts`,
    },
    {
      name: "description",
      content: "This is our posts page.",
    },
  ];
};

export default function PostsPage() {
  return (
    <section className="container">
      <FeaturedPosts posts={featuredPosts} />
    </section>
  );
}
