export function GradientOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Primary accent orb — top-left */}
      <div className="absolute -left-[15%] -top-[10%] h-[600px] w-[600px] rounded-full bg-accent/[0.07] blur-[120px] animate-float" />
      {/* Secondary orb — top-right */}
      <div className="absolute -right-[10%] top-[5%] h-[500px] w-[500px] rounded-full bg-purple-500/[0.04] blur-[100px] animate-float-delayed" />
      {/* Bottom accent glow */}
      <div className="absolute -bottom-[20%] left-[20%] h-[400px] w-[400px] rounded-full bg-accent/[0.05] blur-[100px] animate-float-slow" />
    </div>
  );
}

export function SectionGlow({ position = 'left' }: { position?: 'left' | 'right' | 'center' }) {
  const positionClasses = {
    left: '-left-[10%] top-1/2 -translate-y-1/2',
    right: '-right-[10%] top-1/2 -translate-y-1/2',
    center: 'left-1/2 -translate-x-1/2 top-0',
  };

  return (
    <div
      className={`pointer-events-none absolute h-[300px] w-[300px] rounded-full bg-accent/[0.04] blur-[80px] ${positionClasses[position]}`}
      aria-hidden="true"
    />
  );
}
