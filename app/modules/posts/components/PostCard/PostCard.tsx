import { Link } from "@remix-run/react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "~/components/ui/card";
import { placeholderImage } from "~/shared/consts";
import { urls } from "~/shared/urls";
import { Post } from "../../types";

export type PostCardProps = {
	post: Post;
};

export default function PostCard({ post }: PostCardProps) {
	return (
		<Link to={urls.posts.viewPost(post)}>
			<Card key={post.id} className="flex flex-col h-full">
				<div className="relative h-64 w-full overflow-hidden">
					<img
						src={post.imageUrl ?? placeholderImage}
						alt={post.title}
						className="object-cover object-center h-full w-full rounded-t-lg"
					/>
				</div>
				<CardHeader className="flex-grow">
					<CardTitle className="line-clamp-1">
						<Link to={`/posts/${post.id}`} className="hover:underline">
							{post.title}
						</Link>
					</CardTitle>
					<CardDescription className="line-clamp-2">
						{post.content}
					</CardDescription>
				</CardHeader>
				<CardContent className="pt-0">
					<p className="text-sm text-muted-foreground">
						By {post.author.name} on {post.createdAt}
					</p>
				</CardContent>
			</Card>
		</Link>
	);
}
