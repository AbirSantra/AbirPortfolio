import { LinkButton } from "@/components/LinkButton";
import { SectionHeader } from "@/components/SectionHeader";
import ToolCard from "@/components/ToolCard";
import { getProject } from "@/sanity/sanity-queries";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

type Props = {
  params: { project: string };
};

const Project = async ({ params }: Props) => {
  const slug = params.project;
  const projectDoc = await getProject(slug);
  return (
    <div className="section">
      <div className="flex w-full flex-col gap-8">
        <SectionHeader title={projectDoc.title} subtitle={projectDoc.tagline} />
        <div className="flex w-full items-center justify-center overflow-hidden rounded-lg">
          <Image
            src={projectDoc.mainImage}
            alt={projectDoc.title}
            height={1200}
            width={1600}
            style={{ objectFit: "cover" }}
            className="w-full"
          />
        </div>
        <div className="flex w-full flex-col-reverse gap-8 md:flex-row md:gap-16">
          <div className="flex flex-col gap-4 md:flex-[2]">
            <p className="text-2xl font-bold">Description</p>
            <p className="prose text-sm dark:prose-invert">
              <PortableText value={projectDoc.description} />
            </p>
          </div>
          <div className="flex flex-col gap-8 md:flex-1">
            <div className="flex flex-col gap-4">
              <p className="text-2xl font-bold">Links</p>
              <div className="flex gap-2">
                <LinkButton href={projectDoc.projectLink} variant="small">
                  <p className="text-sm">Demo</p>
                  <BsArrowRightShort size={24} />
                </LinkButton>
                <LinkButton href={projectDoc.githubLink} variant="small">
                  <p className="text-sm">Code</p>
                  <BsArrowRightShort size={24} />
                </LinkButton>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-2xl font-bold">Tools</p>
              <div className="flex flex-wrap gap-2">
                {projectDoc.tools.map((tool) => (
                  <ToolCard key={tool._id} data={tool} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
