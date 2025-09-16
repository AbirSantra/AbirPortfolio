"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./logo";
import { cn } from "@/lib/utils";
import { adminMenuList, menuList } from "@/lib/menu-items";
import ThemeToggle from "./theme-toggle";
import { usePathname } from "next/navigation";
import LogoutButton from "./logout-button";

const Navbar = () => {
  const pathname = usePathname();
  const isOnAdminRoute = pathname.startsWith("/admin");

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

  return (
    <nav
      className={cn(
        "flex w-fit items-center justify-between gap-6 rounded-full px-6 py-2 transition-all duration-300 ease-linear sm:px-8 sm:py-3 md:gap-12 font-primary",
        hasScrolled && "glassmorph"
      )}
    >
      <Link href="/">
        <Logo variant="small" icon />
      </Link>

      {isOnAdminRoute
        ? adminMenuList.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              aria-label={item.name}
              className="flex flex-col items-center justify-center gap-4"
            >
              <p className="sm:text-lg font-medium text-sm">{item.name}</p>
            </Link>
          ))
        : menuList.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              aria-label={item.name}
              className="flex flex-col items-center justify-center gap-4"
            >
              <p className="sm:text-lg font-medium text-sm">{item.name}</p>
            </Link>
          ))}

      {isOnAdminRoute ? <LogoutButton /> : <ThemeToggle />}
    </nav>
  );
};

export default Navbar;
