import { BlogCard } from "@/components/BlogCard";
import { LinkButton } from "@/components/LinkButton";
import { SectionHeader } from "@/components/SectionHeader";
import { getFeaturedBlogs } from "@/sanity/sanity-queries";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

export const BlogSection = async () => {
  const blogDocs = await getFeaturedBlogs();
  return (
    <div className="section" id="blogs">
      <div className="flex w-full flex-col gap-8">
        <SectionHeader
          title="Blogs"
          subtitle="I write about the things I learn"
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {blogDocs.map((blog) => (
            <BlogCard data={blog} key={blog.node.id} />
          ))}
        </div>
        <div className="ml-auto">
          <LinkButton href="/blogs" variant="large" hover>
            <p>All Blogs</p>
            <BsArrowRightShort size={24} />
          </LinkButton>
        </div>
      </div>
    </div>
  );
};
