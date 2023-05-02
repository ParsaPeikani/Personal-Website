import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "./Logo";
import {
  TwitterIcon,
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  SunIcon,
  MoonIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group text-xl`}>
      {title}

      <span
        className={`
        h-[2px] inline-block bg-dark
        absolute left-0 -bottom-0.5 group-hover:w-full 
        transition-[width] ease duration-300
        ${router.asPath === href ? "w-full" : "w-0"}
        dark:bg-yellow-400`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-yellow-400">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href="https://twitter.com"
          targe={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-8 mx-3"
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="https://twitter.com"
          targe={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-8 mx-3"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://twitter.com"
          targe={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-8 mx-3"
        >
          <LinkedInIcon />
        </motion.a>

        <button
          className={`ml-3 flex items-center justify-center rounded-full p-1 w-12 h-12
          ${
            mode === "light"
              ? "bg-yellow-400 text-dark"
              : "bg-purple-400 text-yellow-400"
          }
          `}
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
        >
          {mode === "dark" ? (
            <SunIcon className={"fill-dark w-6"} />
          ) : (
            <MoonIcon className={"fill-dark w-6"} />
          )}
        </button>
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};
export default NavBar;
