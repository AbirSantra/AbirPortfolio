import { createClient } from "@sanity/client";

const config = {
  projectId: "m1lgynxf",
  dataset: "production",
  apiVersion: "2023-02-10",
  useCdn: false,
};

export const client = createClient(config);
