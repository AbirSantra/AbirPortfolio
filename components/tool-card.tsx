import { Tool } from "@/types/tool-type";
import Image from "next/image";

const ToolCard = ({ data }: { data: Tool }) => {
  return (
    <div className="flex cursor-pointer items-center gap-2 rounded-lg border-[1px] border-transparent px-4 py-2 duration-200 hover:border-sky-500 bg-muted">
      <Image src={data.icon} alt={data.name} height={16} width={16} />
      <p className="text-sm">{data.name}</p>
    </div>
  );
};

export default ToolCard;
