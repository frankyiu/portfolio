import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function About({}: Props) {
  return (
    <div className="section">
      <h3 className="subTitle">About</h3>
      <div className="flex flex-col md:flex-row justify-center items-center h-full">
        <motion.img
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="flex-shrink-0 w-52 h-52 rounded-full object-cover md:w-72 md:mb-0 md:h-auto  md:rounded-none"
          src={process.env.PUBLIC_URL + '/img/about.jpg'}
        />
        <div className="w-[320px]  md:w-[500px] ">
          <div className="text-2xl font-semibold py-5">
            Here is my little background
          </div>
          <p className="p-5 text-base text-justify px-5 h-[40vh] overflow-scroll md:overflow-hidden">
            Hi 👋, I am Frank Yiu, an OWP holder coming from Hong Kong 🇭🇰 living
            in Toronto 🇨🇦 now. Web developer searching for an entry-level
            developer position at a software company. 1-yr experience in
            full-stack development and web design after graduating from Hong
            Kong University of Science and Technology. Proficient in front-end
            and back-end development, writing codes, and troubleshooting complex
            issues. Here is my portfolio, Check it out !!!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
