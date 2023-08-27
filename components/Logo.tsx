const Logo = ({ variant }: { variant: "small" | "large" }) => {
  return (
    <div
      className={`flex font-medium -tracking-wider ${
        variant === "small" ? "text-xl" : "text-4xl"
      }`}
    >
      <p>abir</p>
      <p className="gradient-text">._</p>
    </div>
  );
};

export default Logo;
