import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Briefcase } from 'lucide-react';
import { LinkButton } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { SectionHeading } from '../components/ui/heading';
import { Tag } from '../components/ui/tag';
import { Navbar } from '../components/ui/navbar';
import { Footer } from '../components/ui/footer';
import { GradientOrbs, SectionGlow } from '../components/ui/gradient-orb';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ui/scroll-reveal';
import { HeroTerminal } from './hero-terminal';
import {
  heroTitle,
  heroSubtitle,
  heroBadges,
  heroLocation,
  heroVisaStatus,
  experience,
  additionalExperience,
  projects,
  contactLinks,
} from '../lib/data';

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden">
        {/* ───────────────────── HERO ───────────────────── */}
        <section id="hero" className="relative min-h-screen flex items-center pt-20">
          <GradientOrbs />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 sm:px-8">
            <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:items-center md:gap-16">
              {/* Left — Text */}
              <div>
                <ScrollReveal delay={0.1}>
                  <div className="inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-xs">
                    <span className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                      </span>
                      <span className="font-semibold text-white">Senior Software Engineer</span>
                    </span>
                    <span className="h-3 w-px bg-white/10" />
                    <span className="text-slate-500">Open to opportunities worldwide</span>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <h1 className="mt-8 max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl !leading-[1.1]">
                    {heroTitle}
                  </h1>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                  <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
                    {heroSubtitle}
                  </p>
                </ScrollReveal>

                {/* Location + Visa */}
                <ScrollReveal delay={0.35}>
                  <div className="mt-6 flex flex-col gap-2 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 text-accent/60" />
                      <span>{heroLocation}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-3.5 w-3.5 text-accent/60" />
                      <span>{heroVisaStatus}</span>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.4}>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {heroBadges.map((badge) => (
                      <span
                        key={badge}
                        className="rounded-full border border-white/[0.06] bg-white/[0.03] px-3.5 py-1.5 text-xs text-slate-400 transition hover:border-accent/20 hover:text-slate-300"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.5}>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <LinkButton href="#experience" variant="primary">
                      View Experience
                    </LinkButton>
                    <LinkButton href="/ADEOTI-SEYI-CV.pdf" target="_blank" variant="secondary">
                      Download Resume
                    </LinkButton>
                  </div>
                </ScrollReveal>
              </div>

              {/* Right — Terminal */}
              <ScrollReveal delay={0.4} direction="right">
                <HeroTerminal />
              </ScrollReveal>
            </div>
          </div>

          {/* Bottom gradient fade */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
        </section>

        {/* ───────────────────── EXPERIENCE ───────────────────── */}
        <section id="experience" className="section-divider relative">
          <SectionGlow position="left" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
            <ScrollReveal>
              <SectionHeading>Experience</SectionHeading>
              <p className="section-subtitle">
                Production systems I&apos;ve designed, built, and shipped — with real teams, real stakes, and measurable outcomes.
              </p>
            </ScrollReveal>

            {/* Main case studies */}
            <div className="mt-10 space-y-6">
              {experience.map((item, index) => (
                <ScrollReveal key={item.title} delay={index * 0.08}>
                  <Card className="p-6 sm:p-8">
                    {/* Company header */}
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">{item.company}</p>
                          <p className="text-xs text-slate-500">{item.role} · {item.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-slate-500">
                        <span>{item.period}</span>
                        <span className="hidden sm:inline">·</span>
                        <span className="hidden sm:inline">{item.teamSize}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mt-5">
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm text-slate-500">{item.subtitle}</p>
                    </div>

                    <div className="mt-5 grid gap-4 sm:grid-cols-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 mb-2">Problem</p>
                        <p className="text-sm leading-7 text-slate-400">{item.problem}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 mb-2">Architecture</p>
                        <p className="text-sm leading-7 text-slate-400">{item.architecture}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 mb-2">Impact</p>
                        <p className="text-sm leading-7 text-slate-400">{item.impact}</p>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {item.technologies.map((tech) => (
                        <Tag key={tech}>{tech}</Tag>
                      ))}
                    </div>
                  </Card>
                </ScrollReveal>
              ))}
            </div>

            {/* Additional experience — brief */}
            <ScrollReveal delay={0.1}>
              <div className="mt-8">
                <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500 mb-4">
                  Additional experience
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {additionalExperience.map((item) => (
                    <Card key={item.company} className="p-5">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-sm font-semibold text-white">{item.company}</p>
                        <span className="text-xs text-slate-600 whitespace-nowrap">{item.period}</span>
                      </div>
                      <p className="mt-1 text-xs text-slate-500">{item.role}</p>
                      <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ───────────────────── PROJECTS ───────────────────── */}
        <section id="projects" className="section-divider relative">
          <SectionGlow position="right" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
            <ScrollReveal>
              <SectionHeading>Projects</SectionHeading>
              <p className="section-subtitle">
                Open-source work and side projects that demonstrate full-stack capability and engineering depth.
              </p>
            </ScrollReveal>

            <StaggerContainer className="mt-10 grid gap-5 lg:grid-cols-3">
              {projects.map((project) => (
                <StaggerItem key={project.title}>
                  <Card className="flex h-full flex-col p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                          {project.live && (
                            <span className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[0.6rem] uppercase tracking-[0.12em] text-emerald-400 font-semibold">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                              Live
                            </span>
                          )}
                        </div>
                        {'subtitle' in project && project.subtitle && (
                          <p className="mt-0.5 text-xs text-slate-500">{project.subtitle}</p>
                        )}
                      </div>
                      <Github className="h-4 w-4 flex-shrink-0 text-slate-600" />
                    </div>

                    <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">{project.description}</p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.highlights.map((item) => (
                        <Tag key={item}>{item}</Tag>
                      ))}
                    </div>

                    <div className="mt-4 flex gap-2">
                      {project.live && project.href && (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs font-semibold text-accent transition hover:opacity-80"
                        >
                          View Live <ArrowUpRight className="h-3 w-3" />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs font-semibold text-slate-400 transition hover:text-white"
                        >
                          GitHub <ArrowUpRight className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ───────────────────── CONTACT ───────────────────── */}
        <section id="contact" className="section-divider relative">
          <SectionGlow position="center" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
            <ScrollReveal>
              <div className="relative overflow-hidden rounded-2xl border border-accent/10 bg-gradient-to-br from-accent/[0.04] to-transparent p-8 sm:p-12">
                <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-accent/[0.06] blur-[80px]" />

                <div className="relative z-10">
                  <p className="text-xs uppercase tracking-[0.2em] text-accent">Get in touch</p>
                  <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                    Let&apos;s build something together.
                  </h2>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
                    I&apos;m actively looking for senior engineering roles — remote, hybrid, or relocation.
                    If you&apos;re building scalable systems and need a strong full-stack engineer, let&apos;s talk.
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {contactLinks.map((item) => {
                      let IconComponent = Mail;
                      if (item.label === 'GitHub') IconComponent = Github;
                      if (item.label === 'LinkedIn') IconComponent = Linkedin;
                      return (
                        <a
                          key={item.label}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition hover:border-white/10 hover:bg-white/[0.04]"
                        >
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent transition group-hover:bg-accent/20">
                            <IconComponent className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-white">{item.label}</p>
                            <p className="text-xs text-slate-500">{item.value}</p>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
