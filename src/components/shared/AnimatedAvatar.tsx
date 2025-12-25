export function AnimatedAvatar() {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-square flex items-center justify-center animate-float">
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full animate-subtle-rotate"
      >
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="7" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--accent))" />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--accent))" />
            <stop offset="100%" stopColor="hsl(var(--primary))" />
          </linearGradient>
        </defs>

        {/* Outer Rings */}
        <circle cx="200" cy="200" r="180" stroke="url(#grad1)" strokeWidth="2" strokeOpacity="0.5">
           <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="20s" repeatCount="indefinite" />
        </circle>
        <circle cx="200" cy="200" r="160" stroke="url(#grad2)" strokeWidth="1" strokeOpacity="0.3">
           <animateTransform attributeName="transform" type="rotate" from="360 200 200" to="0 200 200" dur="25s" repeatCount="indefinite" />
        </circle>
        
        {/* Core Shape with Glow */}
        <path
          d="M200 100 C 250 150, 250 250, 200 300 S 150 250, 150 150 Z"
          fill="hsl(var(--background))"
          stroke="url(#grad1)"
          strokeWidth="3"
          filter="url(#glow)"
        >
          <animate
            attributeName="d"
            values="M200 100 C 250 150, 250 250, 200 300 S 150 250, 150 150 Z; M200 100 C 250 150, 150 250, 200 300 S 250 250, 150 150 Z; M200 100 C 250 150, 250 250, 200 300 S 150 250, 150 150 Z"
            dur="8s"
            repeatCount="indefinite"
          />
        </path>
        
        {/* Inner detail */}
        <circle cx="200" cy="200" r="40" fill="url(#grad1)" opacity="0.7">
             <animate attributeName="r" values="40;45;40" dur="4s" repeatCount="indefinite" />
             <animate attributeName="opacity" values="0.7;1;0.7" dur="4s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}
