import { Education } from "@/types/Education-type";
import moment from "moment";
import Image from "next/image";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const EducationCard = ({ data }: { data: Education }) => {
  /* Format date from sanity */
  const startDate = moment(data.startDate).format("YYYY");
  const endDate = moment(data.endDate).format("YY");

  return (
    <div className="group relative">
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between gap-4 ">
          <p className="font-semibold md:text-xl">{data.institution}</p>
          <p className="whitespace-nowrap text-xs font-medium tracking-tight text-neutral-400">
            {startDate} - {endDate}
          </p>
        </div>
        <p className="gradient-text text-sm font-medium">{data.field}</p>
        <p className="flex items-center gap-1 text-xs text-neutral-400">
          <FaLocationDot /> {data.location}
        </p>
        <p className="mt-2 text-xs">
          <span className="font-semibold">Score: </span> {data.score}
        </p>
      </div>
      <div className="absolute -left-12 top-0 overflow-hidden rounded-full bg-neutral-900">
        <Image
          src={data.institutionLogo}
          height={32}
          width={32}
          alt={data.institution}
        />
      </div>
    </div>
  );
};

export default EducationCard;
