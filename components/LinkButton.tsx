import Image from "next/image";
import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant: "small" | "large";
};

export const LinkButton = ({ children, href, variant }: Props) => {
  return (
    <Link
      href={href}
      className={`gradient-bg flex w-fit items-center justify-center gap-2  font-medium text-white duration-200 hover:scale-105 ${
        variant === "small"
          ? "rounded-lg px-3 py-2 text-xs"
          : "rounded-xl px-6 py-4 text-sm"
      }}`}
    >
      {children}
    </Link>
  );
};
