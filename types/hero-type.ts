import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface HeroContent {
  _id: string;
  headline1: string;
  headline2: string;
  description: string;
  profileImage: SanityImageSource & {
    alt?: string;
  };
}
