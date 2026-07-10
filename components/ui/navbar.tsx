'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/[0.06] bg-black/70 backdrop-blur-2xl shadow-[0_1px_40px_rgba(0,0,0,0.45)]'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
        {/* Logo / Name */}
        <a href="#hero" className="group flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10 text-accent font-bold text-sm transition group-hover:bg-accent/20">
            AO
          </div>
          <span className="hidden text-sm font-semibold text-white sm:inline">
            Adeoti Seyi
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3.5 py-2 text-[0.82rem] text-slate-400 transition-colors duration-200 hover:text-white hover:bg-white/[0.05]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="/ADEOTI-SEYI-CV.pdf"
            target="_blank"
            className="hidden rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-semibold text-accent transition hover:bg-accent/20 sm:inline-flex"
          >
            Download CV
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition hover:bg-white/10 hover:text-white md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          mobileOpen ? 'max-h-96 border-t border-white/[0.06]' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col gap-1 bg-black/90 px-6 py-4 backdrop-blur-2xl">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm text-slate-400 transition hover:bg-white/[0.05] hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/ADEOTI-SEYI-CV.pdf"
            target="_blank"
            className="mt-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2.5 text-center text-xs font-semibold text-accent transition hover:bg-accent/20"
          >
            Download CV
          </a>
        </nav>
      </div>
    </header>
  );
}
