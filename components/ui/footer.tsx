'use client';

import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { contactLinks } from '../../lib/data';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-white py-12 text-slate-600">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Brand & Stack */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-base font-bold text-charcoal">Seyi Adeoti</span>
              <span className="text-slate-300">•</span>
              <span className="text-xs font-semibold text-orange-primary">Senior Full-Stack Engineer</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">
              React • Next.js • TypeScript • Java • Spring Boot • Kafka • AWS
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-slate-50 text-slate-600 transition hover:border-orange-border hover:bg-orange-light hover:text-orange-primary"
                  aria-label={link.label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}

            <button
              onClick={scrollToTop}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-slate-50 text-slate-600 transition hover:border-orange-border hover:bg-orange-primary hover:text-white"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Seyi Adeoti. All rights reserved.</p>
          <p className="font-mono text-[0.7rem]">Designed & Engineered with Precision</p>
        </div>
      </div>
    </footer>
  );
}

