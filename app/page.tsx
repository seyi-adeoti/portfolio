import { ArrowUpRight, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
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
  architectureHighlights,
  caseStudies,
  clientOutcomes,
  contactLinks,
  githubProjects,
  heroBadges,
  leadershipItems,
  lookingFor,
  metrics,
  processSteps,
  proofPoints,
  sideProjects,
  testimonials,
  whyHireMe,
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
                      <span className="font-semibold text-white">Full Stack Engineer</span>
                    </span>
                    <span className="h-3 w-px bg-white/10" />
                    <span className="text-slate-500">Open to opportunities worldwide</span>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <h1 className="mt-8 max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl !leading-[1.1]">
                    Fast, resilient
                    <span className="text-gradient"> payment systems </span>
                    built for scale.
                  </h1>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                  <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
                    I design and deliver distributed payment platforms with secure rails,
                    event-driven settlements, and strong engineering discipline for global growth.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.4}>
                  <div className="mt-8 flex flex-wrap gap-2">
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
                  <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                    <LinkButton href="#case-studies" variant="primary">
                      View Case Studies
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

        {/* ───────────────────── METRICS ───────────────────── */}
        <section id="metrics" className="section-divider relative">
          <SectionGlow position="right" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
            <ScrollReveal>
              <SectionHeading>Impact metrics</SectionHeading>
              <p className="section-subtitle">
                Measurable outcomes from enterprise and fintech work that signal scale, resilience, and engineering maturity.
              </p>
            </ScrollReveal>

            <StaggerContainer className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
              {metrics.map((metric) => (
                <StaggerItem key={metric.label}>
                  <Card className="p-6 text-center sm:text-left">
                    <p className="text-3xl font-semibold text-white sm:text-4xl">{metric.value}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-500">{metric.label}</p>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ───────────────────── PROOF POINTS ───────────────────── */}
        <section id="proof-points" className="section-divider relative">
          <SectionGlow position="left" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
            <ScrollReveal>
              <SectionHeading>Engineering proof points</SectionHeading>
              <p className="section-subtitle">
                Evidence of the technical practices and platform maturity that support enterprise delivery.
              </p>
            </ScrollReveal>

            <StaggerContainer className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {proofPoints.map((point) => (
                <StaggerItem key={point.title}>
                  <Card className="space-y-4 p-6 h-full">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <point.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white">{point.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-400">{point.description}</p>
                    </div>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ───────────────────── CASE STUDIES ───────────────────── */}
        <section id="case-studies" className="section-divider relative">
          <SectionGlow position="center" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.05] px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-accent">
                <Sparkles className="h-3.5 w-3.5" />
                Engineering case studies
              </div>
              <SectionHeading className="mt-4">Detailed delivery stories</SectionHeading>
              <p className="section-subtitle">
                Each case study explains the problem, architecture, tradeoffs, and the business impact behind the work.
              </p>
            </ScrollReveal>

            <StaggerContainer className="mt-10 grid gap-6 xl:grid-cols-3">
              {caseStudies.map((cs) => (
                <StaggerItem key={cs.title}>
                  <Card className="flex h-full flex-col space-y-5 p-6">
                    <div className="flex items-center gap-2.5 text-accent">
                      <cs.icon className="h-4 w-4" />
                      <span className="text-xs uppercase tracking-[0.2em]">Case study</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{cs.title}</h3>
                      <p className="mt-1 text-sm text-slate-500">{cs.subtitle}</p>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="font-semibold text-slate-300">Problem</p>
                        <p className="mt-1 text-slate-500 leading-7">{cs.problem}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-300">Architecture</p>
                        <p className="mt-1 text-slate-500 leading-7">{cs.architecture}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-300">Impact</p>
                        <p className="mt-1 text-slate-500 leading-7">{cs.impact}</p>
                      </div>
                    </div>
                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-sm">
                      <p className="font-semibold text-slate-300">Engineering decisions</p>
                      <p className="mt-1 text-slate-500 leading-7">{cs.decisions}</p>
                      <p className="mt-3 text-xs text-slate-600">Lessons: {cs.lessons}</p>
                    </div>
                    <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                      {cs.technologies.map((tech) => (
                        <Tag key={tech}>{tech}</Tag>
                      ))}
                    </div>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ───────────────────── CLIENT OUTCOMES ───────────────────── */}
        <section id="client-outcomes" className="section-divider relative">
          <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
            <ScrollReveal>
              <SectionHeading>Client outcomes</SectionHeading>
              <p className="section-subtitle">
                Local and operational delivery stories from startups, branch banking, and cross-channel platforms.
              </p>
            </ScrollReveal>

            <StaggerContainer className="mt-10 grid gap-6 xl:grid-cols-3">
              {clientOutcomes.map((item) => (
                <StaggerItem key={item.title}>
                  <Card className="flex h-full flex-col space-y-5 p-6">
                    <div className="flex items-center gap-2.5 text-accent">
                      <Sparkles className="h-4 w-4" />
                      <span className="text-xs uppercase tracking-[0.2em]">Client outcome</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm text-slate-500">{item.subtitle}</p>
                    </div>
                    <div className="space-y-3 text-sm">
                      <p className="text-slate-500 leading-7">{item.description}</p>
                      <div>
                        <p className="font-semibold text-slate-300">Impact</p>
                        <p className="mt-1 text-slate-500 leading-7">{item.impact}</p>
                      </div>
                    </div>
                    <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                      {item.technologies.map((tech) => (
                        <Tag key={tech}>{tech}</Tag>
                      ))}
                    </div>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ───────────────────── ARCHITECTURE ───────────────────── */}
        <section id="architecture" className="section-divider relative">
          <SectionGlow position="right" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
            <ScrollReveal>
              <SectionHeading>Architecture showcase</SectionHeading>
              <p className="section-subtitle">
                A clear view of the patterns, infrastructure, and systems that power large enterprise products.
              </p>
            </ScrollReveal>

            <StaggerContainer className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {architectureHighlights.map((item) => (
                <StaggerItem key={item.title}>
                  <Card className="space-y-3 p-6 h-full">
                    <h3 className="text-base font-semibold text-white">{item.title}</h3>
                    <p className="text-sm leading-7 text-slate-400">{item.description}</p>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ───────────────────── PROCESS ───────────────────── */}
        <section id="process" className="section-divider relative">
          <SectionGlow position="left" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
            <ScrollReveal>
              <SectionHeading>How I work</SectionHeading>
              <p className="section-subtitle">
                A practical delivery rhythm for enterprise engineering, from discovery through operations.
              </p>
            </ScrollReveal>

            <StaggerContainer className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {processSteps.map((step, index) => (
                <StaggerItem key={step.title}>
                  <Card className="group relative space-y-4 p-6 h-full">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <step.icon className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-semibold text-slate-600 uppercase tracking-[0.15em]">
                        Step {index + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white">{step.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-400">{step.description}</p>
                    </div>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ───────────────────── LEADERSHIP ───────────────────── */}
        <section id="leadership" className="section-divider relative">
          <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
            <ScrollReveal>
              <SectionHeading>Technical leadership</SectionHeading>
              <p className="section-subtitle">
                I operate beyond code: growing teams, reviewing architecture, and aligning engineering outcomes with business needs.
              </p>
            </ScrollReveal>

            <StaggerContainer className="mt-10 grid gap-4 md:grid-cols-2">
              {leadershipItems.map((item) => (
                <StaggerItem key={item.title}>
                  <Card className="space-y-3 p-6 h-full">
                    <h3 className="text-base font-semibold text-white">{item.title}</h3>
                    <p className="text-sm leading-7 text-slate-400">{item.text}</p>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ───────────────────── GITHUB ───────────────────── */}
        <section id="github" className="section-divider relative">
          <SectionGlow position="center" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
            <ScrollReveal>
              <SectionHeading>GitHub showcase</SectionHeading>
              <p className="section-subtitle">
                Flagship repositories that demonstrate enterprise fintech architecture, shared component systems, and service-oriented engineering.
              </p>
            </ScrollReveal>

            <StaggerContainer className="mt-10 grid gap-5 xl:grid-cols-2">
              {githubProjects.map((project) => (
                <StaggerItem key={project.title}>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <Card className="flex h-full flex-col space-y-4 p-6">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors duration-300">
                            {project.title}
                          </h3>
                          <p className="mt-1.5 text-sm text-slate-500">{project.description}</p>
                        </div>
                        <Github className="h-5 w-5 flex-shrink-0 text-slate-600 transition group-hover:text-accent" />
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.highlights.map((item) => (
                          <Tag key={item}>{item}</Tag>
                        ))}
                      </div>
                      <div className="flex items-center gap-1.5 text-sm font-semibold text-accent opacity-0 transition-all duration-300 group-hover:opacity-100">
                        View on GitHub <ArrowUpRight className="h-3.5 w-3.5" />
                      </div>
                    </Card>
                  </a>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ───────────────────── SIDE PROJECTS ───────────────────── */}
        <section id="side-projects" className="section-divider relative">
          <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
            <ScrollReveal>
              <SectionHeading>Featured side projects</SectionHeading>
              <p className="section-subtitle">
                Current projects showcasing full-stack capabilities and real-world product thinking.
              </p>
            </ScrollReveal>

            <div className="mt-10 space-y-5">
              {sideProjects.map((project) => (
                <ScrollReveal key={project.title}>
                  <Card className="p-6 sm:p-8">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                      <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-3">
                          <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                          {project.live && (
                            <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.15em] text-emerald-400 font-semibold">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                              Live
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-slate-500">{project.subtitle}</p>
                        <p className="text-sm leading-7 text-slate-400">{project.description}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {project.highlights.map((item) => (
                            <Tag key={item}>{item}</Tag>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <LinkButton href={project.href} target="_blank" variant="primary">
                          View Live <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
                        </LinkButton>
                        <LinkButton href={project.github} target="_blank" variant="secondary">
                          GitHub <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
                        </LinkButton>
                      </div>
                    </div>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────────────── TESTIMONIALS ───────────────────── */}
        <section id="testimonials" className="section-divider relative">
          <SectionGlow position="left" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
            <ScrollReveal>
              <SectionHeading>Testimonials</SectionHeading>
              <p className="section-subtitle">
                Trusted feedback from senior stakeholders and product partners on delivery, quality, and leadership.
              </p>
            </ScrollReveal>

            <StaggerContainer className="mt-10 grid gap-5 xl:grid-cols-2">
              {testimonials.map((item) => (
                <StaggerItem key={item.author}>
                  <Card className="relative p-8 h-full">
                    <div className="absolute -top-3 left-8 text-5xl font-serif text-accent/20">&ldquo;</div>
                    <p className="text-base leading-8 text-slate-300">{item.quote}</p>
                    <p className="mt-6 text-xs uppercase tracking-[0.2em] text-slate-600">{item.author}</p>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ───────────────────── OPPORTUNITIES ───────────────────── */}
        <section id="opportunities" className="section-divider relative">
          <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
            <ScrollReveal>
              <div className="relative overflow-hidden rounded-2xl border border-accent/10 bg-gradient-to-br from-accent/[0.04] to-transparent p-8 sm:p-10">
                {/* Background accent glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-accent/[0.06] blur-[80px]" />

                <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-accent">
                      Available for opportunities
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                      Open to local, remote, hybrid & relocation roles.
                    </h3>
                  </div>
                  <LinkButton href="#contact" variant="primary" className="flex-shrink-0">
                    Let&apos;s talk
                  </LinkButton>
                </div>

                <div className="relative z-10 mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {lookingFor.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5 text-sm text-slate-400"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ───────────────────── WHY HIRE ME ───────────────────── */}
        <section id="why-hire" className="section-divider relative">
          <SectionGlow position="right" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
            <ScrollReveal>
              <SectionHeading>Why hire me?</SectionHeading>
              <p className="section-subtitle">
                Leadership, delivery, and relocation-ready capability that makes a senior engineering hire worth the commitment.
              </p>
            </ScrollReveal>

            <StaggerContainer className="mt-10 grid gap-4 md:grid-cols-3">
              {whyHireMe.map((item) => (
                <StaggerItem key={item.title}>
                  <Card className="space-y-3 p-6 h-full">
                    <h3 className="text-base font-semibold text-white">{item.title}</h3>
                    <p className="text-sm leading-7 text-slate-400">{item.text}</p>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ───────────────────── CONTACT ───────────────────── */}
        <section id="contact" className="section-divider relative">
          <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
            <ScrollReveal>
              <SectionHeading>Contact</SectionHeading>
              <p className="section-subtitle">
                Interested in building scalable software together? Reach out and let&apos;s shape the next enterprise platform.
              </p>
            </ScrollReveal>

            <StaggerContainer className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {contactLinks.map((item) => {
                let IconComponent = Mail;
                if (item.label === 'GitHub') IconComponent = Github;
                if (item.label === 'LinkedIn') IconComponent = Linkedin;
                return (
                  <StaggerItem key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block"
                    >
                      <Card className="flex flex-col justify-between p-6 h-full">
                        <div className="flex items-center gap-2.5">
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent transition group-hover:bg-accent/20">
                            <IconComponent className="h-4 w-4" />
                          </div>
                          <span className="font-semibold text-white">{item.label}</span>
                        </div>
                        <div className="mt-4 space-y-2">
                          <p className="text-sm text-slate-500">{item.value}</p>
                          <div className="flex items-center gap-1 text-sm font-semibold text-accent opacity-0 transition group-hover:opacity-100">
                            Connect <ArrowUpRight className="h-3.5 w-3.5" />
                          </div>
                        </div>
                      </Card>
                    </a>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
