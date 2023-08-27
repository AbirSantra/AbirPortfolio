import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { getAllProjects } from "@/sanity/sanity-queries";
import React from "react";

export const metadata = {
  title: "Abir Santra | Projects",
  description:
    "All the projects that I have made so far. I learn better by building projects.",
};

const Projects = async () => {
  const projectDocs = await getAllProjects();
  return (
    <div className="section">
      <div className="flex w-full flex-col gap-16">
        <SectionHeader
          title="All Projects"
          subtitle="I learn better by doing"
        />
        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2">
          {projectDocs.map((project) => (
            <ProjectCard data={project} key={project._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
