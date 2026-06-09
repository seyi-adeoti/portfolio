import { type ButtonHTMLAttributes, type AnchorHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../lib/utils';

const baseStyles = 'inline-flex items-center justify-center rounded-full font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 disabled:pointer-events-none disabled:opacity-60';

const variants = {
  primary: 'bg-accent px-5 py-3 text-sm text-slate-950 hover:bg-white/90',
  secondary: 'border border-white/10 bg-white/5 px-5 py-3 text-sm text-white hover:border-accent/70 hover:bg-white/10',
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'primary' | 'secondary';
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    return <button ref={ref} className={cn(baseStyles, variants[variant], className)} {...props} />;
  }
);
Button.displayName = 'Button';

export const LinkButton = forwardRef<HTMLAnchorElement, AnchorProps>(
  ({ className, variant = 'secondary', ...props }, ref) => {
    return <a ref={ref} className={cn(baseStyles, variants[variant], className)} {...props} />;
  }
);
LinkButton.displayName = 'LinkButton';
