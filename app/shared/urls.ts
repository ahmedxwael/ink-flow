import { Post } from "~/modules/posts/types";

export const urls = {
  home: "/",
  about: "/about",
  contact: "/contact-us",
  posts: {
    list: "/posts",
    viewPost: (post: Post) => `/posts/${post.id}`,
  },
  profile: "/profile",
  signUp: "/sign-up",
  privacy: "/privacy",
  terms: "/terms",
};
