"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Logo from "./logo";
import { cn } from "@/lib/utils";
import { menuList } from "@/lib/menu-items";
import ThemeToggle from "./theme-toggle";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const isOnAdminRoute = pathname.startsWith("/admin");
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (isOnAdminRoute) return null;

  return (
    <header className="sticky top-6 inset-x-0 z-50 flex justify-center items-center">
      <nav
        className={cn(
          "flex w-fit items-center justify-between gap-6 rounded-full px-6 py-2 transition-all duration-300 ease-in-out sm:px-8 sm:py-3 md:gap-12 font-primary border-[1px] border-transparent",
          hasScrolled && "glassmorph"
        )}
      >
        <Link href="/">
          <Logo variant="small" icon />
        </Link>

        {menuList.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            aria-label={item.name}
            className="flex flex-col items-center justify-center gap-4"
          >
            <p className="sm:text-lg font-medium text-sm">{item.name}</p>
          </Link>
        ))}

        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Navbar;
