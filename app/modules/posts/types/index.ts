export type Post = {
  id: string;
  title: string;
  slug: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  imageUrl: string;
  author: {
    id: string;
    name: string;
    avatarUrl: string;
    jobTitle: string;
  };
  category: {
    id: string;
    title: string;
    slug: string;
  };
};
