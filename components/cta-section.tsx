import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Smartphone } from "lucide-react";

export default function CTASection() {
  return (
    <section id="download" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-4xl">
        <div className="rounded-xl border bg-card p-8 text-center shadow-lg sm:p-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to Shop Local?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Download Nearbyshops today and start supporting your community
          </p>
          
          <Separator className="mb-8" />
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="w-full sm:w-auto"
              variant="default"
              asChild
            >
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Smartphone className="h-5 w-5" />
                App Store
              </a>
            </Button>
            
            <Button
              size="lg"
              className="w-full sm:w-auto"
              variant="outline"
              asChild
            >
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Smartphone className="h-5 w-5" />
                Google Play
              </a>
            </Button>
          </div>
          
          <p className="mt-6 text-sm text-muted-foreground">
            Available on iOS and Android
          </p>
        </div>
      </div>
    </section>
  );
}

