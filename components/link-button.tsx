import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant: "small" | "large";
};

const LinkButton = ({ children, href, variant }: Props) => {
  return (
    <Link
      href={href}
      className={`gradient-bg flex w-fit items-center justify-center font-semibold text-white active:scale-105 duration-200 transition-all ${
        variant === "small"
          ? "gap-1 rounded-lg px-3 py-2 text-xs"
          : "gap-2 rounded-xl px-6 py-4 text-sm"
      }`}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
