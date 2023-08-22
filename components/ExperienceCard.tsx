import { Experience } from "@/types/Experience-type";
import moment from "moment";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";

export const ExperienceCard = ({ data }: { data: Experience }) => {
  const startDate = moment(data.startDate).format("MMM YY");
  const endDate = moment(data.endDate).format("MMM YY");
  return (
    <div className="group relative">
      <div className="flex flex-col gap-1 duration-150 ease-in-out group-hover:translate-x-4">
        <div className="flex items-center gap-4">
          <p className="text-xl font-semibold">{data.company}</p>
          <p className="text-xs font-medium tracking-tight text-neutral-400">
            {startDate} - {data.currentlyWorking ? "Present" : endDate}
          </p>
        </div>
        <p className="gradient-text text-base font-medium">{data.position}</p>
        <p className="flex items-center gap-1 text-xs text-neutral-400">
          <FaLocationDot /> {data.location}
        </p>
        <p className="mt-2 text-xs">
          <span className="font-semibold">Focus: </span> {data.focus}
        </p>
      </div>
      <div className="absolute -left-12 top-0 bg-neutral-900">
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
