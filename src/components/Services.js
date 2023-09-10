import React from "react";

import { bsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "UI & UX Design",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    link: "Learn More",
  },
  {
    name: "UI & UX Design",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    link: "Learn More",
  },
  {
    name: "UI & UX Design",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    link: "Learn More",
  },
  {
    name: "UI & UX Design",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    link: "Learn More",
  },
];
const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/*text  $ {image}*/}
          <div
            className="flex-1 bg:services  lg:bg-bottom
           bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">what i do</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </h3>
            <button className="btn btn-sm">See my work</button>
          </div>
          {/* services */}
          <div>
            {/* services list */}
            <div>
              {services.map((services,index)={})}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
