import { motion, useScroll } from "framer-motion";
import AnimatedText from "./AnimatedText";
import { useRef } from "react";
import LiIcon from "./LiIcon";
import { FaCircle } from "react-icons/fa";

const Details = ({ type, time, place, infos }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-yellow-400/75 xs:text-sm">
          {time} | {place}
        </span>
        {infos.map((info) => (
          <div className="flex mt-4" key={info}>
            <FaCircle className="text-xs mr-2 mt-2" />
            <p className="font-medium w-full md:text-sm">{info}</p>
          </div>
        ))}
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <AnimatedText
        text="Education"
        className="text-dark dark:text-yellow-400 text-center text-8xl font-bold pb-32 md:text-6xl xs:text-4xl md:-mb-14"
      />
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-yellow-400 "
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2 sm:pl-4 xs:pl-8">
          <Details
            type="Computer Science Honours"
            time="2022 May - Present"
            place="University of Victoria (UVIC)"
            infos={[
              "Bachelor of Science",
              "Fourth year student",
              "Expected graduation in September 2027",
            ]}
          />
          <Details
            type="Biochemisty"
            time="2020 Sep - 2022 Apr"
            place="University of Victoria (UVIC)"
            infos={[
              "Bachelor of Science",
              "2022 Dean's List",
              "20,000 Excellent renewable entrance scholarship",
            ]}
          />
        </ul>
      </div>
    </div>
  );
};
export default Education;
