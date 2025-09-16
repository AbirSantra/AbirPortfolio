import { type SchemaTypeDefinition } from "sanity";
import project from "./project-schema";
import tool from "./tool-schema";
import experience from "./experience-schema";
import education from "./education-schema";
import heroContent from "./hero-schema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroContent, project, tool, experience, education],
};
