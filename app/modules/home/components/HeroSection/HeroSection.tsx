import { Link } from "@remix-run/react";
import { ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/button";

export default function HeroSection() {
	return (
		<section className="py-20 text-center container">
			<div>
				<h1 className="text-5xl font-bold mb-6">Welcome to InkFlow</h1>
				<p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
					Discover a world of ideas, stories, and insights. Start your journey
					with InkFlow today.
				</p>
				<Button size="lg" asChild>
					<Link to="/about">
						Learn More <ArrowRight className="ml-2 h-4 w-4" />
					</Link>
				</Button>
			</div>
		</section>
	);
}
