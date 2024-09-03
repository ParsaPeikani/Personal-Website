import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold
       bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute
        dark:text-dark dark:bg-yellow-400
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
        xs:text-dark xs:dark:text-yellow-400 xs:font-bold"
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
        className="text-dark dark:text-yellow-400 text-center text-8xl font-bold pt-40 md:text-6xl md:mt-32"
      />
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full
       bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
       lg:bg-circularLightLg lg:dark:bg-circularDarkLg
       md:bg-circularLightMd md:dark:bg-circularDarkMd
       sm:bg-circularLightSm sm:dark:bg-circularDarkSm"
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold
          bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark
          dark:bg-yellow-400 lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="JavaScript" x="5vw" y="-6vw" />
        <Skill name="HTML" x="8vw" y="3vw" />
        <Skill name="CSS" x="-8vw" y="-3vw" />
        <Skill name="React" x="10vw" y="10vw" />
        <Skill name="TypeScript" x="-10vw" y="-10vw" />
        <Skill name="C#" x="14vw" y="0vw" />
        <Skill name="NextJS" x="-14vw" y="0vw" />
        <Skill name="Node.js" x="0vw" y="14vw" />
        <Skill name="Git" x="0vw" y="-14vw" />
        <Skill name="ASP.NET" x="10vw" y="-10vw" />
        <Skill name="Azure" x="-10vw" y="10vw" />
        <Skill name="SQL" x="12vw" y="-6vw" />
        <Skill name="MongoDB" x="-12vw" y="6vw" />
        <Skill name="GitHub" x="18vw" y="8vw" />
        <Skill name="GitLab" x="-18vw" y="-8vw" />
        <Skill name="AWS" x="20vw" y="-12vw" />
        <Skill name="PostgreSQL" x="-20vw" y="12vw" />
        <Skill name="Linux/UNIX" x="16vw" y="16vw" />
        <Skill name="Docker" x="-16vw" y="-16vw" />
        <Skill name="Python" x="18vw" y="20vw" />
        <Skill name="Sass" x="-18vw" y="-20vw" />
        <Skill name="Java" x="22vw" y="2vw" />
        <Skill name="TailwindCSS" x="-22vw" y="-2vw" />
        <Skill name="AngularJS" x="24vw" y="14vw" />
        <Skill name="Redux" x="-24vw" y="-14vw" />
        <Skill name="Remix" x="26vw" y="-10vw" />
        <Skill name="Firebase" x="-26vw" y="10vw" />
        <Skill name="Prisma" x="28vw" y="-6vw" />
        <Skill name="LaTeX" x="-28vw" y="6vw" />
        <Skill name="C" x="30vw" y="18vw" />
        <Skill name="C++" x="-30vw" y="-18vw" />
      </div>
    </>
  );
};
export default Skills;
