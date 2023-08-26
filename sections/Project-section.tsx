import { LinkButton } from "@/components/LinkButton";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { getFeaturedProjects } from "@/sanity/sanity-queries";
import { BsArrowRightShort } from "react-icons/bs";
import React from "react";

export const ProjectSection = async () => {
  const projectDocs = await getFeaturedProjects();
  return (
    <div className="section" id="project">
      <div className="flex w-full flex-col gap-8">
        <SectionHeader
          title="Featured Projects"
          subtitle="I'm proud of these"
        />
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
          {projectDocs.map((project) => (
            <ProjectCard data={project} key={project._id} />
          ))}
        </div>
        <div className="ml-auto">
          <LinkButton href="/projects" variant="large" hover>
            <p>All Projects</p>
            <BsArrowRightShort size={24} />
          </LinkButton>
        </div>
      </div>
    </div>
  );
};
