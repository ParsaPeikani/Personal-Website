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
          <AnimatedText
            text="Passion Fuels Purpose! "
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <motion.h2
                className="mb-4 text-xl font-bold uppercase text-dark/75 dark:text-yellow-400/75"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1,
                }}
              >
                Biography
              </motion.h2>
              <motion.p
                className="font-medium text-lg"
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 2,
                }}
              >
                Hello, I&apos;m Parsa Peikani, a self-taught full-stack
                developer and software engineer now in my fourth year of
                studying computer science at the University of Victoria. With
                over two years of self-learning experience, I&apos;m passionate
                about crafting beautiful, functional, and user-centered digital
                experiences.
              </motion.p>
              <motion.p
                className="my-4 font-medium text-lg"
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 2,
                }}
              >
                Currently, I&apos;m enhancing my skills through courses at UVIC,
                focusing on deepening my understanding of data structures and
                algorithms, as well as advancing my system design capabilities.
              </motion.p>
              <motion.p
                className="font-medium text-lg"
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 2,
                }}
              >
                Please visit my website to explore my portfolio of projects. If
                you have any questions or see potential for collaboration,
                I&apos;d love to hear from you. I am always eager to take on new
                challenges and expand my expertise in innovative environments.
              </motion.p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-yellow-400 xl:col-span-4 md:order-1 md:col-span-8">
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
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold hover:animate-rubberBand cursor-pointer hover:text-purple-400 md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={10} />+
                </span>
                <motion.h2
                  className="text-xl font-medium capitalize text-dark/75  dark:text-yellow-400/75
                  xl:text-center md:text-lg sm:text-base xs:text-sm"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 2 }}
                >
                  Languages Known
                </motion.h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold hover:animate-rubberBand hover:text-purple-400 cursor-pointer md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={15} />+
                </span>
                <motion.h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-yellow-400/75
                  xl:text-center md:text-lg sm:text-base xs:text-sm"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 2 }}
                >
                  projects completed
                </motion.h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold hover:animate-rubberBand hover:text-purple-400 cursor-pointer md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={3} />+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-yellow-400/75
                xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
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
