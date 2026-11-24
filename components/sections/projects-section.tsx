'use client';

import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../../lib/data';

export function ProjectsSection() {
  return (
    <section id="projects" className="section-divider bg-[#F7F5F0]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Section Heading (NO tracked-out eyebrow labels!) */}
        <div className="flex flex-col items-start">
          <h2 className="section-heading">
            Featured Case Studies & Systems
          </h2>
          <p className="section-subtitle">
            Detailed breakdown of full-stack fintech applications, event-driven payment orchestrators, and web platforms.
          </p>
        </div>

        {/* Featured Case Studies (Document Architectural Briefs) */}
        <div className="mt-10 space-y-6">
          {projects.map((project) => {
            return (
              <div
                key={project.title}
                className="rounded-sm border border-[#D8D3C8] bg-[#FAF8F5] p-6 sm:p-9 shadow-ledger hover:border-[#B8860B] transition-colors duration-150"
              >
                <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
                  <div>
                    {/* Category Stamp & Status */}
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="rounded-sm border border-[#B8860B]/40 bg-[#F4EFE0] px-2.5 py-0.5 font-mono text-[0.75rem] font-bold uppercase tracking-wider text-[#8C6608]">
                        {project.category}
                      </span>
                      {project.live ? (
                        <span className="font-mono text-xs font-semibold text-emerald-700">
                          [ Live Production Deployment ]
                        </span>
                      ) : (
                        <span className="font-mono text-xs text-[#5A6678]">
                          [ System Architecture Specification ]
                        </span>
                      )}
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="font-serif text-2xl font-bold text-[#1A2332] sm:text-3xl">
                      {project.title}
                    </h3>
                    <p className="font-serif text-xs italic text-[#5A6678] mt-0.5">{project.subtitle}</p>

                    {/* Description */}
                    <p className="mt-4 text-xs leading-6 text-[#4A5568] sm:text-sm">
                      {project.description}
                    </p>

                    {/* Architecture Pattern Note */}
                    {project.architectureDetails && (
                      <div className="mt-4 rounded-sm border border-[#E2DDD3] bg-white p-3.5 font-mono text-xs text-[#1A2332]">
                        <span className="font-bold uppercase text-[#8C6608]">System Pattern: </span>
                        <span className="text-[#4A5568]">{project.architectureDetails}</span>
                      </div>
                    )}

                    {/* Tech Tags */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.highlights.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-sm border border-[#D8D3C8] bg-white px-2.5 py-1 font-mono text-xs text-[#1A2332]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Side Links & CTAs (No Arrow Glyphs) */}
                  <div className="flex flex-col items-start lg:items-end justify-center border-t border-[#D8D3C8] pt-6 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0 gap-3">
                    {project.live && project.href && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary w-full sm:w-auto justify-center"
                      >
                        <ExternalLink className="mr-2 h-3.5 w-3.5" />
                        <span>Visit Live App</span>
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary w-full sm:w-auto justify-center"
                      >
                        <Github className="mr-2 h-3.5 w-3.5" />
                        <span>View Source Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

