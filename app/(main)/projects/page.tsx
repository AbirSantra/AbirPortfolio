import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { getAllProjects } from "@/sanity/sanity-queries";
import React from "react";

const Projects = async () => {
  const projectDocs = await getAllProjects();
  return (
    <div className="section">
      <div className="flex w-full flex-col gap-8">
        <SectionHeader title="Projects" subtitle="I'm proud of these" />
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
