import { Socials } from "@/components/Socials";

export const HeroSection = () => {
  return (
    <div className="section min-h-[calc(100vh-8rem)] gap-12 md:min-h-[calc(100vh-4rem)]">
      <div className="flex flex-col items-center justify-center gap-6 text-center font-medium">
        <p className="font-Caveat text-2xl font-semibold sm:text-4xl">
          👋 <span className="gradient-text">Hello there! I'm</span>
        </p>
        <p className="gradient-text-neutral text-center text-5xl font-medium sm:text-6xl md:text-7xl lg:text-8xl">
          Abir Santra.
        </p>
        <p className="gradient-text font-Caveat text-2xl font-semibold sm:text-4xl">
          A Web Designer & Developer.
        </p>
      </div>
      <div>
        <Socials />
      </div>
    </div>
  );
};
