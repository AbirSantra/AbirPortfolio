import { Socials } from "@/components/Socials";

export const HeroSection = () => {
  return (
    <div className="section min-h-[calc(100vh-8rem)] gap-12 md:min-h-[calc(100vh-4rem)]">
      <div className="flex flex-col items-center justify-center gap-4 text-center font-medium">
        <p className="text-xl sm:text-2xl">
          👋 <span className="gradient-text">Hello there! I'm</span>
        </p>
        <p className="text-center text-5xl font-bold sm:text-6xl md:text-7xl lg:text-9xl">
          Abir Santra
        </p>
        <p className="gradient-text text-xl sm:text-2xl">
          Web Designer and Developer
        </p>
      </div>
      <div>
        <Socials />
      </div>
    </div>
  );
};
