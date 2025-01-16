import { featuredPosts } from "~/modules/home/components/mock";
import { Post } from "../types";

export async function getPost(postId: string) {
  const post = await new Promise<Post | undefined>((resolve) => {
    setTimeout(() => {
      const post = featuredPosts.find((post) => post.id == postId);

      resolve(post);
    }, 1000);
  });

  return post;
}
