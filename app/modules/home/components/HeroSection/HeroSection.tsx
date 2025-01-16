import { Link } from "@remix-run/react";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";

export default function HeroSection() {
  return (
    <section className="py-20 text-center container">
      <div>
        <h1 className="text-5xl font-bold mb-6">Welcome to InkFlow</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Discover a world of ideas, stories, and insights. Start your journey
          with InkFlow today.
        </p>
        <Link
          to="/about"
          className={cn(buttonVariants({ variant: "default", size: "lg" }))}>
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
