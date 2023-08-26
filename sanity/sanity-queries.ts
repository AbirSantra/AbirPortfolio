import {createClient,groq } from 'next-sanity'
import { config } from './client-config'
import { Experience } from '@/types/Experience-type';
import { Education } from '@/types/Education-type';
import { Tool } from '@/types/Tool-type';
import { Project } from '@/types/Project-type';
import { Blog } from '@/types/Blog-type';

/* Get all experiences */
export const getAllExperiences = async (): Promise<Experience[]> => {
  const experienceDocs = createClient(config).fetch(
    groq`*[_type=="experience"] | order(startDate desc){
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
    }`
  )

  return experienceDocs;
}

/* Get all Educations */
export const getAllEducations = async (): Promise<Education[]> => {
  const educationDocs = createClient(config).fetch(
    groq`*[_type=="education"] | order(startDate desc) {
      _id,
      institution,
      "institutionLogo": institutionLogo.asset->url,
      field,
      location,
      startDate,
      endDate,
      score
    }`
  )
  return educationDocs;
}

/* Get all tools */
export const getAllTools = async (): Promise<Tool[]> => {
  const toolDocs = createClient(config).fetch(
    groq`*[_type=="tool"] | order(_createdAt asc){
      _id,
      name,
      "icon": icon.asset->url,
    }`
  )

  return toolDocs;
}

/* Get Featured Projects */
export const getFeaturedProjects = async (): Promise<Project[]> => {
  const projectDocs = createClient(config).fetch(
    groq`*[_type=="project" && isFeatured == true] | order(_createdAt desc){
      _id,
      title,
      tagline,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
      isFeatured
    }`
  )

  return projectDocs;
}

/* Get All Projects */
export const getAllProjects = async (): Promise<Project[]> => {
  const projectDocs = createClient(config).fetch(
    groq`*[_type=="project] | order(_createdAt desc){
      _id,
      title,
      tagline,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
      isFeatured
      description,
      githubLink,
      projectLink,
      tools[]->{
        _id,
        name,
        "icon": icon.asset->url,
      }
    }`
  )

  return projectDocs;
}

/* Get Hashnode Blogs */
export const getFeaturedBlogs = async (): Promise<Blog[]> => {
  const query = `
    query GetFeaturedBlogs($page: Int!){
      user(username: "AbirSantra"){
        publication{
          posts(page: $page){
            title,
            brief,
            slug,
            coverImage,
            dateAdded,
          }
        }
      }
    }
  `;

  const variables = { page: 0 };

  const data = await fetch('https://api.hashnode.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables
    })
  })

  const result = await data.json();

  const blogDocs = result.data.user.publication.posts.slice(0,4);

  return blogDocs;
}