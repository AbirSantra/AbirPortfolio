const Logo = ({
  variant,
  icon,
}: {
  variant: "small" | "large";
  icon?: boolean;
}) => {
  return (
    <div
      className={`flex flex-col font-medium -tracking-wider ${
        variant === "small" ? "text-xl" : "text-4xl"
      }`}
    >
      <div className="flex">
        {icon ? <p className="sm:text-2xl">a</p> : <p>abir</p>}

        <p className="gradient-text sm:text-2xl">.</p>
      </div>
      {variant === "large" && (
        <p className="gradient-text mb-4 text-sm font-medium tracking-tighter">
          Portfolio Website
        </p>
      )}
    </div>
  );
};

export default Logo;
