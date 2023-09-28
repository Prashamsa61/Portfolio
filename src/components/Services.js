import React, { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "Project Ideas",
    description:
      "As a student, I'm brimming with innovative project ideas. I believe in turning creative concepts into reality.",
    link: "Explore Ideas",
  },
  {
    name: "Learning Journey",
    description:
      "My journey as a student is filled with learning and growth. I'm constantly acquiring new skills and knowledge.",
    link: "Discover Learning",
  },
  {
    name: "Collaboration",
    description:
      "I'm open to collaboration on exciting projects. Let's work together to bring our ideas to life!",
    link: "Join Hands",
  },
];

const Services = () => {
  const [showAdditionalContent, setShowAdditionalContent] = useState(false);

  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/*text  $ {image}*/}
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 bg:services lg:bg-bottom
           bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              As a student with a passion for innovation, I have exciting
              project ideas and a strong desire to learn and collaborate.
            </h3>
            <button
              className="btn btn-sm"
              onClick={() => setShowAdditionalContent(!showAdditionalContent)}
            >
              {showAdditionalContent ? "Hide Projects" : "Explore Projects"}
            </button>
          </motion.div>
          {/* services */}
          <div className="flex-1">
            {/* services list */}
            <div>
              {services.map((service, index) => {
                // Destructure service
                const { name, description, link } = service;
                return (
                  <motion.div
                    variants={fadeIn("left", 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex felx-col flex-1 items-end ">
                      {showAdditionalContent && (
                        <>
                          <a
                            href="#"
                            className="btn w-10 h-10 mb-[30px] justify-center items-center"
                          >
                            <BsArrowUpRight className="w-full h-1/2" />
                          </a>
                          <a href="#" className="text-gradient text-sm">
                            {link}
                          </a>
                        </>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
