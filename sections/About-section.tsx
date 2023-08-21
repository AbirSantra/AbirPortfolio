import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import AbirDp from "@/public/images/abir-dp.png";
import { ButtonLink } from "@/components/ButtonLink";
import CVDownloadIcon from "@/public/images/cv-download-icon.svg";

export const AboutSection = () => {
  return (
    <div className="section" id="about">
      <div className="flex w-full flex-col-reverse items-start justify-center gap-12  md:flex-row md:items-center">
        <div className="flex-1">
          <Image
            src={AbirDp}
            alt="Abir's Display Picture"
            placeholder="blur"
            className="rounded-2xl"
          />
        </div>
        <div className="flex flex-[2] flex-col gap-8">
          <SectionHeader
            title="About Me"
            subtitle="I love building things out of code"
          />
          <div className="flex flex-col gap-2">
            <p>
              Hi there! I’m Abir, a web designer and developer who has been
              tinkering with code since high school, and it has been my passion
              ever since!
            </p>
            <p>
              When I’m not coding, you can find me hanging out with my friends,
              playing video games, listening to music, jamming on my drums, or
              watching Anime. Thank you for taking the time to learn a little
              bit about me. I'm excited about the possibilities that the future
              holds, and I can't wait to see where my coding journey takes me!
            </p>
          </div>
          <ButtonLink href="/abirsantra-cv.pdf">
            <p>Download CV</p>
            <Image src={CVDownloadIcon} alt="Download CV" />
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};
