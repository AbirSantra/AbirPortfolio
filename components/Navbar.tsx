import Link from "next/link";
import { BsFillMoonStarsFill, BsGridFill } from "react-icons/bs";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="w-full h-16 flex justify-between items-center px-6">
      {/* Logo */}
      <Link href="/">
        <Logo />
      </Link>
      {/* Buttons */}
      <div className="flex justify-center items-center gap-8 text-xl">
        <button className="hover:animate-spin-once">
          <BsFillMoonStarsFill />
        </button>
        <button className="hover:animate-spin-once">
          <BsGridFill />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
