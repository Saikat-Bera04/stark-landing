import Link from 'next/link';
import { Dna } from 'lucide-react';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-2xl font-bold group">
      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
        <Dna className="text-primary h-6 w-6" />
      </div>
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
        EvoAvatar
      </span>
    </Link>
  );
}
