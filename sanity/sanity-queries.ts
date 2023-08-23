import {createClient,groq } from 'next-sanity'
import { config } from './client-config'
import { Experience } from '@/types/Experience-type';
import { Education } from '@/types/Education-type';

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