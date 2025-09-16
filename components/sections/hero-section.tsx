import Image from "next/image";
import HeroBackground from "../backgrounds/hero-background";
import { getHeroContent } from "@/sanity/queries";
import { urlFor } from "@/sanity/lib/image";

const HeroSection = async () => {
  const heroContent = await getHeroContent();

  return (
    <div className="h-dvh flex w-full justify-center items-center text-center p-6 py-28 flex-col gap-8 max-w-2xl">
      <div className="overflow-hidden rounded-full size-30 sm:size-40">
        <Image
          src={urlFor(heroContent.profileImage)
            .width(400)
            .height(400)
            .format("webp")
            .quality(85)
            .url()}
          alt={heroContent.profileImage.alt || "Profile picture"}
          width={256}
          height={256}
          className="object-cover w-full h-full"
          placeholder="blur"
          blurDataURL={urlFor(heroContent.profileImage)
            .width(20)
            .height(20)
            .blur(50)
            .quality(20)
            .url()}
          sizes="(max-width: 640px) 120px, (max-width: 768px) 160px, 256px"
          priority
        />
      </div>

      <h1 className="text-5xl sm:text-6xl flex flex-col font-extrabold font-primary">
        <span>{heroContent.headline1}</span>
        <span>{heroContent.headline2}</span>
      </h1>

      <p className="text-muted-foreground font-secondary text-base sm:text-xl">
        {heroContent.description}
      </p>

      <HeroBackground />
    </div>
  );
};
export default HeroSection;
