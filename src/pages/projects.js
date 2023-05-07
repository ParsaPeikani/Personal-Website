import AnimatedText from "@/components/AnimatedText";
import { motion, Variants } from "framer-motion";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../public/images/projects/project1.jpg";
import project2 from "../../public/images/projects/project2.jpg";
import project3 from "../../public/images/projects/project3.png";
import project4 from "../../public/images/projects/project4.jpg";
import project5 from "../../public/images/projects/project5.png";
import project6 from "../../public/images/projects/project6.png";
import NavBar from "@/components/NavBar";

const UpcomingProject = ({ type, title, summary, img, link, github }) => {
  return (
    <motion.article className="w-full rounded-br-2xl relative flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-yellow-400">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-yellow-400" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority={true}
          sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 pt-0">
        <span className="text-primary font-medium text-xl dark:text-yellow-400">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-yellow-400">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-yellow-400">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link
            href={github}
            target="_blank"
            className="w-10 transition-transform duration-300 transform hover:scale-125"
          >
            <GithubIcon className="dark:text-yellow-400" />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold hover:animate-pulse dark:bg-yellow-400 dark:text-dark"
          >
            Coming soon :)
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <motion.article className="w-full rounded-br-2xl relative flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-yellow-400">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-yellow-400" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority={true}
          sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 pt-0">
        <span className="text-primary font-medium text-xl dark:text-yellow-400">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-yellow-400">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-yellow-400">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link
            href={github}
            target="_blank"
            className="w-10 transition-transform duration-300 transform hover:scale-125"
          >
            <GithubIcon className="dark:text-yellow-400" />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold hover:animate-pulse dark:bg-yellow-400 dark:text-dark"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-yellow-400">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-yellow-400" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-yellow-400">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline"
          >
            Visit
          </Link>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10"
          >
            <Link href={github} target="_blank">
              <GithubIcon />
            </Link>
          </motion.div>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  const leftVariant = {
    offscreen: {
      x: -300,
      opacity: 0,
      rotate: -10,
    },
    onscreen: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.5,
      },
    },
  };
  const rightVariant = {
    offscreen: {
      x: 300,
      opacity: 0,
      rotate: 10,
    },
    onscreen: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.5,
      },
    },
  };
  const top1Variant = {
    offscreen: {
      y: 300,
      opacity: 0,
      rotate: -10,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.5,
      },
    },
  };
  const top2Variant = {
    offscreen: {
      y: 300,
      opacity: 0,
      rotate: 10,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.5,
      },
    },
  };
  return (
    <>
      <Head>
        <title>Parsa Peikani | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <NavBar />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-yellow-400">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 dark:text-yellow-400"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <motion.div
              className="col-span-12"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.1 }}
              variants={top2Variant}
            >
              <UpcomingProject
                title="Messenger Clone"
                img={project1}
                summary="Built with Tailwind CSS, Next.js 13, Prisma, MongoDB, 
                React, and Pusher, this messenger clone project lets users chat 
                in real-time with friends and colleagues. Featuring a sleek and 
                modern design, the app supports both one-on-one and group 
                conversations, and users can easily send messages, images, and emojis. Prisma and MongoDB are used for efficient data management, while Pusher enables seamless real-time communication between users."
                link="/"
                type="Solo Project"
                github="/"
              />
            </motion.div>
            <motion.div
              className="col-span-6"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={leftVariant}
            >
              <Project
                title="Magic Spider"
                img={project2}
                summary=""
                link="https://lucky-naiad-ee9f95.netlify.app/"
                type="Solo Project"
                github="https://github.com/Weekendend/Face_Recognition_Brain"
              />
            </motion.div>
            <motion.div
              className="col-span-6"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={rightVariant}
            >
              <Project
                title="Notes Website"
                img={project3}
                summary=""
                link="https://steady-mandazi-1a4a9a.netlify.app/"
                type="Featured Project"
                github="https://github.com/Weekendend/remix-To-Do-List"
              />
            </motion.div>
            <div className="col-span-12">
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.1 }}
                variants={top1Variant}
              >
                <div className="col-span-12">
                  <FeaturedProject
                    title="Sports Shop Online Website"
                    img={project4}
                    summary="Built with HTML, Sass, JavaScript, 
                React.js, and Firebase, this sportswear website 
                features intuitive navigation, multiple product 
                categories, and a secure checkout process. 
                Utilizing Redux and Stripe API, the site delivers a 
                seamless shopping experience with efficient data storage 
                and secure online payments."
                    link="https://jade-valkyrie-9b0f5a.netlify.app"
                    type="Solo Project"
                    github="https://github.com/ParsaPeikani/E-commerce-Project"
                  />
                </div>
              </motion.div>
            </div>
            <motion.div
              className="col-span-6"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={leftVariant}
            >
              <Project
                title="2D SeaSavior Game"
                img={project5}
                summary=""
                link="https://visionary-snickerdoodle-039f3a.netlify.app/"
                type="Solo Project"
                github="https://github.com/Weekendend/2D-Game-JavaScript"
              />
            </motion.div>
            <motion.div
              className="col-span-6"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={rightVariant}
            >
              <Project
                title="Chess"
                img={project6}
                summary=""
                link="https://www.youtube.com/watch?v=3HL7d-s5VCI"
                type="Group Project"
                github="https://github.com/shadizx/ChessPython"
              />
            </motion.div>
          </div>
        </Layout>
      </main>
    </>
  );
};
export default projects;
