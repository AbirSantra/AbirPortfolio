"use client";

import React from "react";
import { Experience } from "@/types/Experience-type";
import moment from "moment";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { PortableText } from "@portabletext/react";
import { BsCaretDownFill, BsCaretRightFill } from "react-icons/bs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const ExperienceCard = ({ data }: { data: Experience }) => {
  /* Format date from sanity */
  const startDate = moment(data.startDate).format("MMM YY");
  const endDate = moment(data.endDate).format("MMM YY");
  return (
    <Accordion type="single" collapsible className="group relative">
      <AccordionItem value={data._id} className="border-none">
        <div className="absolute -left-12 top-0 overflow-hidden rounded-full bg-neutral-900">
          <Image
            src={data.companyLogo}
            height={32}
            width={32}
            alt={data.company}
          />
        </div>
        <div className="flex w-full flex-col gap-2 text-left">
          <div className="flex items-center justify-between gap-4">
            <p className="font-semibold md:text-xl">{data.company}</p>
            <p className="text-xs font-medium tracking-tight text-neutral-700 dark:text-neutral-400">
              {startDate} - {data.currentlyWorking ? "Present" : endDate}
            </p>
          </div>
          <p className="gradient-text text-sm font-medium">{data.position}</p>
          <p className="flex items-center gap-1 text-xs text-neutral-700 dark:text-neutral-400">
            <FaLocationDot /> {data.location}
          </p>
          <p className="mt-2 text-xs">
            <span className="font-semibold">Focus: </span> {data.focus}
          </p>
        </div>
        <AccordionTrigger className="text-sky-500 hover:no-underline">
          <span className="flex cursor-pointer items-center gap-1 text-xs font-medium">
            Tap to learn more
          </span>
        </AccordionTrigger>
        <AccordionContent>
          <span className={`prose text-xs duration-200 dark:prose-invert`}>
            <PortableText value={data.description} />
          </span>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
