"use client";
import Link from "next/link";
import { BsFillMoonStarsFill, BsGridFill, BsFillSunFill } from "react-icons/bs";
import Logo from "./Logo";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState<string | null>("dark");
  console.log(theme);

  /* Theme Setter */
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      if (localTheme === "light") {
        document.documentElement.classList.remove("dark");
        setTheme("light");
      } else if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
        setTheme("dark");
      }
    } else if (
      !localTheme &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  }, []);

  /* Theme switcher */
  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  return (
    <nav className="flex h-16 w-full items-center justify-between px-6">
      {/* Logo */}
      <Link href="/">
        <Logo />
      </Link>
      {/* Buttons */}
      <div className="flex items-center justify-center gap-8 text-xl">
        <button onClick={toggleTheme}>
          {theme === "dark" ? (
            <BsFillSunFill className="animate-spin-once" />
          ) : (
            <BsFillMoonStarsFill className="animate-spin-once" />
          )}
        </button>
        <button className="hover:animate-spin-once">
          <BsGridFill />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
