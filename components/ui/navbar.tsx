'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Download } from 'lucide-react';
import { navItems } from '../../lib/data';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-border bg-white/90 backdrop-blur-md shadow-nav py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8">
        {/* Brand / Name */}
        <a href="#hero" className="group flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-primary font-bold text-white text-sm shadow-orange transition-transform duration-200 group-hover:scale-105">
            SA
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-charcoal tracking-tight group-hover:text-orange-primary transition-colors">
              Seyi Adeoti
            </span>
            <span className="text-[0.68rem] font-medium text-slate-500 hidden sm:inline">
              Senior Full-Stack Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-border bg-white/80 px-4 py-1.5 shadow-subtle backdrop-blur-sm">
          {navItems.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-3.5 py-1.5 text-xs font-semibold transition-colors duration-200 ${
                  isActive ? 'text-orange-primary' : 'text-slate-600 hover:text-charcoal'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-orange-primary" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="/ADEOTI-SEYI-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-border-strong bg-white px-3.5 py-2 text-xs font-semibold text-charcoal transition-all hover:border-orange-border hover:bg-orange-light hover:text-orange-primary shadow-subtle"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Resume</span>
          </a>

          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-1.5 rounded-lg bg-orange-primary px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-orange-hover shadow-orange"
          >
            <span>Let&apos;s Work Together</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-white text-charcoal transition hover:bg-slate-50 md:hidden"
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X className="h-5 w-5 text-orange-primary" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-b border-border bg-white/95 backdrop-blur-xl px-6 py-5 shadow-lg md:hidden">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-charcoal hover:bg-orange-light hover:text-orange-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 pt-3 border-t border-border flex flex-col gap-2">
              <a
                href="/ADEOTI-SEYI-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-2.5 text-xs font-semibold text-charcoal hover:bg-slate-50"
              >
                <Download className="h-4 w-4" />
                Download Resume PDF
              </a>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg bg-orange-primary px-4 py-2.5 text-xs font-semibold text-white shadow-orange"
              >
                Let&apos;s Work Together
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

