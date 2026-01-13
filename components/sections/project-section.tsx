import { getFeaturedProjects } from "@/sanity/queries";
import { SectionHeader } from "../section-header";
import ProjectCard from "../project-card";
import LinkButton from "../link-button";
import { ArrowRightIcon } from "lucide-react";

const ProjectSection = async () => {
  const projectDocs = await getFeaturedProjects();
  const firstProject = projectDocs[0];
  const restProjects = projectDocs.slice(1);

  return (
    <div
      className="flex w-full justify-center p-6 py-28 flex-col gap-8 max-w-2xl"
      id="projects"
    >
      <SectionHeader title="Featured Projects" subtitle="I'm proud of these" />
      <div className="w-full flex flex-col gap-2">
        <ProjectCard data={firstProject} featured />
        <div className="w-full grid-cols-1 grid gap-2 sm:grid-cols-2">
          {restProjects.map((project) => (
            <ProjectCard data={project} key={project._id} featured />
          ))}
        </div>
      </div>
      <div className="ml-auto">
        <LinkButton href="/projects" variant="large">
          <p>All Projects</p>
          <ArrowRightIcon className="size-4" />
        </LinkButton>
      </div>
    </div>
  );
};
export default ProjectSection;
