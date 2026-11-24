import { Navbar } from '../components/ui/navbar';
import { HeroSection } from '../components/sections/hero-section';
import { AboutSection } from '../components/sections/about-section';
import { FintechSection } from '../components/sections/fintech-section';
import { ExperienceSection } from '../components/sections/experience-section';
import { TechStackSection } from '../components/sections/tech-stack-section';
import { ProjectsSection } from '../components/sections/projects-section';
import { ArchitectureSection } from '../components/sections/architecture-section';
import { ContactSection } from '../components/sections/contact-section';
import { Footer } from '../components/ui/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#1A2332] font-sans selection:bg-[#B8860B]/20 selection:text-[#1A2332]">
      <Navbar />
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <FintechSection />
        <TechStackSection />
        <ProjectsSection />
        <ArchitectureSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}


