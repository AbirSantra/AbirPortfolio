import { PortableTextBlock } from "sanity";
import { Tool } from "./Tool-type";

export type Project = {
  _id: string;
  _createdAt: string;
  title: string;
  tagline: string;
  slug: string;
  mainImage: string;
  description: PortableTextBlock[];
  githubLink: string;
  projectLink: string;
  tools: Tool[];
  isFeatured: boolean;
}