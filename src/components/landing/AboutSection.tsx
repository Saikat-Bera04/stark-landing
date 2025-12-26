import Image from 'next/image';
import placeholderImages from '@/lib/placeholder-images.json';
import { CheckCircle } from 'lucide-react';

const aboutImage = placeholderImages.placeholderImages.find(p => p.id === "about-section") || {
  imageUrl: "https://picsum.photos/seed/about-section/800/600",
  imageHint: "abstract connection"
};

export function AboutSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="relative w-full h-80 lg:h-full rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={aboutImage.imageUrl}
              alt="An abstract representation of digital connection"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              data-ai-hint={aboutImage.imageHint}
            />
             <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">The Core Problem</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">AI Without Trust is a Façade</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Most AI avatars are built on crowdsourced data, lacking genuine personality and ethical boundaries. Your identity shouldn't be a democratic experiment. We believe true digital representation requires a foundation of trust and privacy.
              </p>
            </div>
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 text-primary px-3 py-1 text-sm">Our Solution</div>
              <h3 className="text-2xl font-bold tracking-tighter sm:text-4xl font-headline">One-to-One Connection</h3>
                <ul className="grid gap-2 text-muted-foreground md:text-lg">
                    <li className="flex items-start gap-2">
                        <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                        <span>Strict one-to-one training ensures only you and one approved person shape your avatar.</span>
                    </li>
                     <li className="flex items-start gap-2">
                        <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                        <span>Continuously evolves through memory-based learning, not model retraining.</span>
                    </li>
                     <li className="flex items-start gap-2">
                        <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                        <span>Your data remains private, building a digital personality that is truly yours.</span>
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
