import Image from "next/image";
import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant: "small" | "large";
  hover?: boolean;
};

export const LinkButton = ({ children, href, variant, hover }: Props) => {
  return (
    <Link
      href={href}
      className={`gradient-bg flex w-fit items-center justify-center   font-medium text-white duration-200 ${
        hover && "hover:scale-105"
      } ${
        variant === "small"
          ? "gap-1 rounded-lg px-3 py-2 text-xs"
          : "gap-2 rounded-xl px-6 py-4 text-sm"
      }`}
    >
      {children}
    </Link>
  );
};
