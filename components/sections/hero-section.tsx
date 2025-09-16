"use client";

import Image from "next/image";
import LightRays from "../backgrounds/light-rays";
import { useTheme } from "next-themes";
import { HeroContent } from "@/lib/hero-data";

interface HeroSectionProps {
  content: HeroContent;
}

const HeroSection = ({ content }: HeroSectionProps) => {
  const { theme } = useTheme();
  const isLightMode = theme === "light";

  return (
    <div className="h-dvh flex w-full justify-center items-center text-center p-6 py-28 flex-col gap-8 max-w-2xl">
      <div className="overflow-hidden rounded-full size-30 sm:size-40">
        <Image
          src={"/images/abir-gemini-2.png"}
          alt="Abir Santra - Software Engineer"
          width={256}
          height={256}
          className="w-full h-full object-cover"
          priority
        />
      </div>

      <h1 className="text-5xl sm:text-6xl flex flex-col font-extrabold font-primary">
        <span>{content.headline1}</span>
        <span>{content.headline2}</span>
      </h1>

      <p className="text-muted-foreground font-secondary text-base sm:text-xl">
        {content.description}
      </p>

      {!isLightMode ? (
        <div className="absolute inset-0 w-full -z-10 flex justify-center items-center">
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={0.5}
            lightSpread={0.2}
            rayLength={2}
            followMouse={false}
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
            className="custom-rays"
          />
        </div>
      ) : null}
    </div>
  );
};
export default HeroSection;
