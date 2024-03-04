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
import { Tooltip } from "./Tooltip";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Navbar = () => {
  const [theme, setTheme] = useState<string | null>(null);

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
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
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

  /* Menu List */
  const menuList = [
    { name: "About", icon: <FaUser />, link: "/#about" },
    { name: "Experience", icon: <FaBriefcase />, link: "/#experience" },
    { name: "Tech Stack", icon: <FaTools />, link: "/#techstack" },
    { name: "Projects", icon: <HiRocketLaunch />, link: "/#projects" },
    { name: "Blogs", icon: <FaPen />, link: "/#blogs" },
    { name: "Contact", icon: <FaPhoneAlt />, link: "/#contact" },
  ];

  return (
    <nav className="glassmorph flex h-16 w-full items-center justify-between border-none bg-neutral-50/60 p-6 transition-all duration-200 ease-linear dark:bg-neutral-900/60">
      {/* Logo */}
      <Link href="/">
        <Logo variant="small" />
      </Link>
      {/* Buttons */}
      <div className="flex items-center justify-center gap-8 text-xl">
        <button onClick={toggleTheme} aria-label="Theme Switcher">
          {theme === "dark" ? (
            <BsFillSunFill className="animate-spin-once" />
          ) : (
            <BsFillMoonStarsFill className="animate-spin-once" />
          )}
        </button>
        <Dialog>
          <DialogTrigger asChild>
            <button aria-label="Toggle Menubar">
              <BsGridFill className="hover:animate-spin-once" />
            </button>
          </DialogTrigger>
          <DialogContent className="border-neutral-900 bg-neutral-50 dark:bg-neutral-900">
            <DialogHeader>
              <DialogTitle className="text-left">
                <Logo variant="large" />
              </DialogTitle>
            </DialogHeader>
            <div className="grid w-full grid-cols-3 grid-rows-2 gap-2">
              {menuList.map((item, index) => (
                <DialogClose
                  key={index}
                  className="flex aspect-square items-center justify-center rounded-md border duration-200 ease-in-out hover:border-sky-500 hover:text-sky-500 dark:border-neutral-800"
                  asChild
                >
                  <Link
                    href={item.link}
                    aria-label={item.name}
                    className="flex flex-col items-center justify-center gap-4 text-2xl"
                  >
                    <p>{item.icon}</p>
                    <p className="text-xs">{item.name}</p>
                  </Link>
                </DialogClose>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </nav>
  );
};

export default Navbar;
