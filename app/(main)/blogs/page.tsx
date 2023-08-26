import { BlogCard } from "@/components/BlogCard";
import { SectionHeader } from "@/components/SectionHeader";
import { getAllBlogs } from "@/sanity/sanity-queries";
import React from "react";

const Blogs = async () => {
  const blogDocs = await getAllBlogs();
  return (
    <div className="section">
      <div className="flex w-full flex-col gap-16">
        <SectionHeader
          title="Recent Blogs"
          subtitle="I like to write about the things I learn"
        />
        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2">
          {blogDocs.map((blog) => (
            <BlogCard data={blog} key={blog.slug} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
