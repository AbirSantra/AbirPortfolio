import { ExperienceSection } from "./Experience-section";
import { EducationSection } from "./Education-section";

export const ExperienceEducationSection = () => {
  return (
    <div
      className="section-padding grid grid-cols-1 gap-56 md:grid-cols-2 md:gap-16"
      id="experience"
    >
      {/* @ts-expect-error Server Component */}
      <ExperienceSection />
      {/* @ts-expect-error Server Component */}
      <EducationSection />
    </div>
  );
};
