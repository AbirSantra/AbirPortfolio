import { Experience } from "@/types/Experience-type";
import moment from "moment";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";

export const ExperienceCard = ({ data }: { data: Experience }) => {
  const startDate = moment(data.startDate).format("MMM YY");
  const endDate = moment(data.endDate).format("MMM YY");
  return (
    <div className="relative flex flex-col gap-1">
      <div className="flex items-center gap-4">
        <p className="text-xl font-semibold">{data.company}</p>
        <p className="text-xs font-medium tracking-tight text-neutral-400">
          {startDate} - {data.currentlyWorking ? "Present" : endDate}
        </p>
      </div>
      <p className="gradient-text text-sm font-medium">{data.position}</p>
      <p className="flex items-center gap-2 text-sm text-neutral-400">
        <FaLocationDot /> {data.location}
      </p>
      <p className="text-sm">
        <span>Focus: </span> {data.focus}
      </p>
      <div className="absolute -left-12 top-0 bg-neutral-50 dark:bg-neutral-900">
        <Image
          src={data.companyLogo}
          height={32}
          width={32}
          alt={data.company}
        />
      </div>
    </div>
  );
};
