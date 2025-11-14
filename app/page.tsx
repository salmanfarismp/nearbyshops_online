import type { Metadata } from "next";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import StorySection from "@/components/story-section";
import CTASection from "@/components/cta-section";
import StructuredData from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Local stores are the heart of our communities. Nearbyshops empowers small businesses to list their products online and compete on a level playing field. Discover, support, and shop local to keep your community strong.",
  openGraph: {
    title: "Nearbyshops - Shop Local, Support Communities",
    description:
      "Local stores are the heart of our communities. Nearbyshops empowers small businesses to list their products online and compete on a level playing field. Discover, support, and shop local to keep your community strong.",
    url: "https://nearbyshops.online",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nearbyshops - Shop Local, Support Communities",
    description:
      "Local stores are the heart of our communities. Nearbyshops empowers small businesses to list their products online and compete on a level playing field.",
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <StructuredData />
      <HeroSection />
      <FeaturesSection />
      <StorySection />
      <CTASection />
    </main>
  );
}
