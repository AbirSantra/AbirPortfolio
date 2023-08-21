import { AboutSection } from "@/sections/About-section";
import { ExperienceEducationSection } from "@/sections/Experience-Education-section";
import { HeroSection } from "@/sections/Hero-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ExperienceEducationSection />
    </div>
  );
}
