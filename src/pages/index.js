import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/hacker.gif";
import AnimatedText from "@/components/AnimatedText";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import NavBar from "@/components/NavBar";

export default function Home() {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLogo(false);
    }, 3000);
  }, []);

  const [showNavBar, setShowNavBar] = useState(false);

  // After three seconds, show the NavBar
  setTimeout(() => {
    setShowNavBar(true);
  }, 3000);

  return (
    <>
      <Head>
        <title>Personal Website :)</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      {showNavBar && <NavBar />}
      <main className="flex items-center text-dark w-full min-h-screen dark:text-yellow-400">
        {showLogo ? (
          <div>
            <svg
              fill="#6B3A99"
              width="200px"
              height="200px"
              viewBox="0 0 56 56"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <motion.path
                initial={{ pathLength: 0, pathOffset: 1 }}
                animate={{ pathLength: 1, pathOffset: 0 }}
                transition={{ duration: 3, ease: "easeInOut" }}
                d="M 7.5860 42.9414 L 23.8516 52.1758 C 26.6407 53.7695 29.3126 53.7930 32.1485 52.1758 L 48.4141 42.9414 C 50.5938 41.6992 51.7890 40.4336 51.7890 37.0352 L 51.7890 18.8008 C 51.7890 15.4961 50.5703 14.3008 48.5783 13.1523 L 32.2657 3.8711 C 29.3595 2.2070 26.5704 2.2305 23.7344 3.8711 L 7.4219 13.1523 C 5.4297 14.3008 4.2110 15.4961 4.2110 18.8008 L 4.2110 37.0352 C 4.2110 40.4336 5.4063 41.6992 7.5860 42.9414 Z M 9.7891 39.6601 C 8.4532 38.9101 8.0079 38.1836 8.0079 36.9179 L 8.0079 18.9648 C 8.0079 17.7930 8.4766 17.1133 9.6485 16.4336 L 25.3985 7.4101 C 27.1797 6.4023 28.7735 6.3554 30.6016 7.4101 L 46.3516 16.4336 C 47.5237 17.1133 47.9922 17.7930 47.9922 18.9648 L 47.9922 36.9179 C 47.9922 38.1836 47.5468 38.9101 46.2110 39.6601 L 30.6016 48.5430 C 28.7266 49.5976 27.2032 49.5742 25.3985 48.5430 Z"
                rokedasharray="1, 1"
                stroke="#6B3A99"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            <svg
              width="80px"
              height="80px"
              viewBox="0 0 128 128"
              aria-hidden="true"
              role="img"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              preserveAspectRatio="xMidYMid meet"
            >
              <motion.path
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 1, rotate: -360 * 6 }}
                transition={{ duration: 3, ease: "easeInOut" }}
                d="M72.51 15.42H34.65c-.15 0-.28.06-.42.08h-6.47c-1.24 0-2.24 1-2.24 2.24v100.97c0 1.24 1 2.24 2.24 2.24h21.9c1.24 0 2.24-1 2.24-2.24V86.63h20.61c19.83 0 35.96-15.97 35.96-35.6c.01-19.63-16.13-35.61-35.96-35.61zm-1.72 50.22c-.35.03-.7.06-1.06.06H52.28c-.05 0-.09-.04-.14-.06a.513.513 0 0 1-.24-.1a.577.577 0 0 1-.21-.43V36.94c0-.18.09-.32.21-.43c.06-.06.14-.07.22-.09c.06-.02.09-.06.15-.06h17.45c.4 0 .8.03 1.19.06c7.25.63 12.97 6.94 12.97 14.61c.01 7.71-5.77 14.05-13.09 14.61z"
                fill="#6B3A99"
              ></motion.path>
            </svg>
          </div>
        ) : (
          <>
            <Layout className="pt-0">
              <div className="flex items-center justify-between w-full">
                <motion.div
                  className="w-1/3 md:w-2/5 animate-wiggle"
                  initial={{ opacity: 0, y: -50, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      delay: 0.6,
                      duration: 1.5,
                      ease: [0.6, -0.05, 0.01, 0.9],
                    },
                  }}
                >
                  <Image
                    src={profilePic}
                    alt="CodeBucks"
                    className="mx-auto w-full h-auto"
                    priority={true}
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    50vw"
                  />
                </motion.div>
                <div className="w-1/2 flex flex-col items-center self-center">
                  <AnimatedText
                    text="Hi there,"
                    className="!text-5xl !text-left"
                  />
                  <AnimatedText
                    text="I'm Parsa Peikani, a self-made software engineer :)"
                    className="!text-5xl !text-left"
                  />
                  <motion.p
                    className="my-4 text-base font-medium"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  >
                    {" "}
                    As a skilled full-stack developer, I am dedicated to turning
                    ideas into innovative web applications. Explore my latest
                    projects and articles, showcasing my expertise in React.js
                    and web development.
                  </motion.p>
                  <div className="flex items-center self-start mt-2">
                    <motion.a
                      initial={{ opacity: 0, x: -80 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 1,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                      href="/dummy.pdf"
                      target={"_blank"}
                      className="flex items-center bg-dark dark:bg-yellow-400 text-light dark:text-dark p-2.5 px-6 rounded-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:dark:bg-dark hover:dark:border-yellow-400 hover:dark:text-yellow-400"
                      download={true}
                    >
                      Resume <LinkArrow className={"w-6 ml-1"} />
                    </motion.a>
                    <motion.a
                      initial={{ opacity: 0, x: 80 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 1,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                      href="mailto:parsapeikani05@gmail.com"
                      target={"_blank"}
                      className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-yellow-400"
                    >
                      Contact
                    </motion.a>
                  </div>
                </div>
              </div>
            </Layout>
            <div>
              <HireMe />
            </div>
          </>
        )}
      </main>
    </>
  );
}
