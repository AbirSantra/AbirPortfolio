import { getAllTools } from "@/sanity/queries";
import { SectionHeader } from "../section-header";
import ToolCard from "../tool-card";

const TechSection = async () => {
  const tools = await getAllTools();

  return (
    <div
      id="tech"
      className="flex w-full justify-center p-6 py-28 flex-col gap-8 section-max-width"
    >
      <SectionHeader title="Tech Stack" subtitle="My go-to technologies" />
      <div className="flex w-full flex-wrap gap-2">
        {tools.map((tool) => (
          <ToolCard data={tool} key={tool._id} />
        ))}
      </div>
    </div>
  );
};
export default TechSection;
