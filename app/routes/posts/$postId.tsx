import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { getPost } from "~/modules/posts/features";
import { appName } from "~/shared/flags";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.postId, "Missing postId param");

  const post = await getPost(params.postId);

  if (!post) {
    throw new Response("Not Found", { status: 404 });
  }

  return Response.json({ post });
};

export default function PostDetailsPage() {
  const { post } = useLoaderData<typeof loader>();

  return <section className="container">{post.author.name}</section>;
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const post = data?.post;

  if (!post) {
    return [
      {
        title: "Post Not Found",
      },
      {
        name: "description",
        content: "The post you are looking for does not exist.",
      },
    ];
  }

  return [
    {
      title: `${appName} | ${post.title}`,
    },
    {
      name: "description",
      content: post.content,
    },
  ];
};
