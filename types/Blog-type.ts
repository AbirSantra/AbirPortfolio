export type Blog = {
  node: {
    id: string;
    slug: string;
    title: string;
    coverImage: {
      url: string;
    };
    dateAdded: Date;
    brief: string;
  };
};
