import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { Hero } from "@/components/landing/Hero";
import { AboutSection } from "@/components/landing/AboutSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { Suspense } from "react";
import { MacbookScrollDemo } from "@/components/landing/MacbookScroll";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Suspense>
        <Header />
      </Suspense>
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <MacbookScrollDemo />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
}
