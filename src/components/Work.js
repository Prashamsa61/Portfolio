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
        <div>
          <div>
            {/* text */}
            <div>
              <h2 className="h2 leading-tight  text-accent">
                My latest <br />
                work
              </h2>
              <p className="max-w-sm mb-16"></p>
            </div>
            {/* image */}

            <div>image</div>
          </div>
          <div> 2</div>
        </div>
      </div>
    </section>
  );
};

export default Work;
