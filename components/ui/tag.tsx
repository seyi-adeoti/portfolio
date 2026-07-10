import { type HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

export function Tag({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'inline-flex rounded-full border border-white/[0.06] bg-white/[0.03] px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.15em] text-slate-500 transition hover:border-white/10 hover:text-slate-400',
        className
      )}
      {...props}
    />
  );
}
