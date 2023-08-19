import { Socials } from "@/components/Socials";
import { Tooltip } from "@/components/Tooltip";

export const HeroSection = () => {
  return (
    <div className="section min-h-[calc(100vh-8rem)] gap-12">
      <div className="flex flex-col items-center justify-center gap-4 text-center font-medium">
        <p className="text-xl sm:text-2xl">
          👋 <span className="gradient-text">Hello there! I'm</span>
        </p>

        <h1 className="text-center text-6xl font-bold sm:text-6xl md:text-7xl lg:text-9xl">
          Abir Santra
        </h1>
        <Tooltip direction="right" text="test">
          <p className="gradient-text text-xl sm:text-2xl">
            Web Designer and Developer
          </p>
        </Tooltip>
      </div>
      <div>
        <Socials />
      </div>
    </div>
  );
};
