import { BlogCard } from "@/components/BlogCard";
import { SectionHeader } from "@/components/SectionHeader";
import { getFeaturedBlogs } from "@/sanity/sanity-queries";
import React from "react";

export const BlogSection = async () => {
  const blogDocs = await getFeaturedBlogs();
  return (
    <div className="section">
      <div className="flex w-full flex-col gap-8">
        <SectionHeader
          title="Blogs"
          subtitle="I write about the things I learn"
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {blogDocs.map((blog) => (
            <BlogCard data={blog} key={blog._id} />
          ))}
        </div>
      </div>
    </div>
  );
};
