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
      <div className="container mx-auto"></div>
      <div>
        <div
          className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] 
          mix-blend-lighten bg-top"
        >
          <div>
            <h2>About Me</h2>

            <h3> I'm a Student at Sunway College in second semester.</h3>
            <p>
              SJKFDA IJDKASNJVC JNDSKJNAJCA KNASDKLFNOAJS OJNAJDSFNA JDNLANFD
              KJANDJNASF KNDASNAKSNA Jnjaksnj dmm djsnafc adsjnfsdjanfc knd
              saknfcskdn
            </p>
            <div>
              <div>
                <div>
                  <CountUp start={0} ebd={13} duration={3} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>text</div>
      </div>
    </section>
  );
};

export default About;
