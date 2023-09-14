import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="cotainer mx-auto">
        <div className="flex felx-col lg:flex-row  gap-x-10 ">
          <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            {/* text */}
            <div>
              <h2 className="h2 leading-tight  text-accent">
                My latest <br />
                work
              </h2>
              <p className="max-w-sm mb-16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                facilisi. Sed euismod, justo nec cursus interdum, sapien justo
                consectetur nisi, nec lacinia mi sapien eget risus. Fusce luctus
                mi nec nisl ultrices, a ultricies justo venenatis. Aenean
                cursus, purus ut varius tincidunt, tortor felis venenatis justo,
                id dictum felis ex in libero.
              </p>
              <button className="btn btn-sm ">VIew all projects</button>
            </div>
            {/* image */}

            <div
              className="group relative overflow-hidden border-2
            border-white/50 rounded-xl"
            >
              {/* overlay */}
              <div
                className="group-hover:bg-black/70 w-full h-full absolute 
              z-40 transition-all duration-300"
              ></div>
              {/* img */}
              <img
                src={Img1}
                alt=""
                className="group-hover:scale-125 transition-all duration-500"
              />
              {/* pretitle */}
              <div
                className="absolute -bottom-full left-12
              group-hover:bottom-24 tranistion:all duration-500 z-50
              "
              >
                <span className="text-gradient">Ui/ux design</span>
              </div>
              {/* title */}
              <div
                className="absolute -bottom-full left-12
              group-hover:bottom-14 tranistion:all duration-700 z-50
              "
              >
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>
          </div>
          <div className="flex-1 "> 2</div>
        </div>
      </div>
    </section>
  );
};

export default Work;
