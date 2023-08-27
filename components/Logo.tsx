const Logo = ({ variant }: { variant: "small" | "large" }) => {
  return (
    <div
      className={`flex flex-col font-medium -tracking-wider ${
        variant === "small" ? "text-xl" : "text-4xl"
      }`}
    >
      <div className="flex">
        <p>abir</p>
        <p className="gradient-text">._</p>
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
