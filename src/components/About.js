import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div
          className="flex flex-col gap-y-10 lg:flex-row lg:items-center
        lg:gap-x-20 lg:gap-y-0 h-screen"
        >
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px]
          mix-blend-lighten bg-top"
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 "
          >
            <h2 className="h2 text-accent ">About Me</h2>
            <h3 className="h3 mb-4">
              jnjnnjnjnj jjojnjn ijknoijo joijoj jnjojj jnojnj
            </h3>
            <p className="mb-6">
              asajd ajfa idjfa ikjdai adjfka iadf aj dfjiajidandnfj
              jdfkjansdf,mas judfaer jjuhfan dsf,m h2kfnan ajdfkjna
              knjdnafdklnfa njdkfanefma dlkfjnnajdksl fa dsf jdnasnf,ms
            </p>
            <div className="flex">
              <div>
                <div className="text-[40px] font-teritary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects Done
                </div>
              </div>
            </div>
            <div className=" flex gap-x-8 items-center mt-6 ">
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link p-3">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
