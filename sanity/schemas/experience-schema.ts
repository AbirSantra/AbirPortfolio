import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";

const experience = {
  name: "experience",
  title: "Experiences",
  type: "document",
  orderings: [orderRankOrdering],
  fields: [
    {
      name: "company",
      title: "Company",
      type: "string",
    },
    orderRankField({ type: "experience" }),
    {
      name: "companyLogo",
      title: "Company Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "position",
      title: "Position",
      type: "string",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "startDate",
      title: "Start Date",
      type: "date",
      options: {
        dateFormat: "MMM-YYYY",
      },
    },
    {
      name: "endDate",
      title: "End Date",
      type: "date",
      options: {
        dateFormat: "MMM-YYYY",
      },
    },
    {
      name: "currentlyWorking",
      title: "Currently Working?",
      type: "boolean",
    },
    {
      name: "focus",
      title: "Focus",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default experience;
