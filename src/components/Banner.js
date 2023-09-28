import React from "react";
import Image from "../assets/Banner.svg";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import PortfolioButton from "./PortfolioButton"; // Import the PortfolioButton component
import ContactLink from "./ContactLink"; // Import the ContactLink component

const Banner = () => {
  return (
    <section
      className="min-h-[90vh] lg:min-h-[90vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-11">
          <div className="flex-1 text-center text-white font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[70px] font-bold leading-[0.9] lg:text-[80px]"
            >
              PRASHAMSA
              <span> RIJAL</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[40px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I am a </span>
              <TypeAnimation
                sequence={[
                  "Student",
                  2000,
                  "Fast Learner",
                  2000,
                  "Tech Enthusiast",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Hello, I'm PRASHAMSA, a tech-savvy student with a passion for all
              things technology. I'm constantly exploring the latest
              innovations, coding, and diving into the digital world.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-14 mx-auto lg:mx-0"
            >
              <div className="banner">
               
                <ContactLink />
              </div>
              <div className="banner">
              
                <PortfolioButton />
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[-20px] gap-x-6 max-w max mx-auto lg:mx-0"
            >
              <a href="https://github.com/Prashamsa61">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/prashamsa-rijal-/">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[450px] mx-auto"
          >
            <img src={Image} alt="profile_picture" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
