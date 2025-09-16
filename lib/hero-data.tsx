import heroContent from "@/data/hero-content.json";

export interface HeroContent {
  headline1: string;
  headline2: string;
  description: string;
  about: string;
}

export const getHeroContent = (): HeroContent => {
  return heroContent;
};

export const getAboutContent = (): string => {
  return heroContent.about;
};
