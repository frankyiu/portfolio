import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  avatar: string;
  percent: number;
};

function Skill({ avatar, percent }: Props) {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ x: 0, opacity: 1 }}
      className="relative group flex cursor-pointer border border-gray-500 rounded-full"
    >
      <motion.img
        className="w-24 h-24 p-4 object-cover group-hover:grayscale duration-300 ease-in-out"
        src={avatar}
      />
      <div className="absolute opacity-0 group-hover:opacity-80 duration-300 w-24 h-24 rounded-full group-hover:bg-slate-100">
        <div className="h-full flex justify-center items-center">
          <p className="text-2xl font-bold text-black">{percent}%</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Skill;
