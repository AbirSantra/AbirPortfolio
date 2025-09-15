"use client";

import Image from "next/image";
import LightRays from "../backgrounds/light-rays";
import { useTheme } from "next-themes";

const HeroSection = () => {
  const { theme } = useTheme();
  const isLightMode = theme === "light";

  return (
    <div className="h-dvh flex w-full justify-center items-center text-center p-6 py-28 flex-col gap-8 max-w-2xl">
      <div className="overflow-hidden rounded-full size-30 sm:size-40">
        <Image
          src={"/images/abir-gemini-2.png"}
          alt="Avatar"
          width={80}
          height={80}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full flex flex-col gap-0 text-5xl sm:text-6xl font-extrabold">
        <p>Hi, I&#39;m Abir</p>
        <p>Developer & Designer</p>
      </div>

      <p className="text-muted-foreground font-secondary text-base sm:text-xl">
        I ship fast, write clean code, and deliver solutions that scale. Ready
        to build the next big thing!
      </p>

      {/* {!isLightMode ? (
        <div className="absolute inset-0 w-full -z-10 flex justify-center items-center">
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={0.5}
            lightSpread={0.4}
            rayLength={2}
            followMouse={false}
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
            className="custom-rays"
          />
        </div>
      ) : null} */}
    </div>
  );
};
export default HeroSection;
