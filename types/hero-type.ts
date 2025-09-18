import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableTextBlock } from "sanity";

export interface HeroContent {
  _id: string;
  headline1: string;
  headline2: string;
  description: string;
  profileImage: SanityImageSource & {
    alt?: string;
  };
  about: PortableTextBlock[];
  resume: {
    asset: {
      _id: string;
      url: string;
    };
    fileName?: string;
  };
}
