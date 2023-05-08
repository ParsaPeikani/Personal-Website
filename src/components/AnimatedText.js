import { color, motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({ text, className = "" }) => {
  const [mode, setMode] = useThemeSwitcher();
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center over-flow-hidden sm:py-0">
      <motion.h1
        className={`inline-block w-full font-bold capitalize text-8xl ${className}`}
        variants={quote}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={word + "-" + index}
            className={`inline-block cursor-pointer hover:animate-rubberBand ${
              mode === "light"
                ? "hover:text-purple-400"
                : "hover:text-purple-400"
            }`}
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};
export default AnimatedText;
