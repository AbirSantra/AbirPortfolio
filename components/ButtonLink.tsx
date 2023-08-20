import Image from "next/image";
import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
};

export const ButtonLink = ({ children, href }: Props) => {
  return (
    <Link href={href}>
      <button className="gradient-bg flex items-center justify-center gap-2 rounded-2xl px-6 py-4 text-sm font-medium text-white duration-200 ease-in-out hover:scale-105 hover:bg-sky-500  sm:px-8 sm:py-6 sm:text-base">
        {children}
      </button>
    </Link>
  );
};
