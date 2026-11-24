'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
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
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        scrolled
          ? 'border-b border-[#D8D3C8] bg-[#F7F5F0]/95 backdrop-blur-md py-3'
          : 'border-b border-[#E2DDD3] bg-[#F7F5F0] py-4'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8">
        {/* Brand / Serif Name & Seal */}
        <a href="#hero" className="group flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-sm border border-[#B8860B] bg-[#F4EFE0] font-mono text-xs font-bold text-[#8C6608]">
            SA
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold text-[#1A2332] tracking-tight group-hover:text-[#8C6608] transition-colors">
              Seyi Adeoti
            </span>
            <span className="font-mono text-[0.75rem] text-[#5A6678] hidden sm:inline uppercase tracking-wider">
              Senior Full-Stack Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation — Document Ledger Tabs */}
        <nav className="hidden md:flex items-center gap-1 border-x border-[#D8D3C8] px-4 py-1">
          {navItems.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-3 py-1 text-xs font-mono tracking-tight transition-colors duration-150 ${
                  isActive
                    ? 'text-[#8C6608] font-bold border-b-2 border-[#B8860B]'
                    : 'text-[#4A5568] hover:text-[#1A2332]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons — Clean Document Style (No Arrow Glyphs) */}
        <div className="flex items-center gap-3">
          <a
            href="/ADEOTI-SEYI-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-sm border border-[#D8D3C8] bg-[#FAF8F5] px-3.5 py-1.5 font-mono text-xs font-semibold text-[#1A2332] hover:border-[#B8860B] hover:text-[#8C6608] transition-colors"
          >
            <Download className="h-3.5 w-3.5 text-[#8C6608]" />
            <span>Resume PDF</span>
          </a>

          <a
            href="#contact"
            className="hidden lg:inline-flex items-center justify-center rounded-sm bg-[#1A2332] px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-[#F7F5F0] hover:bg-[#2A3649] transition-colors"
          >
            Contact
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-8 w-8 items-center justify-center rounded-sm border border-[#D8D3C8] bg-[#FAF8F5] text-[#1A2332] md:hidden"
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X className="h-4 w-4 text-[#8C6608]" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-b border-[#D8D3C8] bg-[#F7F5F0] px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-2 font-mono text-xs">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-1.5 text-[#1A2332] hover:text-[#8C6608] transition-colors border-b border-[#E2DDD3]"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 pt-2 flex flex-col gap-2">
              <a
                href="/ADEOTI-SEYI-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 rounded-sm border border-[#D8D3C8] bg-white py-2 text-xs font-mono text-[#1A2332]"
              >
                <Download className="h-4 w-4 text-[#8C6608]" />
                Download Resume PDF
              </a>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center rounded-sm bg-[#1A2332] py-2 text-xs font-mono uppercase text-[#F7F5F0]"
              >
                Contact
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}


