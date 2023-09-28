import React, { useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  // useEffect to trigger counting animation when inView becomes true
  useEffect(() => {
    if (inView) {
      // Custom code to execute when the component is in view
      const countUpElement = document.querySelector(".count-up-element"); 

      // Check if the element exists before starting the animation
      if (countUpElement) {
        const startValue = 0;
        const endValue = 13;
        const duration = 20; // Duration in seconds

        const countUpOptions = {
          start: startValue,
          end: endValue,
          duration: duration,
          useEasing: true,
          useGrouping: true,
        };

        const countUp = new CountUp(countUpElement, endValue, countUpOptions);
        if (!countUp.error) {
          countUp.start();
        } else {
          console.error(countUp.error);
        }
      }
    }
  }, [inView]);
  return (
    <section className="min-h-[95vh] lg:min-h-[90vh]" id="about" ref={ref}>
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
              I'm a student with a keen interest in data science and currently
              exploring front-end development
            </h3>
            <p className="mb-6">
              I'm a Sunway College student passionate about data science and
              currently exploring front-end development. I'm eager to expand my
              skills in both fields to create innovative solutions.
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
              <Link
                to="contact"
                smooth
                duration={500}
                className="btn btn-lg flex items-center mx-7"
              >
                Contact me
              </Link>

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
