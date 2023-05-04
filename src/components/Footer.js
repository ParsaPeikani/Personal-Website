import Layout from "./Layout";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import Link from "next/link";
import AnimatedText from "./AnimatedText";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {};
  const handleSubmit = (e) => {};
  return (
    <div className="">
      <h1 className="dark:text-yellow-400/75 text-3xl text-center">
        Get In Touch
      </h1>
      <AnimatedText
        text="Contact."
        className="text-yellow-400 text-center text-8xl font-bold"
      />

      <motion.div className="flex-[0.75] bg-black-100 p-8 rounded-2xl w-1/2">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className=" pl-20 flex flex-col">
            <span className="text-yellow-400 font-bold mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-purple-950 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="pl-20 flex flex-col">
            <span className="text-yellow-400 font-bold mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-purple-950  py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="pl-20 flex flex-col">
            <span className="text-yellow-400 font-bold mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-purple-950  py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="w-fit bg-dark dark:bg-yellow-400 text-light dark:text-dark p-2.5 px-6 rounded-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:dark:bg-dark mx-auto hover:dark:border-yellow-400 hover:dark:text-yellow-400"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};
export default Contact;
