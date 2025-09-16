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
  ],
};

export default heroContent;
