import { AboutSection } from "@/sections/About-section";
import { ExperienceEducationSection } from "@/sections/Experience-Education-section";
import { HeroSection } from "@/sections/Hero-section";
import TechStackSection from "@/sections/Techstack-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ExperienceEducationSection />
      {/* @ts-expect-error Server Component */}
      <TechStackSection />
    </div>
  );
}
