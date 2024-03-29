import { Blog } from "@/types/Blog-type";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { LinkButton } from "./LinkButton";

export const BlogCard = ({ data }: { data: Blog }) => {
  const date = moment(data.node.publishedAt).fromNow();
  return (
    <div className="w-full overflow-hidden rounded-lg border-[1px] border-transparent shadow-md duration-200 hover:border-sky-500">
      <Link href={`https://abirsantra.hashnode.dev/${data.node.slug}`}>
        <Image
          src={data.node.coverImage.url}
          alt="Cover Image"
          width={800}
          height={600}
          style={{ objectFit: "cover" }}
          className="aspect-video w-full"
        />
      </Link>
      <div className="flex flex-col gap-2 rounded-b-lg bg-white px-4 py-5 dark:bg-neutral-800">
        <p className="gradient-text text-xs font-semibold">{date}</p>
        <p className="truncate font-semibold">{data.node.title}</p>
        <p className="mb-2 truncate text-xs">{data.node.brief}</p>
        <LinkButton
          href={`https://abirsantra.hashnode.dev/${data.node.slug}`}
          variant="small"
        >
          <p>Read Blog</p>
          <BsArrowRightShort size={16} />
        </LinkButton>
      </div>
    </div>
  );
};
