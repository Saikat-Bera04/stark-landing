import Link from 'next/link';

const ArcReactorIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-primary h-6 w-6"
    >
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v2" />
      <path d="M12 19v2" />
      <path d="M3 12h2" />
      <path d="M19 12h2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="m4.93 19.07 1.41-1.41" />
      <path d="m17.66 6.34 1.41-1.41" />
    </svg>
);


export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-2xl font-bold group">
      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
        <ArcReactorIcon />
      </div>
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
        Stark
      </span>
    </Link>
  );
}
