import { ExperienceCard } from "@/components/ExperienceCard";
import { SectionHeader } from "@/components/SectionHeader";
import { getAllExperiences } from "@/sanity/sanity-queries";

export const ExperienceSection = async () => {
  const experienceDocs = await getAllExperiences();
  return (
    <div className="flex flex-col gap-8">
      <SectionHeader
        title="Experience"
        subtitle="Developing, one step at a time"
      />
      <div className="ml-4 flex flex-col gap-16 border-l-2 border-neutral-200 pl-8 dark:border-neutral-800">
        {experienceDocs.map((experienceDoc) => (
          <ExperienceCard data={experienceDoc} key={experienceDoc._id} />
        ))}
      </div>
    </div>
  );
};
