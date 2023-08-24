import { Project } from "@/types/Project-type";
import Image from "next/image";
import React from "react";

export const ProjectCard = ({ data }: { data: Project }) => {
  return (
    <div className="group relative flex overflow-hidden rounded-lg md:first:col-span-2 md:first:row-span-2">
      <Image src={data.mainImage} alt={data.title} width={800} height={600} />
      <div className="glassmorph absolute bottom-0 flex w-full flex-col gap-1 border-none p-4 opacity-0 duration-200 group-hover:opacity-100 md:group-first:p-8">
        <p className="font-semibold md:group-first:text-xl">{data.title}</p>
        <p className="text-xs md:group-first:text-base">{data.tagline}</p>
      </div>
    </div>
  );
};