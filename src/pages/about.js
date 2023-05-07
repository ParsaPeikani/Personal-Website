import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import profilePic from "../../public/images/profile/parsa.jpg";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import NavBar from "@/components/NavBar";
import Contact from "@/components/Footer";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Parsa Peikani | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <NavBar />
      <main className="flex w-full flex-col items-center justify-center dark:text-yellow-400">
        <Layout className="pt-16">
          <AnimatedText text="Passion Fuels Purpose! " className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <motion.h2
                className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-yellow-400/75"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1,
                }}
              >
                Biography
              </motion.h2>
              <motion.p
                className="font-medium"
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 2,
                }}
              >
                Hello, I'm Parsa Peikani, a self-taught web developer and
                experienced backend designer who is currently in their second
                year of studying computer science at the University of Victoria.
                I am passionate about creating beautiful, functional, and
                user-centered digital experiences, and have been self-learning
                web development and React for over a year now.
              </motion.p>
              <motion.p
                className="my-4 font-medium"
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 2,
                }}
              >
                I am currently focused on building a full-stack project, a
                messenger clone, that showcases my skills and expertise in
                creating high-performance, reliable, and secure web
                applications.
              </motion.p>
              <motion.p
                className="font-medium"
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 2,
                }}
              >
                Please take a look at my website to see some of my previous
                projects, and don't hesitate to get in touch if you have any
                questions or opportunities you'd like to discuss. I'm always
                excited to collaborate on new projects and expand my skillset.
              </motion.p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-yellow-400">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-yellow-400" />
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 2,
                }}
              >
                <Image
                  src={profilePic}
                  alt="Parsa Peikani"
                  className="w-full h-auto rounded-2xl"
                  priority={true}
                  sizes="(max-width: 868px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
                />
              </motion.div>
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold hover:animate-rubberBand cursor-pointer hover:text-purple-400">
                  <AnimatedNumbers value={5} />+
                </span>
                <motion.h2
                  className="text-xl font-medium capitalize text-dark/75  dark:text-yellow-400/75"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 2 }}
                >
                  Languages Known
                </motion.h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold hover:animate-rubberBand hover:text-purple-400 cursor-pointer">
                  <AnimatedNumbers value={10} />+
                </span>
                <motion.h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-yellow-400/75"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 2 }}
                >
                  projects completed
                </motion.h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold hover:animate-rubberBand hover:text-purple-400 cursor-pointer">
                  <AnimatedNumbers value={2} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-yellow-400/75">
                  years of CS experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
      <Contact />
    </>
  );
};
export default about;
