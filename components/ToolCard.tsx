import { Tool } from "@/types/Tool-type";
import Image from "next/image";
import React from "react";

const ToolCard = ({ data }: { data: Tool }) => {
  return (
    <div className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 shadow-sm dark:bg-neutral-800">
      <Image src={data.icon} alt={data.name} height={16} width={16} />
      <p className="text-sm">{data.name}</p>
    </div>
  );
};

export default ToolCard;
