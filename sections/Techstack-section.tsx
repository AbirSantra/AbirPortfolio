import { SectionHeader } from "@/components/SectionHeader";
import ToolCard from "@/components/ToolCard";
import { getAllTools } from "@/sanity/sanity-queries";
import React from "react";

const TechStackSection = async () => {
  const toolDocs = await getAllTools();
  return (
    <div className="section" id="techstack">
      <div className="flex w-full flex-col gap-8">
        <SectionHeader title="Tech Stack" subtitle="My go-to technologies" />
        <div className="flex w-full flex-wrap  gap-2">
          {toolDocs.map((tool) => (
            <ToolCard data={tool} key={tool._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackSection;
