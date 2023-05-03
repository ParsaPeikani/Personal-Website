import Link from "next/link";
import { motion } from "framer-motion";
import { CircularText } from "./Icons";

const HireMe = () => {
  return (
    <motion.div
      className="fixed right-4 bottom-4 flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0, rotate: 360 }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      <div className="w-48 h-auto flex items-center justify-center relative">
        <CircularText
          className={"fill-dark animate-spin-slow dark:fill-yellow-400"}
        />
        <Link
          href="mailto:parsapeikani05@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
           bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold
            hover:bg-light hover:text-dark hover:dark:bg-dark hover:dark:border-yellow-400 dark:bg-yellow-400
             dark:text-dark hover:dark:text-yellow-400"
        >
          Hire Me
        </Link>
      </div>
    </motion.div>
  );
};
export default HireMe;
