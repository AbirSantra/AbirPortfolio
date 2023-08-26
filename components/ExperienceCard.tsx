"use client";

import React from "react";
import { Experience } from "@/types/Experience-type";
import moment from "moment";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { PortableText } from "@portabletext/react";
import { BsCaretDownFill, BsCaretRightFill } from "react-icons/bs";

export const ExperienceCard = ({ data }: { data: Experience }) => {
  const [readMore, setReadMore] = React.useState<boolean>(false);
  const readMoreRef = React.useRef<HTMLDivElement>(null);

  /* Handle ReadMore */
  const handleReadMore = () => {
    setReadMore((prevState) => !prevState);
  };

  /* ReadMore Closer */
  React.useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        readMoreRef.current &&
        !readMoreRef.current.contains(event.target as Node)
      ) {
        console.log("Click outside!");
        setReadMore(false);
      }
    };
    if (readMore) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [readMore]);

  /* Format date from sanity */
  const startDate = moment(data.startDate).format("MMM YY");
  const endDate = moment(data.endDate).format("MMM YY");
  return (
    <div className="group relative">
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between gap-4">
          <p className="font-semibold md:text-xl">{data.company}</p>
          <p className="text-xs font-medium tracking-tight text-neutral-400">
            {startDate} - {data.currentlyWorking ? "Present" : endDate}
          </p>
        </div>
        <p className="gradient-text text-sm font-medium">{data.position}</p>
        <p className="flex items-center gap-1 text-xs text-neutral-400">
          <FaLocationDot /> {data.location}
        </p>
        <p className="mt-2 text-xs">
          <span className="font-semibold">Focus: </span> {data.focus}
        </p>
        <div ref={readMoreRef}>
          <span
            className="flex cursor-pointer items-center gap-1 text-xs font-medium text-sky-500"
            onClick={handleReadMore}
          >
            Learn more {readMore ? <BsCaretDownFill /> : <BsCaretRightFill />}
          </span>
          <span
            className={`prose text-xs duration-200 dark:prose-invert ${
              !readMore && "hidden"
            }`}
          >
            <PortableText value={data.description} />
          </span>
        </div>
      </div>
      <div className="absolute -left-12 top-0 overflow-hidden rounded-full bg-neutral-900">
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
