'use client';

import { ArrowUp } from 'lucide-react';
import { contactLinks } from '../../lib/data';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#D8D3C8] bg-[#F7F5F0] py-10 text-[#4A5568]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Brand & Stack (Paper / Serif) */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-serif text-base font-bold text-[#1A2332]">Seyi Adeoti</span>
              <span className="text-[#D8D3C8]">/</span>
              <span className="font-mono text-xs font-semibold text-[#8C6608]">Senior Full-Stack Engineer</span>
            </div>
            <p className="mt-1 font-mono text-xs text-[#5A6678]">
              React / Next.js / Angular / TypeScript / Java / Spring Boot / Apache Kafka / AWS
            </p>
          </div>

          {/* Social Links & Back to Top (No Arrow Glyphs, Clean Hairline Buttons) */}
          <div className="flex items-center gap-3 font-mono text-xs">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-sm border border-[#D8D3C8] bg-[#FAF8F5] text-[#1A2332] hover:border-[#8C6608] hover:text-[#8C6608] transition-colors"
                  aria-label={link.label}
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              );
            })}

            <button
              onClick={scrollToTop}
              className="flex h-8 w-8 items-center justify-center rounded-sm border border-[#D8D3C8] bg-[#FAF8F5] text-[#1A2332] hover:border-[#8C6608] hover:bg-[#8C6608] hover:text-white transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Copyright & Audit Record */}
        <div className="mt-8 pt-6 border-t border-[#E2DDD3] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#5A6678]">
          <p>© {new Date().getFullYear()} Seyi Adeoti. Senior Full-Stack Engineer Portfolio.</p>
          <p className="text-[0.75rem] uppercase tracking-wider">Built with React, Next.js & TypeScript</p>
        </div>
      </div>
    </footer>
  );
}


