export default function AnimatedLogo() {
  return (
    <div className='relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center'>
      <div className='absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full animate-pulse-glow blur-2xl'></div>
      <div className='absolute inset-4 bg-background rounded-full'></div>
      <span
        className='relative text-8xl md:text-9xl font-bold text-white z-10'
        style={{
          textShadow:
            '0 0 10px hsl(var(--primary)), 0 0 20px hsl(var(--primary)), 0 0 40px hsl(var(--accent))',
        }}
      >
        LC
      </span>
    </div>
  );
}
