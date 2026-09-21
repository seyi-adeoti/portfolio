'use client';

import { MapPin, Globe, ArrowRight, Download, Sparkles } from 'lucide-react';
import { heroData } from '../../lib/data';
import { SystemNetworkVisual } from '../ui/system-network-visual';
import { ScrollReveal } from '../ui/scroll-reveal';

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden bg-gradient-to-b from-white via-surface to-white">
      {/* Background Subtle Mesh Grid & Soft Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      <div className="absolute top-1/4 right-10 -z-10 h-72 w-72 rounded-full bg-orange-light blur-3xl opacity-60 pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:gap-12">
          {/* Left Column — Text & CTAs */}
          <div>
            {/* Availability Badge */}
            <ScrollReveal delay={0.1}>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-orange-border bg-orange-light px-4 py-1.5 shadow-subtle">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-primary opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange-primary" />
                </span>
                <span className="text-xs font-bold text-charcoal">
                  Senior Software Engineer
                </span>
                <span className="h-3 w-px bg-orange-primary/20" />
                <span className="text-xs font-semibold text-orange-primary">
                  Open to Opportunities
                </span>
              </div>
            </ScrollReveal>

            {/* Main Headline */}
            <ScrollReveal delay={0.2}>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-charcoal sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl !leading-[1.12]">
                {heroData.headline}
              </h1>
            </ScrollReveal>

            {/* Subtitle */}
            <ScrollReveal delay={0.3}>
              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg max-w-2xl font-normal">
                {heroData.subtitle}
              </p>
            </ScrollReveal>

            {/* Location & Status Badges */}
            <ScrollReveal delay={0.35}>
              <div className="mt-6 flex flex-wrap gap-4 text-xs font-medium text-slate-500">
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-orange-primary" />
                  <span>{heroData.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Globe className="h-4 w-4 text-orange-primary" />
                  <span>{heroData.visaStatus}</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Primary Skill Badges */}
            <ScrollReveal delay={0.4}>
              <div className="mt-6 flex flex-wrap gap-2">
                {heroData.badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-lg border border-border bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-subtle hover:border-orange-border hover:text-orange-primary transition-all"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            {/* CTAs */}
            <ScrollReveal delay={0.5}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="btn-primary"
                >
                  <span>View My Work</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>

                <a
                  href="#contact"
                  className="btn-secondary"
                >
                  <span>Let&apos;s Work Together</span>
                </a>

                <a
                  href="/ADEOTI-SEYI-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-orange-primary transition-colors py-2 px-3"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Resume PDF</span>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column — System Visualization */}
          <ScrollReveal delay={0.4} direction="right">
            <div className="w-full">
              <SystemNetworkVisual />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
