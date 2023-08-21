import { PortableTextBlock } from "sanity";

export type Experience = {
  _id: string;
  _createdAt: Date;
  company: string;
  companyLogo: string;
  position: string;
  location: string;
  startDate: Date;
  endDate: Date;
  currentlyWorking: boolean;
  focus: string;
  description: PortableTextBlock[];
}