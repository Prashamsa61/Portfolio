import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";

const Work = () => {
  const portfolioItems = [
    {
      imgSrc: Img1,
      pretitle: "UI/UX Design",
      title: "Project Title 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      imgSrc: Img2,
      pretitle: "UI/UX Design",
      title: "Project Title 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      imgSrc: Img3,
      pretitle: "UI/UX Design",
      title: "Project Title 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
  ];

  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <div className="lg:w-1/2 flex flex-col gap-y-12 mb-10 lg:mb-0">
            <motion.div
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h2 className="h2 leading-tight text-accent">
                My latest <br />
                work
              </h2>
              <p className="max-w-sm mb-16">
                {portfolioItems[activeItem].description}
              </p>
              <button className="btn btn-sm">View all projects</button>
            </motion.div>
          </div>

          <div className="lg:w-1/2 flex flex-col gap-y-12">
            {portfolioItems.slice(0, 2).map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn("left", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="lg:flex"
              >
                <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                  {/* overlay */}
                  <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                  {/* img */}
                  <img
                    src={item.imgSrc}
                    alt=""
                    className="group-hover:scale-125 transition-all duration-500"
                  />
                  {/* pretitle */}
                  <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                    <span className="text-gradient">{item.pretitle}</span>
                  </div>
                  {/* title */}
                  <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                    <span className="text-3xl text-white">{item.title}</span>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Third Image */}
            <div className="lg:flex">
              <motion.div
                variants={fadeIn("left", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
              >
                <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                  {/* overlay */}
                  <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                  {/* img */}
                  <img
                    src={portfolioItems[2].imgSrc}
                    alt=""
                    className="group-hover:scale-125 transition-all duration-500"
                  />
                  {/* pretitle */}
                  <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                    <span className="text-gradient">
                      {portfolioItems[2].pretitle}
                    </span>
                  </div>
                  {/* title */}
                  <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                    <span className="text-3xl text-white">
                      {portfolioItems[2].title}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
