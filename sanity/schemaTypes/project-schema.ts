import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";

const project = {
  name: "project",
  title: "Projects",
  type: "document",
  orderings: [orderRankOrdering],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    orderRankField({ type: "project" }),
    {
      name: "tagline",
      title: "Tagline",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt text",
          type: "string",
        },
      ],
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "githubLink",
      title: "Github Link",
      type: "url",
    },
    {
      name: "projectLink",
      title: "Project Link",
      type: "url",
    },
    {
      name: "tools",
      title: "Tools",
      type: "array",
      of: [{ type: "reference", to: { type: "tool" } }],
    },
    {
      name: "isFeatured",
      title: "Set Featured?",
      type: "boolean",
    },
  ],
};

export default project;
