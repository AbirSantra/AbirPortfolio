import { Project } from "@/types/project-type";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({
  data,
  featured,
}: {
  data: Project;
  featured?: boolean;
}) => {
  return (
    <Link
      href={`/projects/${data.slug}`}
      className={`group relative flex overflow-hidden rounded-xl flex-col p-3 glassmorph gap-2`}
    >
      <div className="w-full aspect-video rounded-md overflow-hidden">
        <Image
          src={data.mainImage}
          alt={data.title}
          width={400}
          height={300}
          className="duration-200 w-full h-full object-cover"
        />
      </div>
      <div className={`flex w-full flex-col border-none duration-200 p-2`}>
        <p className={`font-extrabold font-primary text-lg`}>{data.title}</p>
        <p className={`text-xs text-muted-foreground`}>{data.tagline}</p>
      </div>
    </Link>
  );
};
export default ProjectCard;
