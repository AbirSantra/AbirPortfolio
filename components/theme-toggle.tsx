"use client";

import { MoonStarIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="hover:cursor-pointer"
      aria-label="theme switcher"
    >
      {theme === "light" ? (
        <MoonStarIcon className="size-5 animate-spin-once" />
      ) : (
        <SunIcon className="size-5 animate-spin-once" />
      )}
    </button>
  );
};
export default ThemeToggle;
