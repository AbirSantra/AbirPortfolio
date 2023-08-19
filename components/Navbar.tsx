"use client";
import Link from "next/link";
import {
  BsFillMoonStarsFill,
  BsGridFill,
  BsFillSunFill,
  BsGrid,
} from "react-icons/bs";
import {
  FaUser,
  FaBriefcase,
  FaUserGraduate,
  FaTools,
  FaPen,
  FaPhoneAlt,
} from "react-icons/fa";
import { HiRocketLaunch } from "react-icons/hi2";
import Logo from "./Logo";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /* Theme Setter */
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

  /* Menu Closer */
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        console.log("Click outside!");
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuOpen]);

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

  /* Menu Toggler */
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  /* Menu List */
  const menuList = [
    { name: "About", icon: <FaUser />, link: "#about" },
    { name: "Experience", icon: <FaBriefcase />, link: "#experience" },
    { name: "Education", icon: <FaUserGraduate />, link: "#education" },
    { name: "Tech Stack", icon: <FaTools />, link: "#techstack" },
    { name: "Projects", icon: <HiRocketLaunch />, link: "#projects" },
    { name: "Blogs", icon: <FaPen />, link: "#blogs" },
    { name: "Contact", icon: <FaPhoneAlt />, link: "#contact" },
  ];

  return (
    <nav className="glassmorph relative z-10 flex h-16 w-full items-center justify-between border-none bg-gray-50/60 p-6 transition-all duration-300 ease-linear dark:bg-gray-950/60">
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
        <button onClick={toggleMenu}>
          {isMenuOpen ? (
            <BsGrid className="animate-spin-once" />
          ) : (
            <BsGridFill className="animate-spin-once" />
          )}
        </button>
      </div>

      {/* Menu */}
      <div
        className={`linear fixed top-20 flex flex-col items-center justify-center gap-6 rounded-lg bg-gray-50 px-4 py-6 text-xl shadow-md duration-150 dark:bg-gray-900 ${
          isMenuOpen ? "left-6 opacity-100" : "-left-5 opacity-0"
        }`}
        onClick={toggleMenu}
        ref={menuRef}
      >
        {menuList.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className="duration-300 ease-in-out hover:text-sky-500"
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
