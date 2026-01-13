import AboutSection from "@/components/sections/about-section";
import ExperienceSection from "@/components/sections/experience-section";
import HeroSection from "@/components/sections/hero-section";
import ProjectSection from "@/components/sections/project-section";
import TechSection from "@/components/sections/tech-section";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <TechSection />
      <ProjectSection />
    </div>
  );
}
