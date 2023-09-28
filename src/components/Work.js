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
      pretitle: "Website Design Through Html&Css",
      title: "Restaurant Website",
      description:
        "It is a website designed to help customers have easy access and knowledge about the menu and services.",
    },
    {
      imgSrc: Img2,
      pretitle: "Innovative Project",
      title: "Smart Shopping Trolley System",
      description:
        "Whenever any item is placed in the trolley, our product helps us detect and do billing without standing in a line.",
    },
    {
      imgSrc: Img3,
      pretitle: "Python",
      title: "Hospital Management System",
      description: "I developed a hospital management system using Python.",
    },
  ];

  const [activeItem, setActiveItem] = useState(0);
  const [isImageClicked, setIsImageClicked] = useState(false);

  const handleItemClick = (index) => {
    setActiveItem(index);
    setIsImageClicked(true);
  };

  const handleCloseDescription = () => {
    setIsImageClicked(false);
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
              viewport={{ once: false, threshold: 0.3 }}
            >
              <h2 className="h2 leading-tight text-accent">
                My latest <br />
                work
              </h2>
              <p>This are some of the works that i have done so far.</p>
              {isImageClicked ? (
                <div>
                  <p className="max-w-sm mb-16">
                    {portfolioItems[activeItem].description}
                  </p>
                  <button
                    className="btn btn-sm"
                    onClick={handleCloseDescription}
                  >
                    Close Description
                  </button>
                </div>
              ) : (
                <button className="btn btn-sm">View all projects</button>
              )}
            </motion.div>

            {/* Third Image */}
            <div className="mt-20">
              <PortfolioItem
                item={portfolioItems[2]}
                fadeInDelay={0.5}
                handleItemClick={() => handleItemClick(2)}
                isClicked={isImageClicked && activeItem === 2}
              />
            </div>
          </div>

          <div className="lg:w-1/2 flex flex-col gap-y-10">
            {portfolioItems.slice(0, 2).map((item, index) => (
              <PortfolioItem
                key={index}
                item={item}
                fadeInDelay={0.5}
                handleItemClick={() => handleItemClick(index)}
                isClicked={isImageClicked && activeItem === index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const PortfolioItem = ({ item, fadeInDelay, handleItemClick, isClicked }) => (
  <motion.div
    variants={fadeIn("left", fadeInDelay)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, threshold: 0.3 }}
    className={`lg:flex ${isClicked ? "enlarged" : ""}`}
    onClick={handleItemClick}
  >
    <div
      className={`group relative overflow-hidden border-2 border-white/50 ${
        isClicked ? "enlarged" : ""
      }`}
    >
      <div
        className={`group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 ${
          isClicked ? "enlarged" : ""
        }`}
      ></div>
      <img
        src={item.imgSrc}
        alt=""
        className={`group-hover:scale-125 transition-all duration-500 ${
          isClicked ? "enlarged" : ""
        }`}
      />
      <div
        className={`absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 ${
          isClicked ? "enlarged" : ""
        }`}
      >
        <span className="text-gradient">{item.pretitle}</span>
      </div>
      <div
        className={`absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 ${
          isClicked ? "enlarged" : ""
        }`}
      >
        <span className="text-3xl text-white">{item.title}</span>
      </div>
    </div>
  </motion.div>
);

export default Work;
