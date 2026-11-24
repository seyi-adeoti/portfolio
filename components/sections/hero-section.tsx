'use client';

import { MapPin, Globe, Download, ShieldCheck, FileText } from 'lucide-react';
import { heroData } from '../../lib/data';
import { SystemNetworkVisual } from '../ui/system-network-visual';

export function HeroSection() {
  return (
    <section id="hero" className="relative pt-12 pb-16 overflow-hidden bg-[#F7F5F0] border-b border-[#D8D3C8]">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start lg:gap-12">
          {/* Left Column — Text & CTAs */}
          <div>
            {/* Brass Ledger Seal Badge */}
            <div className="inline-flex items-center gap-2 rounded-sm border border-[#B8860B]/40 bg-[#F4EFE0] px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-[#8C6608]">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Fintech &amp; Distributed Systems</span>
              <span className="text-[#D8D3C8]">|</span>
              <span className="text-[#1A2332]">Open to Roles</span>
            </div>

            {/* Main Serif Headline */}
            <h1 className="mt-6 font-serif text-3xl font-extrabold tracking-tight text-[#1A2332] sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl leading-[1.15]">
              {heroData.headline}
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-sm leading-7 text-[#4A5568] sm:text-base max-w-2xl">
              {heroData.subtitle}
            </p>

            {/* Location & Status Metadata (Tabular Monospace) */}
            <div className="mt-6 pt-4 border-t border-[#D8D3C8] flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-[#5A6678]">
              <div className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-[#8C6608]" />
                <span>LOCATION: {heroData.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Globe className="h-3.5 w-3.5 text-[#8C6608]" />
                <span>RELOCATION: {heroData.visaStatus}</span>
              </div>
            </div>

            {/* Primary Skill Badges (Hairline Paper Tags) */}
            <div className="mt-6 flex flex-wrap gap-2">
              {heroData.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-sm border border-[#D8D3C8] bg-white px-2.5 py-1 font-mono text-xs font-semibold text-[#1A2332] shadow-sm hover:border-[#B8860B] transition-colors"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* CTAs (No Arrow Glyphs) */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#experience"
                className="btn-primary"
              >
                View Experience
              </a>

              <a
                href="#contact"
                className="btn-secondary"
              >
                Get In Touch
              </a>

              <a
                href="/ADEOTI-SEYI-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brass"
              >
                <Download className="mr-2 h-3.5 w-3.5" />
                Download Resume PDF
              </a>
            </div>
          </div>

          {/* Right Column — Labeled Stack Architecture Cross-Section */}
          <div className="w-full">
            <SystemNetworkVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

