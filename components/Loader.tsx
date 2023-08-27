import Logo from "./Logo";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="animate-pulse">
        <Logo variant="large" />
      </div>
    </div>
  );
};

export default Loader;
