'use client';

import { Mail, Github, Linkedin, Download, ArrowUpRight, MessageSquare } from 'lucide-react';
import { contactLinks } from '../../lib/data';
import { ScrollReveal } from '../ui/scroll-reveal';

export function ContactSection() {
  return (
    <section id="contact" className="section-divider relative bg-surface">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl border border-orange-border bg-gradient-to-br from-white via-orange-light/30 to-white p-8 sm:p-14 shadow-card">
            {/* Subtle Decorative Orange Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-orange-primary/10 blur-3xl" />

            <div className="relative z-10 max-w-3xl">
              <span className="section-label">
                <MessageSquare className="h-3.5 w-3.5" />
                Get In Touch
              </span>


              <h2 className="mt-4 text-3xl font-extrabold text-charcoal sm:text-4xl md:text-5xl tracking-tight">
                Let&apos;s build something meaningful.
              </h2>

              <p className="mt-4 text-base sm:text-lg leading-8 text-slate-600 font-normal">
                I am actively considering **Senior Full-Stack & Senior Frontend Engineering** roles — remote, hybrid, or open to relocation. If you are building high-scale financial infrastructure, complex web applications, or leading product initiatives, let&apos;s talk.
              </p>

              {/* Direct Contact Buttons Grid */}
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {contactLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3.5 rounded-xl border border-border bg-white p-4 shadow-subtle transition-all duration-200 hover:border-orange-border hover:bg-orange-light hover:shadow-orange-soft"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-light text-orange-primary transition-colors group-hover:bg-orange-primary group-hover:text-white flex-shrink-0">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-xs font-bold text-charcoal group-hover:text-orange-primary transition-colors">{item.label}</p>
                        <p className="text-[0.72rem] font-mono text-slate-500 truncate">{item.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Additional Resume Link */}
              <div className="mt-8 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs font-semibold text-slate-600">
                  Prefer a direct PDF document?
                </p>
                <a
                  href="/ADEOTI-SEYI-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-xs font-bold"
                >
                  <Download className="mr-2 h-4 w-4" />
                  <span>Download Curriculum Vitae (PDF)</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
