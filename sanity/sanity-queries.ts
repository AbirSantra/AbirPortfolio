import { client } from "./client-config";
import { Experience } from "@/types/Experience-type";
import { Education } from "@/types/Education-type";
import { Tool } from "@/types/Tool-type";
import { Project } from "@/types/Project-type";
import { Blog } from "@/types/Blog-type";

/* Get all experiences */
export const getAllExperiences = async (): Promise<Experience[]> => {
  const experienceDocs = await client.fetch(
    `*[_type=="experience"] | order(orderRank){
      _id,
      _createdAt,
      company,
      "companyLogo": companyLogo.asset->url,
      position,
      location,
      startDate,
      endDate,
      currentlyWorking,
      focus,
      description
    }`,
  );

  return experienceDocs;
};

/* Get all Educations */
export const getAllEducations = async (): Promise<Education[]> => {
  const educationDocs = await client.fetch(
    `*[_type=="education"] | order(startDate desc) {
      _id,
      institution,
      "institutionLogo": institutionLogo.asset->url,
      field,
      location,
      startDate,
      endDate,
      score
    }`,
  );
  return educationDocs;
};

/* Get all tools */
export const getAllTools = async (): Promise<Tool[]> => {
  const toolDocs = await client.fetch(
    `*[_type=="tool"] | order(orderRank){
      _id,
      name,
      "icon": icon.asset->url,
    }`,
  );

  return toolDocs;
};

/* Get Featured Projects */
export const getFeaturedProjects = async (): Promise<Project[]> => {
  const projectDocs = await client.fetch(
    `*[_type=="project"] | order(orderRank){
      _id,
      title,
      tagline,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
      isFeatured
    }`,
  );

  return projectDocs.slice(0, 3);
};

/* Get Project */
export const getProject = async (slug: string): Promise<Project> => {
  const projectDoc = await client.fetch(
    `*[_type=="project" && slug.current == $slug][0]{
      _id,
      title,
      tagline,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
      isFeatured,
      description,
      githubLink,
      projectLink,
      tools[]->{
        _id,
        name,
        "icon": icon.asset->url,
      }
    }`,
    { slug: slug },
  );
  return projectDoc;
};

/* Get All Projects */
export const getAllProjects = async (): Promise<Project[]> => {
  const projectDocs = await client.fetch(
    `*[_type=="project"] | order(orderRank){
      _id,
      title,
      tagline,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
      isFeatured,
    }`,
  );

  return projectDocs;
};

/* Get Hashnode Blogs */
export const getFeaturedBlogs = async (): Promise<Blog[]> => {
  const query = `
    query GetFeaturedBlogs{
  publication(host: "abirsantra.hashnode.dev") {
    id
    posts(first: 4) {
      edges {
        node {
          id
          title
          brief
          author {
            name
            profilePicture
          }
          coverImage {
            url
          }
          publishedAt
          slug
        }
      }
    }
  }
}
  `;

  const data = await fetch("https://gql.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
    }),
  });

  const result = await data.json();

  const blogDocs = result.data.publication.posts.edges;

  return blogDocs;
};

/* Get all blogs */
export const getAllBlogs = async (): Promise<Blog[]> => {
  const query = `
    query GetFeaturedBlogs{
  publication(host: "abirsantra.hashnode.dev") {
    id
    posts(first: 0) {
      edges {
        node {
          id
          title
          brief
          author {
            name
            profilePicture
          }
          coverImage {
            url
          }
          publishedAt
          slug
        }
      }
    }
  }
}
  `;

  const data = await fetch("https://gql.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
    }),
  });

  const result = await data.json();

  const blogDocs = result.data.publication.posts.edges;

  return blogDocs;
};
