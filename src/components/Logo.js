import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold border-4 border-solid border-transparent dark:border-yellow-500 dark:bg-purple-950"
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          scale: [1, 1.2, 1.2, 1],
          rotate: [0, 360],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        PP
      </MotionLink>
    </div>
  );
};
export default Logo;
