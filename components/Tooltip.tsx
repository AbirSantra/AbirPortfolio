type Props = {
  children: React.ReactNode;
  text: string;
  direction: "top" | "bottom" | "left" | "right";
};

export const Tooltip = ({ children, text, direction }: Props) => {
  return (
    <div className="group relative inline-block">
      {children}
      <p
        className={`invisible absolute whitespace-nowrap rounded-md bg-white p-2 text-xs text-neutral-950 opacity-0 shadow-sm duration-100 ease-linear group-hover:visible group-hover:opacity-100 dark:bg-neutral-800 dark:text-white ${
          direction === "bottom" && "left-1/2 top-full mt-2 -translate-x-1/2"
        } ${
          direction === "right" && "left-full top-1/2 ml-6 -translate-y-1/2"
        } ${
          direction === "left" && "right-full top-1/2 mr-4 -translate-y-1/2"
        } ${
          direction === "top" && "bottom-full left-1/2 mb-2 -translate-x-1/2"
        }`}
      >
        {text}
      </p>
    </div>
  );
};
