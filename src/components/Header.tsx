import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

type Props = {};

function Header({}: Props) {
  return (
    <header className="z-10 overflow-hidden sticky top-0 p-5 flex justify-between max-w-7xl mx-auto ">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://www.linkedin.com/in/frank-yiu/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/frankyiu/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="mailto:frankyiu1020111@gmail.com"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        <img
          className="w-10 h-10 rounded-full mr-3"
          src={process.env.PUBLIC_URL + '/img/profile.jpg'}
        />
        <p className="uppercase hidden md:inline-flex text-md text-gray-400">
          Frank Yiu
        </p>
      </motion.div>
    </header>
  );
}

export default Header;
