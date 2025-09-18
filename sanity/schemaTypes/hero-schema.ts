const heroContent = {
  name: "heroContent",
  title: "Hero Section",
  type: "document",
  fields: [
    {
      name: "headline1",
      title: "Headline 1",
      description: "First part of the main headline (e.g., 'Hi, I'm Abir')",
      type: "string",
    },
    {
      name: "headline2",
      title: "Headline 2",
      description:
        "Second part of the main headline (e.g., 'Developer & Designer')",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      description: "The paragraph text below the headlines",
      type: "text",
      rows: 4,
    },
    {
      name: "profileImage",
      title: "Profile Image",
      description: "Hero section profile image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
        },
      ],
    },
    {
      name: "about",
      title: "About Section",
      description: "Detailed text for the About section",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "resume",
      title: "Resume",
      description: "Upload your resume/CV (PDF format recommended)",
      type: "file",
      options: {
        accept: ".pdf",
      },
      fields: [
        {
          name: "fileName",
          title: "File Name",
          type: "string",
          description: "Display name for the resume file",
          initialValue: "Resume",
        },
      ],
    },
  ],
};

export default heroContent;
