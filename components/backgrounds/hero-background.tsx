"use client";

import { useTheme } from "next-themes";
import LightRays from "../backgrounds/light-rays";

const HeroBackground = () => {
  const { theme } = useTheme();
  const isLightMode = theme === "light";

  if (isLightMode) return null;

  return (
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
  );
};

export default HeroBackground;
