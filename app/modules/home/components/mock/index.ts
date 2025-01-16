import { Post } from "~/modules/posts/types";

export const featuredPosts: Post[] = [
  {
    id: "1",
    title: "Post 1",
    slug: "post-1",
    content: "Content 1",
    createdAt: "2021-01-01",
    updatedAt: "2021-01-01",
    imageUrl:
      "https://kzmj4fgr0ooe342tw0uf.lite.vusercontent.net/placeholder.svg?height=200&width=400&text=The%20Art%20of%20Responsive%20Design",
    author: {
      id: "1",
      name: "John Doe",
      avatarUrl:
        "https://kzmj4fgr0ooe342tw0uf.lite.vusercontent.net/placeholder.svg?height=200&width=400&text=The%20Art%20of%20Responsive%20Design",
      jobTitle: "Software Engineer",
    },
    category: {
      id: "1",
      title: "Category 1",
      slug: "category-1",
    },
  },
  {
    id: "2",
    title: "Post 2",
    slug: "post-2",
    content: "Content 2",
    createdAt: "2021-01-02",
    updatedAt: "2021-01-02",
    imageUrl:
      "https://kzmj4fgr0ooe342tw0uf.lite.vusercontent.net/placeholder.svg?height=200&width=400&text=The%20Art%20of%20Responsive%20Design",
    author: {
      id: "2",
      name: "Jane Smith",
      avatarUrl:
        "https://kzmj4fgr0ooe342tw0uf.lite.vusercontent.net/placeholder.svg?height=200&width=400&text=The%20Art%20of%20Responsive%20Design",
      jobTitle: "Product Manager",
    },
    category: {
      id: "1",
      title: "Category 1",
      slug: "category-1",
    },
  },
  {
    id: "3",
    title: "Post 3",
    slug: "post-3",
    content: "Content 3",
    createdAt: "2021-01-03",
    updatedAt: "2021-01-03",
    imageUrl:
      "https://kzmj4fgr0ooe342tw0uf.lite.vusercontent.net/placeholder.svg?height=200&width=400&text=The%20Art%20of%20Responsive%20Design",
    author: {
      id: "3",
      name: "Mike Johnson",
      avatarUrl:
        "https://kzmj4fgr0ooe342tw0uf.lite.vusercontent.net/placeholder.svg?height=200&width=400&text=The%20Art%20of%20Responsive%20Design",
      jobTitle: "UX Designer",
    },
    category: {
      id: "2",
      title: "Category 2",
      slug: "category-2",
    },
  },
  {
    id: "4",
    title: "Post 4",
    slug: "post-4",
    content: "Content 4",
    createdAt: "2021-01-04",
    updatedAt: "2021-01-04",
    imageUrl:
      "https://kzmj4fgr0ooe342tw0uf.lite.vusercontent.net/placeholder.svg?height=200&width=400&text=The%20Art%20of%20Responsive%20Design",
    author: {
      id: "4",
      name: "Sarah Wilson",
      avatarUrl:
        "https://kzmj4fgr0ooe342tw0uf.lite.vusercontent.net/placeholder.svg?height=200&width=400&text=The%20Art%20of%20Responsive%20Design",
      jobTitle: "Frontend Developer",
    },
    category: {
      id: "2",
      title: "Category 2",
      slug: "category-2",
    },
  },
];
