import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-yellow-400"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <AnimatedText
        text="Skills"
        className="text-yellow-400 text-center text-8xl font-bold pb-10 pt-40"
      />
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-yellow-400"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-16vw" y="13vw" />
        <Skill name="CSS" x="-12vw" y="-9vw" />
        <Skill name="Javascript" x="17vw" y="6vw" />
        <Skill name="ReactJS" x="4vw" y="-12vw" />
        <Skill name="C" x="-21vw" y="-15vw" />
        <Skill name="NextJS" x="12vw" y="-4vw" />
        <Skill name="Git" x="33vw" y="0vw" />
        <Skill name="Typescript" x="0vw" y="-20vw" />
        <Skill name="Firebase" x="-30vw" y="8vw" />
        <Skill name="Java" x="-1vw" y="12vw" />
        <Skill name="Python" x="-12vw" y="3vw" />
        <Skill name="Remix" x="-26vw" y="-4vw" />
        <Skill name="prisma" x="14vw" y="18vw" />
        <Skill name="Tailwind css" x="20vw" y="-10vw" />
        <Skill name="MongoDB" x="-13vw" y="23vw" />
        <Skill name="Sass" x="17vw" y="-21vw" />
      </div>
    </>
  );
};
export default Skills;
