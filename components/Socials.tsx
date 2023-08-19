import LinkedinIcon from "../public/images/linkedin-icon.svg";
import GithubIcon from "../public/images/github-icon.svg";
import TwitterIcon from "../public/images/twitter-icon.svg";
import InstagramIcon from "../public/images/instagram-icon.svg";
import HashnodeIcon from "../public/images/hashnode-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { Tooltip } from "./Tooltip";

export const Socials = () => {
  const socialsList = [
    {
      name: "Linkedin",
      icon: LinkedinIcon,
      link: "https://www.linkedin.com/in/abirsantra",
    },
    {
      name: "Github",
      icon: GithubIcon,
      link: "https://github.com/AbirSantra",
    },
    {
      name: "Hashnode",
      icon: HashnodeIcon,
      link: "https://abirsantra.hashnode.dev",
    },
    {
      name: "Twitter",
      icon: TwitterIcon,
      link: "https://twitter.com/the_codefreak",
    },
    {
      name: "Instagram",
      icon: InstagramIcon,
      link: "https://www.instagram.com/thecodefreak",
    },
  ];
  return (
    <div className="flex items-center justify-center gap-4 sm:gap-6">
      {socialsList.map((social, index) => {
        return (
          <Link key={index} href={social.link} target="_blank">
            <Tooltip text={social.name} direction="bottom">
              <Image src={social.icon} alt={social.name} className="w-8" />
            </Tooltip>
          </Link>
        );
      })}
    </div>
  );
};
