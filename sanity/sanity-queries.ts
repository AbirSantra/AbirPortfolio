import {createClient,groq } from 'next-sanity'
import { config } from './client-config'
import { Experience } from '@/types/Experience-type';

/* Get all experiences */
export const getAllExperiences = async (): Promise<Experience[]> => {
  const experienceDocs = createClient(config).fetch(
    groq`*[_type=="experience"]{
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