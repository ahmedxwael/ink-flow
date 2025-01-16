import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import { urls } from "~/shared/urls";

export default function CTASection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Start Your Blogging Journey?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join InkFlow today and turn your ideas into captivating stories.
        </p>
        <Button size="lg" variant="secondary" asChild>
          <Link to={urls.signUp}>Get Started for Free</Link>
        </Button>
      </div>
    </section>
  );
}
