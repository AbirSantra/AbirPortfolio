import { ExperienceSection } from "./Experience-section";
import { EducationSection } from "./Education-section";

export const ExperienceEducationSection = () => {
  return (
    <div className="section-padding grid grid-cols-1 gap-16 md:grid-cols-2">
      {/* @ts-expect-error Server Component */}
      <ExperienceSection />
      <EducationSection />
    </div>
  );
};
