import AnimatedText from "@/components/AnimatedText";
import { motion, Variants } from "framer-motion";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../public/images/projects/project1.png";
import project2 from "../../public/images/projects/project7.jpg";
import project3 from "../../public/images/projects/project3.png";
import project4 from "../../public/images/projects/project4.jpg";
import project5 from "../../public/images/projects/project5.png";
import project6 from "../../public/images/projects/project6.png";
import NavBar from "@/components/NavBar";

const UpcomingProject = ({ type, title, summary, img, link, github }) => {
  return (
    <motion.article
      className="w-full rounded-br-2xl relative flex items-center justify-between 
    rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark
     dark:border-yellow-400 lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl
       dark:bg-yellow-400 xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
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
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 pt-0 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-yellow-400 xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-yellow-400 sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-yellow-400 sm:text-sm">
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
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold hover:animate-pulse dark:bg-yellow-400 dark:text-dark sm:px-4 sm:text-base"
          >
            Coming Soon :)
          </Link>
        </div>
      </div>
    </motion.article>
  );
};
// Featured Project
const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <motion.article
      className="w-full rounded-br-2xl relative flex items-center 
    justify-between rounded-3xl border border-solid border-dark bg-light
     shadow-2xl p-12 dark:bg-dark dark:border-yellow-400 lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem]
       bg-dark rounded-br-3xl dark:bg-yellow-400 xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
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
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 pt-0 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-yellow-400 xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-yellow-400 sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-yellow-400 sm:text-sm">
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
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg 
            font-semibold hover:animate-pulse dark:bg-yellow-400 dark:text-dark
            sm:px-4 sm:text-base"
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
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid
     border-dark bg-light p-6 relative dark:bg-dark dark:border-yellow-400 xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem]
       bg-dark rounded-br-3xl dark:bg-yellow-400 md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span
          className="text-primary font-medium text-xl dark:text-yellow-400
        lg:text-lg md:text-base"
        >
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 md:w-6"
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
      <main className="w-full flex flex-col items-center justify-center dark:text-yellow-400">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 dark:text-yellow-400 2xl:!text-7xl sm:mb-8 sm:text-4xl xs:text-2xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            {/* <motion.div
              className="col-span-12"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.1 }}
              variants={top2Variant}
            >
              <UpcomingProject
                title="BudgetGraph Pro"
                img={project2}
                summary=""
                link="/"
                type="Solo Project"
                github="/"
              />
            </motion.div> */}
            <motion.div
              className="col-span-12"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.1 }}
              variants={top1Variant}
            >
              <FeaturedProject
                title="Budget Pro AI"
                img={project2}
                summary="Technologies used: Next.js 14, React, PLAID API, Clerk, ShadcnUI, MongoDB Developed a budget tracking app with Next.js 14 and React, integrating PLAID and Wealthsimple APIs for real‑time financial data synchronization from CIBC and TD bank accounts. Employed ShadCN UI for a responsive, modern user interface. Implemented dynamic financial visualization using NIVO charts on the dashboard to display and analyze spending patterns and budget adherence, enhancing user decision‑making. Created a transaction management page that allows sorting, editing, and detailed viewing of transactions via PLAID API webhooks, improving user engagement and transaction tracking accuracy."
                link="https://www.youtube.com/watch?v=nJhYPSSRF48"
                type="Solo Project"
                github="https://github.com/ParsaPeikani/BudgetBuddy-Tracker"
              />
            </motion.div>
            <motion.div
              className="col-span-12"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.1 }}
              variants={top2Variant}
            >
              <FeaturedProject
                title="AI-Verse"
                img={project1}
                summary="Created and launched an innovative and versatile full-stack Software-as-a-Service (SaaS) platform featuring five cutting-edge AI tools: image, video, music, and code generation utilizing ChatGPT and Replicate AI. Designed with a seamless user experience, the platform offers both a free tier and a premium monthly subscription option, streamlined through Stripe for secure payments. Employed Clerk for authentication and Prisma for data management, while crafting the app with the latest Next.js 13 and React technologies. Additionally, integrated Crisp for responsive customer support."
                link="https://ai-verse-liard.vercel.app/"
                type="Solo Project"
                github="https://github.com/ParsaPeikani/AI-saas"
              />
            </motion.div>
            <motion.div
              className="col-span-12"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.1 }}
              variants={top1Variant}
            >
              <FeaturedProject
                title="Notes Website"
                img={project3}
                summary="Designed and launched a dynamic To-Do list web application, 
                skillfully employing front-end technologies like HTML, CSS, and JavaScript, 
                along with React.js and Remix for an interactive user interface. The app allows 
                seamless task management with due dates. Robust security measures were integrated 
                for user data confidentiality. Back-end technologies MongoDB and Prisma enabled 
                effortless note creation, editing, and deletion. Demonstrates adeptness in full-stack 
                web development, blending diverse technologies for a user-centric solution."
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
                variants={top2Variant}
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
              className="col-span-6 sm:col-span-12"
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
              className="col-span-6 sm:col-span-12"
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
