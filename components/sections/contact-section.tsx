'use client';

import { Download } from 'lucide-react';
import { contactLinks } from '../../lib/data';

export function ContactSection() {
  return (
    <section id="contact" className="section-divider bg-[#F7F5F0]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="rounded-sm border border-[#D8D3C8] bg-[#FAF8F5] p-8 sm:p-12 shadow-ledger">
          <div className="max-w-3xl">
            {/* Serif Heading (NO tracked-out eyebrow labels!) */}
            <h2 className="font-serif text-3xl font-extrabold text-[#1A2332] sm:text-4xl tracking-tight">
              Get In Touch / Direct Inquiry
            </h2>

            <p className="mt-3 text-sm sm:text-base leading-7 text-[#4A5568]">
              I am actively considering <strong className="text-[#1A2332]">Senior Full-Stack Engineering</strong>{' '}roles — remote, hybrid, or open to relocation. If you are building high-scale financial infrastructure, complex web applications, or leading product initiatives, let&apos;s talk.
            </p>

            {/* Contact Links Grid (Document Rows) */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {contactLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3.5 rounded-sm border border-[#D8D3C8] bg-white p-4 shadow-sm transition-colors duration-150 hover:border-[#B8860B] hover:bg-[#F4EFE0]"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-[#F4EFE0] text-[#8C6608] group-hover:bg-[#8C6608] group-hover:text-white transition-colors flex-shrink-0">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="overflow-hidden font-mono">
                      <p className="text-xs font-bold text-[#1A2332] group-hover:text-[#8C6608] transition-colors">{item.label}</p>
                      <p className="text-[0.7rem] text-[#5A6678] truncate">{item.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Additional Resume PDF Link (No Arrow Glyphs) */}
            <div className="mt-8 pt-6 border-t border-[#D8D3C8] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
              <p className="text-[#4A5568]">
                Official Engineering Resume & Credentials:
              </p>
              <a
                href="/ADEOTI-SEYI-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brass"
              >
                <Download className="mr-2 h-3.5 w-3.5" />
                <span>Download Curriculum Vitae (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

