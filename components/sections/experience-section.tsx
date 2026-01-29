import { getAllExperiences } from "@/sanity/queries";
import { SectionHeader } from "../section-header";
import ExperienceCard from "../experience-card";

const ExperienceSection = async () => {
  const experienceContent = await getAllExperiences();

  return (
    <div
      className="flex w-full justify-center p-6 py-28 flex-col gap-8 section-max-width"
      id="work"
    >
      <SectionHeader
        title="Work Experience"
        subtitle="Learning, one step at a time"
      />

      <div className="w-full relative flex">
        <div className="shrink-0 left-4 sm:left-6 absolute bg-muted rounded-full w-0.5 h-full"></div>
        <div className="w-full flex flex-col gap-16">
          {experienceContent.map((data) => {
            return <ExperienceCard key={data._id} data={data} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default ExperienceSection;
