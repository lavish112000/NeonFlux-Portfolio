export default function GlowingLine() {
  return (
    <div className="absolute top-10 left-0 w-full h-24 overflow-hidden z-0 pointer-events-none">
      <svg
        className="w-full h-full animate-line-flow"
        preserveAspectRatio="none"
        viewBox="0 0 1440 100"
      >
        <defs>
          <filter id="glow-line-filter">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "hsl(var(--primary))" }} />
            <stop offset="100%" style={{ stopColor: "hsl(var(--accent))" }} />
          </linearGradient>
        </defs>
        <path
          d="M -200 50 Q 360 -20 720 50 T 1640 50"
          fill="none"
          stroke="url(#line-gradient)"
          strokeWidth="2"
          filter="url(#glow-line-filter)"
        />
      </svg>
    </div>
  );
}
