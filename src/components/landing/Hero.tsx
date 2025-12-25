import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AnimatedAvatar } from '@/components/shared/AnimatedAvatar';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom,white_5%,transparent_80%)]"></div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,hsl(var(--primary)/0.3),rgba(255,255,255,0))]"></div>
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none font-headline">
              Evolving Personality,
              <br />
              <span className="multi-color-text">Unwavering Trust.</span>
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto lg:mx-0">
              EvoAvatar is a privacy-first AI you train with a trusted partner. Create a digital personality that grows with you, built on a foundation of ethical connection.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
              <Button asChild size="lg">
                <Link href="/signup">
                  Create Your Avatar
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="w-full max-w-md mx-auto">
            <AnimatedAvatar />
          </div>
        </div>
      </div>
    </section>
  );
}
