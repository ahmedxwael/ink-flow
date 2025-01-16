import { Button } from "~/components/ui/button";
import PostCard from "~/modules/posts/components/PostCard";
import { Post } from "~/modules/posts/types";

export type FeaturedPostsProps = {
  posts: Post[];
};

export default function FeaturedPosts({ posts }: FeaturedPostsProps) {
  return (
    <div className="py-8 container">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(0, 3).map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Button variant="outline">View All Posts</Button>
        </div>
      </div>
    </div>
  );
}
