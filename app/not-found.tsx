import { ArrowLeft, Compass, Sparkles } from 'lucide-react';
import { LinkButton } from '../components/ui/button';
import { SectionHeading } from '../components/ui/heading';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-surface text-white">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-24">
        <div className="relative w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-glow backdrop-blur-xl sm:p-16">
          <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-accent/10 via-transparent to-transparent opacity-70" />
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent/10 text-accent shadow-glow">
              <Compass className="h-10 w-10" />
            </div>
            <p className="mt-6 text-sm uppercase tracking-[0.32em] text-accent/80">Page not found</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              404 — The page you’re looking for has wandered off.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300">
              The route may have changed, or the page was removed while I was optimizing enterprise systems and product experiences. Return home to continue exploring the portfolio.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <LinkButton href="/" className="shadow-glow">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to home
              </LinkButton>
              <LinkButton href="/" variant="secondary">
                View my work
              </LinkButton>
            </div>
          </div>
        </div>

        <div className="mt-12 grid w-full gap-4 sm:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center shadow-glow backdrop-blur-xl">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
              <Sparkles className="h-6 w-6" />
            </div>
            <SectionHeading className="mt-6 text-2xl">Enterprise-ready</SectionHeading>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Built to showcase high-impact fintech, logistics, and product engineering work.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center shadow-glow backdrop-blur-xl">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
              <Sparkles className="h-6 w-6" />
            </div>
            <SectionHeading className="mt-6 text-2xl">Smooth navigation</SectionHeading>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              One tap back to the homepage, with a clean design that complements the rest of the portfolio.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center shadow-glow backdrop-blur-xl">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
              <Sparkles className="h-6 w-6" />
            </div>
            <SectionHeading className="mt-6 text-2xl">Friendly fallback</SectionHeading>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              A polished 404 experience that keeps visitors engaged instead of lost.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
