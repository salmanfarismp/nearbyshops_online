import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";

export default function HeroSection() {
  const missionStatement = `Local stores are the heart of our communities, yet e-commerce giants are draining them of life.

By shopping nearby, we keep money in our neighborhoods, strengthen families, and help our economy thrive.

NearbyShops empowers small businesses to list their products online and compete on a level playing field — making it easier for you to discover, support, and shop local. Together, we can keep our communities strong.`;

  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-4xl text-center">
        <div className="mb-8 flex justify-center">
          <Image
            src="/logo.png"
            alt="Nearbyshops Logo"
            width={120}
            height={120}
            priority
            className="h-auto w-auto"
          />
        </div>
        
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Shop Local, Support Communities
        </h1>
        
        <div className="mx-auto mb-8 max-w-2xl">
          <p className="whitespace-pre-line text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {missionStatement}
          </p>
        </div>
        
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="w-full sm:w-auto" asChild>
            <a
              href="#download"
              className="flex items-center gap-2"
            >
              <Smartphone className="h-5 w-5" />
              Download the App
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

