import AnimatedText from "@/components/AnimatedText";
import { motion, Variants } from "framer-motion";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import NavBar from "@/components/NavBar";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <motion.article className="w-full rounded-br-2xl relative flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 pt-0">
        <span className="text-primary font-medium text-xl ">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link
            href={github}
            target="_blank"
            className="w-10 transition-transform duration-300 transform hover:scale-125"
          >
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold hover:animate-pulse"
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
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl ">{type}</span>
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
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                variants={top1Variant}
              >
                <div className="col-span-12">
                  <FeaturedProject
                    title="Crypto Screener Application"
                    img={project1}
                    summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                    link="/"
                    type="Featured Project"
                    github="/"
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
                title="Crypto Screener Application"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/"
                type="Featured Project"
                github="/"
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
                title="Crypto Screener Application"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                    It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                    local currency."
                link="/"
                type="Featured Project"
                github="/"
              />
            </motion.div>
            <motion.div
              className="col-span-12"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={top2Variant}
            >
              <FeaturedProject
                title="Crypto Screener Application"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                link="/"
                type="Featured Project"
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
                title="Crypto Screener Application"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency."
                link="/"
                type="Featured Project"
                github="/"
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
                title="Crypto Screener Application"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency."
                link="/"
                type="Featured Project"
                github="/"
              />
            </motion.div>
          </div>
        </Layout>
      </main>
    </>
  );
};
export default projects;
