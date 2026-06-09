import { type HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'section-card shadow-glow border border-white/10 bg-white/5 transition hover:bg-white/10',
        className
      )}
      {...props}
    />
  );
}
