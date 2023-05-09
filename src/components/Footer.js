import Layout from "./Layout";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import Link from "next/link";
import AnimatedText from "./AnimatedText";
import Earth from "./canvas/Earth";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  //cbafH7RQ13WrNp1VF
  // template_uycjzxh
  // service_ncrn415
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_ncrn415",
        "template_uycjzxh",
        {
          from_name: form.name,
          to_name: "Parsa",
          from_email: form.email,
          to_email: "parsapeikani05@gmail.com",
          message: form.message,
        },
        "cbafH7RQ13WrNp1VF"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
  return (
    <div className="overflow-x-hidden">
      <h1 className="dark:text-yellow-400/75 text-3xl text-center">
        Get In Touch
      </h1>
      <AnimatedText
        text="Contact."
        className="text-dark dark:text-yellow-400 text-center text-8xl font-bold"
      />
      <div className="flex">
        <motion.div
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl w-1/2"
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className=" pl-20 flex flex-col">
              <span className="text-dark dark:text-yellow-400 font-bold mb-4">
                Your Name
              </span>
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
              <span className="text-dark dark:text-yellow-400 font-bold mb-4">
                Your email
              </span>
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
              <span className="text-dark dark:text-yellow-400 font-bold mb-4">
                Your Message
              </span>
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
              className="mx-auto mr-48 bg-dark dark:bg-yellow-400 text-light dark:text-dark p-2.5 px-16 rounded-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:dark:bg-dark hover:dark:border-yellow-400 hover:dark:text-yellow-400"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
        <motion.div
          className="-mt-20 flex-grow xl:flex-1 pt-40 md:h-[450px] sm:h-[350px] xl:h-[600px]  w-1/3 max-w-[50%] cursor-pointer"
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Earth />
        </motion.div>
      </div>
    </div>
  );
};
export default Contact;
