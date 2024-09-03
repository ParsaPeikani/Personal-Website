import { motion, useScroll } from "framer-motion";
import AnimatedText from "./AnimatedText";
import { useRef } from "react";
import LiIcon from "./LiIcon";
import { FaCircle } from "react-icons/fa";

const Details = ({ position, company, companyLink, time, address, works }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[75%] mx-auto flex flex-col justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize dark:text-purple-400"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-yellow-400 xs:text-sm">
          {time} | {address}
        </span>
        {works.map((work) => (
          <div className="flex mt-4" key={work}>
            <FaCircle className="text-xs mr-2 mt-2" />
            <p className="font-medium w-full md:text-sm">{work}</p>
          </div>
        ))}
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <AnimatedText
        text="Experience"
        className="text-dark dark:text-yellow-400 text-center text-8xl 
        font-bold pb-36 md:text-6xl xs:text-4xl md:-mb-14"
      />
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full ">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-yellow-400"
        />
        <ul className="w-full flex flex-col justify-end ml-4 xs:ml-2 sm:pl-4 xs:pl-8">
          <Details
            position="Software Developer"
            company="Schenider Electric"
            companyLink="https://www.se.com/ca/en/"
            time="Sep 2024 - Dec 2024"
            address="Victoria, CA"
            works={["Coming Soon..."]}
          />
          <Details
            position="Full Stack Web Developer"
            company="Good Things Consignment"
            companyLink="https://www.good-things.ca/"
            time="Jan 2024 - Aug 2024"
            address="Victoria, CA"
            works={[
              "Implemented an automated contract scanning system using Node.js, GridFS, and Crontab, enhancing document processing efficiency by converting and storing images in MongoDB, reducing manual input and error rates by more than 50%.",
              " Developed notification and reporting features, integrating NodeMailer API for both automated and manual email updates and a real‑time announcement system, improving stakeholder communication and operational transparency.",
              " Implemented data migrations for key MongoDB collections as part of the software upgrade from version 2.0 to 3.0, successfully transitioning the system from a single‑store to a multi‑store setup and enhancing scalability.",
              " Developed a comprehensive video storage solution for security footage by integrating MongoDB with the existing Lorex camera system. This system archives all captured footage indefinitely, enabling users to access video from any specified time‑frame, significantly enhancing the store’s security and data retrieval capabilities.",
              " Implemented an innovative transaction verification feature that automatically saves 10‑20 second clips linked to specific transactions, providing indisputable proof of payment and reducing disputes, thus ensuring 100% transactional security and accountability.",
              " Developed a full‑stack eCommerce platform on Shopify using Next.js and React for the frontend, integrated with MongoDB and GridFS for the backend, enabling online ordering and expanding customer reach.",
              " Implemented payment processing with Stripe and integrated UPS and Canada Post APIs for packaging and delivery, offering both in‑person and online buying mechanisms, thereby enhancing operational efficiency and user experience.",
            ]}
          />
          <Details
            position="Customer Service"
            company="Pizza Hut"
            companyLink="https://www.pizzahut.ca/"
            time="Sep 2022 - Sep 2023"
            address="Victoria, CA"
            works={[
              "Developed strong multitasking skills by working effectively with team members to complete tasks and achieve goals, which led to a more cohesive and productive teamwork",
              "Assisted in training new team members, effectively leading and guiding them through the on‑boarding process to ensure theirsuccess in their new roles.",
            ]}
          />
          <Details
            position="Cashier"
            company="Tim Horton"
            companyLink="https://www.timhortons.ca/?gclid=Cj0KCQjwmN2iBhCrARIsAG_G2i4zDk6G0bmvIAXJT1hN1KhrC9NHGsjcqfkhTY8xRbmwv-ad_gnQ5jAaAtOSEALw_wcB"
            time="May 2021 - Sep 2022"
            address="Victoria, CA"
            works={[
              "Demonstrated strong skills in managing multiple responsibilities simultaneously, including preparing orders and handling customer transactions, resulting in improved satisfaction and a better overall customer experience.",
              "Exhibited strong leadership skills by effectively managing a team during peak hours to improve customer satisfaction.",
            ]}
          />
        </ul>
      </div>
    </div>
  );
};
export default Experience;
