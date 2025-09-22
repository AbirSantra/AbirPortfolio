import { Experience } from "@/types/experience-type";
import { MapPinIcon } from "lucide-react";
import moment from "moment";
import { PortableText } from "next-sanity";
import Image from "next/image";

const ExperienceCard = ({ data }: { data: Experience }) => {
  const startDate = moment(data.startDate).format("MMM YY");
  const endDate = moment(data.endDate).format("MMM YY");

  return (
    <div key={data._id} className="w-full relative flex sm:gap-8 gap-4">
      <div className="size-8 sm:size-12 overflow-hidden rounded-full bg-neutral-900 shrink-0">
        <Image
          src={data.companyLogo}
          height={64}
          width={64}
          alt={data.company}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full flex flex-col gap-2">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-bold font-primary text-lg">{data.company}</p>
            <p className="gradient-text text-sm font-medium">{data.position}</p>
          </div>
          <p className="text-xs font-medium tracking-tight text-muted-foreground whitespace-nowrap">
            {startDate} - {data.currentlyWorking ? "Present" : endDate}
          </p>
        </div>

        <p className="flex items-center gap-1 text-xs text-muted-foreground font-medium">
          <MapPinIcon className="size-4" /> {data.location}
        </p>
        <span className="text-xs prose dark:prose-invert max-w-none text-justify pr-4">
          <PortableText value={data.description} />
        </span>
      </div>
    </div>
  );
};
export default ExperienceCard;
