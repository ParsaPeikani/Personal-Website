import { motion } from "framer-motion";

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
      <motion.h2
        className="font-bold text-8xl mt-64 w-full text-center hover:animate-rubberBand cursor-pointer hover:text-purple-400"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-yellow-400"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-25vw" y="3vw" />
        <Skill name="CSS" x="-6vw" y="-11vw" />
        <Skill name="Javascript" x="17vw" y="6vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="NextJS" x="-20vw" y="-15vw" />
        <Skill name="GatsbyJS" x="16vw" y="-12vw" />
        <Skill name="Web Design" x="32vw" y="-5vw" />
        <Skill name="Figma" x="0vw" y="-20vw" />
        <Skill name="Firebase" x="-25vw" y="18vw" />
        <Skill name="Java" x="-14vw" y="8vw" />
        <Skill name="Python" x="-13vw" y="-1vw" />
        <Skill name="Remix" x="-33vw" y="-2vw" />
        <Skill name="Git" x="10vw" y="-5vw" />
        <Skill name="prisma" x="14vw" y="18vw" />
      </div>
    </>
  );
};
export default Skills;
