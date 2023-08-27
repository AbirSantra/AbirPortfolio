import React from "react";
import Logo from "./Logo";
import { Socials } from "./Socials";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      className="bg-white shadow-xl duration-200 dark:bg-neutral-950"
      id="contact"
    >
      <div className="mx-auto flex w-full max-w-[1140px] flex-col-reverse justify-between gap-16 px-4 py-16 sm:px-8 md:flex-row lg:px-16">
        <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
          <Logo variant="large" />
          <Socials />
        </div>
        <div className="flex flex-col items-center justify-center gap-2  md:items-end md:justify-start">
          <p className="text-3xl font-bold">Lets work together!</p>
          <p className="text-neutral-500">
            Have a project for me? Hit me up at
          </p>
          <Link
            href="mailto:santraabir8@gmail.com"
            className="gradient-text font-semibold"
          >
            santraabir8@gmail.com
          </Link>
        </div>
      </div>
      <div className="border-t-[1px] border-neutral-200 dark:border-neutral-700"></div>
      <div className="mx-auto flex w-full max-w-[1140px] items-center justify-center px-4 py-4 text-center text-xs text-neutral-500 sm:px-8 md:text-sm lg:px-16">
        Handcrafted by Abir Santra © {new Date().getFullYear()} using NextJS,
        TailwindCSS & Sanity CMS
      </div>
    </div>
  );
};

export default Footer;
