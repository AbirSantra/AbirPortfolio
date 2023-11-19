import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";

const tool = {
  name: "tool",
  title: "Tools",
  type: "document",
  orderings: [orderRankOrdering],
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    orderRankField({ type: "tool" }),
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    },
    {
      name: "icon",
      title: "Icon",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};

export default tool;
