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

  /* Navbar Transparency Setter */
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);
  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScroll);
  }

  /* Menu List */
  const menuList = [
    // { name: "About", icon: <FaUser />, link: "/#about" },
    { name: "Work", icon: <FaBriefcase />, link: "/#experience" },
    { name: "Tech", icon: <FaTools />, link: "/#techstack" },
    { name: "Projects", icon: <HiRocketLaunch />, link: "/#projects" },
    { name: "Blogs", icon: <FaPen />, link: "/#blogs" },
  ];

  return (
    <nav
      className={`${hasScrolled && "glassmorph"} flex w-fit items-center justify-between gap-10 rounded-full px-6 py-4 transition-all duration-200 ease-linear md:gap-12`}
    >
      {/* Logo */}
      <Link href="/">
        <Logo variant="small" />
      </Link>

      {menuList.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          aria-label={item.name}
          className="flex flex-col items-center justify-center gap-4"
        >
          <p className="flex text-xl md:hidden">{item.icon}</p>
          <p className="font-base hidden text-lg md:flex">{item.name}</p>
        </Link>
      ))}

      <button
        onClick={toggleTheme}
        className="text-xl"
        aria-label="Theme Switcher"
      >
        {theme === "dark" ? (
          <BsFillSunFill className="animate-spin-once" />
        ) : (
          <BsFillMoonStarsFill className="animate-spin-once" />
        )}
      </button>

      {/* <div className="flex items-center justify-center gap-8 text-xl">
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
      </div> */}
    </nav>
  );
};

export default Navbar;
