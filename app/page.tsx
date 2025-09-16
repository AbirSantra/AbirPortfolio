import HeroSection from "@/components/sections/hero-section";
import { getHeroContent } from "@/lib/hero-data";

export default function Home() {
  const heroContent = getHeroContent();

  return (
    <div className="w-full flex flex-col items-center">
      <HeroSection content={heroContent} />
    </div>
  );
}
