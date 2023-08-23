import EducationCard from "@/components/EducationCard";
import { SectionHeader } from "@/components/SectionHeader";
import { getAllEducations } from "@/sanity/sanity-queries";

export const EducationSection = async () => {
  const educationDocs = await getAllEducations();
  return (
    <div className="flex flex-col gap-8">
      <SectionHeader title="Education" subtitle="Gathering Knowledge" />
      <div className="ml-4 flex flex-col gap-16 border-l-2 border-neutral-200 pl-8 dark:border-neutral-800">
        {educationDocs.map((educationDoc) => (
          <EducationCard data={educationDoc} key={educationDoc._id} />
        ))}
      </div>
    </div>
  );
};
