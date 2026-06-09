import { type HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

export function SectionHeading({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return <h2 className={cn('section-heading', className)} {...props} />;
}
