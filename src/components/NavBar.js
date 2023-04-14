import Link from "next/link";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
      </nav>
      <Logo />
      <nav>
        <Link href="/" targe={"_blank"}>
          T
        </Link>
        <Link href="/" targe={"_blank"}>
          T
        </Link>
        <Link href="/" targe={"_blank"}>
          T
        </Link>
        <Link href="/" targe={"_blank"}>
          T
        </Link>
        <Link href="/" targe={"_blank"}>
          T
        </Link>
        <Link href="/" targe={"_blank"}>
          T
        </Link>
      </nav>
    </header>
  );
};
export default NavBar;
