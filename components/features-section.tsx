import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Store, Heart, TrendingUp, Search } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Discover Local Shops",
    description: "Find nearby stores and their products with ease. Browse through local businesses in your neighborhood and discover unique items you won't find elsewhere.",
  },
  {
    icon: Heart,
    title: "Support Your Community",
    description: "Every purchase you make keeps money in your neighborhood, helping local families and strengthening the local economy.",
  },
  {
    icon: TrendingUp,
    title: "Level Playing Field",
    description: "Small businesses can now compete online with the same tools and visibility as big e-commerce platforms. Fair competition for everyone.",
  },
  {
    icon: Store,
    title: "Easy Shopping Experience",
    description: "Browse, compare, and purchase from local stores with a simple, intuitive interface designed to make supporting local businesses effortless.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Choose Nearbyshops?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Empowering local businesses and communities through technology
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="flex flex-col">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

