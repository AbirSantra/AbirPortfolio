import { getHeroContent } from "@/sanity/queries";
import { SectionHeader } from "../section-header";
import { PortableText } from "@portabletext/react";
import DownloadCV from "../download-cv";

const AboutSection = async () => {
  const aboutContent = await getHeroContent();

  return (
    <div className="flex w-full justify-center p-6 py-28 flex-col gap-8 max-w-2xl">
      <SectionHeader
        title="About Me"
        subtitle="I love building things out of code"
      />
      <div className="prose dark:prose-invert text-justify font-light">
        <PortableText value={aboutContent.about} />
      </div>
      <DownloadCV pdf={aboutContent.resume} />
    </div>
  );
};
export default AboutSection;
