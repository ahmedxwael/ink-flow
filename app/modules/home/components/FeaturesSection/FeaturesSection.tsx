"use client";

import { Bookmark, Feather, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export default function FeaturesSection() {
  return (
    <section className="py-16 container">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Why Choose InkFlow
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<Feather className="h-12 w-12 text-primary" />}
            title="Easy Writing"
            description="Our intuitive editor makes writing and formatting your posts a breeze. Focus on your content, and let InkFlow handle the rest."
          />
          <FeatureCard
            icon={<Users className="h-12 w-12 text-primary" />}
            title="Engage Your Audience"
            description="Build a community around your content with our powerful engagement tools. Connect with your readers like never before."
          />
          <FeatureCard
            icon={<Bookmark className="h-12 w-12 text-primary" />}
            title="Organize Content"
            description="Categorize and tag your posts for easy navigation and discovery. Help your readers find exactly what they're looking for."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="flex flex-col h-full p-8">
      <CardHeader>
        <div className="mb-4 flex items-center justify-center">{icon}</div>
        <CardTitle className="text-center text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-center text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
