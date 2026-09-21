'use client';

import { FolderGit2, Github, ExternalLink, ArrowUpRight, Sparkles, Layers, ShieldCheck } from 'lucide-react';
import { projects } from '../../lib/data';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../ui/scroll-reveal';

export function ProjectsSection() {
  return (
    <section id="projects" className="section-divider relative bg-surface">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-start gap-2">
            <span className="section-label">
              <FolderGit2 className="h-3.5 w-3.5" />
              Featured Case Studies & Systems
            </span>
            <h2 className="section-heading mt-2">
              Production & Architectural Case Studies
            </h2>
            <p className="section-subtitle">
              Detailed breakdown of full-stack fintech applications, event-driven payment orchestrators, and web platforms.
            </p>
          </div>
        </ScrollReveal>

        {/* Featured Case Studies (Large Cards) */}
        <div className="mt-12 space-y-8">
          {projects.map((project, index) => {
            const isFeatured = project.featured;
            return (
              <ScrollReveal key={project.title} delay={index * 0.1}>
                <div
                  className={`group relative overflow-hidden rounded-2xl border border-border bg-white p-6 sm:p-10 shadow-card transition-all duration-300 hover:border-orange-border hover:shadow-card-hover ${
                    isFeatured ? 'border-l-4 border-l-orange-primary' : ''
                  }`}
                >
                  {/* Subtle Top Orange Hover Bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-primary via-orange-hover to-orange-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
                    <div>
                      {/* Category & Badge */}
                      <div className="flex items-center gap-3 mb-3">
                        <span className="rounded-full bg-orange-light px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-orange-primary">
                          {project.category}
                        </span>
                        {project.live ? (
                          <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                            Live Deployment
                          </span>
                        ) : (
                          <span className="text-xs font-semibold text-slate-500">
                            Architectural System Case Study
                          </span>
                        )}
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="text-2xl font-bold text-charcoal sm:text-3xl group-hover:text-orange-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-xs font-semibold text-slate-500">{project.subtitle}</p>

                      {/* Description */}
                      <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                        {project.description}
                      </p>

                      {/* Architecture Note */}
                      {project.architectureDetails && (
                        <div className="mt-4 rounded-xl border border-slate-100 bg-slate-50 p-4 text-xs text-slate-700 font-medium">
                          <span className="font-bold text-charcoal">System Pattern: </span>
                          {project.architectureDetails}
                        </div>
                      )}

                      {/* Tech Tags */}
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.highlights.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-lg border border-border bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-subtle group-hover:border-orange-border transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right Side Links & CTAs */}
                    <div className="flex flex-col items-start lg:items-end justify-center border-t border-border pt-6 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0 gap-4">
                      {project.live && project.href && (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary w-full sm:w-auto justify-center"
                        >
                          <span>Visit Live App</span>
                          <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      )}

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary w-full sm:w-auto justify-center"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          <span>View Source Code</span>
                          <ArrowUpRight className="ml-2 h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
