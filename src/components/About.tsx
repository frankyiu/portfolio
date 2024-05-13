import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function About({}: Props) {
  return (
    <div className="section">
      <h3 className="subTitle">About</h3>
      <div className="flex flex-col md:flex-row md:gap-4 justify-center items-center h-full">
        <motion.img
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="flex-shrink-0 w-52 h-52 rounded-full object-cover md:w-72 md:mb-0 md:h-auto md:rounded-[200px]"
          src={process.env.PUBLIC_URL + '/img/about.jpg'}
        />
        <div className="w-[320px] md:w-[500px] text-left p-5">
          <div className="text-4xl font-semibold mb-5 text-[#33ff00] " >
            About Me
          </div>
          <p className="text-lg h-[40vh] overflow-scroll md:overflow-hidden">
            Hey there! <br/>
            My name is Frank Yiu, based in Toronto 🇨🇦, and I work as a
            software developer in a tech company. With over two years of
            experience in full-stack development and a Bachelor's degree in
            computer science, I'm well-versed in both front-end and back-end
            development. <br/><br/>
            I work on Java Springboot, Python Django, React, Angular and etc.
            Check out my profile to see more!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
