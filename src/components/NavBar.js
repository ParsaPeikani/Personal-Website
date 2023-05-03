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
  const links = [
    { href: "/", title: "Home", className: "mr-4" },
    { href: "/about", title: "About", className: "mx-4" },
    { href: "/projects", title: "Projects", className: "mx-4" },
  ];
  const NavLink = ({ href, title, className }) => {
    return <CustomLink href={href} title={title} className={className} />;
  };
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-yellow-400">
      <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <motion.nav className="flex gap-4">
          {links.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: (links.length - index - 1) * 0.3 }}
            >
              <NavLink
                href={link.href}
                title={link.title}
                className={link.className}
              />
            </motion.div>
          ))}
        </motion.nav>
      </motion.nav>

      <motion.nav className="flex items-center justify-center flex-wrap">
        <motion.a
          key="twitter-icon"
          href="https://twitter.com"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, transition: { delay: 0.4 } }}
          animate={{ opacity: 1, transition: { delay: 0.4 } }}
          className="w-8 mx-3"
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          key="github-icon"
          href="https://github.com"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, transition: { delay: 0.6 } }}
          animate={{ opacity: 1, transition: { delay: 0.6 } }}
          className="w-8 mx-3"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          key="linkedin-icon"
          href="https://linkedin.com"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, transition: { delay: 0.8 } }}
          animate={{ opacity: 1, transition: { delay: 0.8 } }}
          className="w-8 mx-3"
        >
          <LinkedInIcon />
        </motion.a>
        <motion.button
          key="mode-button"
          className={`ml-3 flex items-center justify-center rounded-full p-1 w-10 h-10
    ${
      mode === "light"
        ? "bg-yellow-400 text-dark"
        : "bg-purple-400 text-yellow-400"
    }
  `}
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          initial={{ opacity: 0, transition: { delay: 1 } }}
          animate={{ opacity: 1, transition: { delay: 1 } }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          {mode === "dark" ? (
            <SunIcon className={"fill-dark w-6"} />
          ) : (
            <MoonIcon className={"fill-dark w-6"} />
          )}
        </motion.button>
      </motion.nav>

      <motion.div
        className="absolute left-[50%] top-2 translate-x-[-50%]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <Logo />
      </motion.div>
    </header>
  );
};
export default NavBar;
