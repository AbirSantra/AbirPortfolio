import { socialLinks } from "@/lib/social-links";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import Image from "next/image";

const Socials = () => {
  return (
    <div className="flex items-center justify-center gap-8">
      {socialLinks.map((social, index) => {
        return (
          <Link key={index} href={social.link} target="_blank">
            <Tooltip>
              <TooltipTrigger>
                <div className="size-8 shrink-0 hover:cursor-pointer">
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={64}
                    height={64}
                    className="h-full w-full object-contain"
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent>{social.name}</TooltipContent>
            </Tooltip>
          </Link>
        );
      })}
    </div>
  );
};
export default Socials;
