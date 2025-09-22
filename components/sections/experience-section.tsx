import { getAllExperiences } from "@/sanity/queries";
import { SectionHeader } from "../section-header";
import moment from "moment";
import { MapPinIcon } from "lucide-react";
import { PortableText } from "next-sanity";
import Image from "next/image";
import ExperienceCard from "../experience-card";

const ExperienceSection = async () => {
  const experienceContent = await getAllExperiences();

  return (
    <div
      className="flex w-full justify-center p-6 py-28 flex-col gap-8 max-w-2xl"
      id="work"
    >
      <SectionHeader
        title="Work Experience"
        subtitle="Learning, one step at a time"
      />

      <div className="w-full relative flex">
        <div className="shrink-0 left-3 sm:left-5 absolute bg-muted rounded-full w-1 h-full"></div>
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
