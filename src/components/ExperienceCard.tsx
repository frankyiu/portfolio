import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  isActive: boolean;
  avatarSrc: string;
  skillsSrc: string[];
  post: string;
  company: string;
  period: string;
  summaries: string[];
};

function ExperienceCard({
  isActive,
  post,
  company,
  period,
  avatarSrc,
  skillsSrc,
  summaries,
}: Props) {
  const baseArticleClass =
    'text-left flex flex-col space-y-5 flex-shrink-0 items-center rounded-lg p-10 bg-gray-900 snap-center w-[320px] md:w-[600px]  hover:opacity-100 duration-200 overflow-hidden';

  return (
    <article
      className={`${baseArticleClass} ${
        isActive ? 'opacity-100' : 'opacity-60'
      }`}
    >
      {/* avatar */}
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="rounded-full h-24 w-24"
        src={avatarSrc}
      />
      <div className="flex flex-col space-y-2 h-[50vh]">
        <div className="uppercase text-xl font-light">{post}</div>
        {/* company */}
        <p>{company}</p>
        <div className="py-2 flex flex-row space-x-2">
          {skillsSrc.map((skill) => (
            <img className="w-6 h-6" src={skill}></img>
          ))}
        </div>

        <div className="text-sm">{period}</div>
        <div className="overflow-y-scroll ">
          <ul className=" list-disc space-y-2 ml-5 ">
            {summaries.map((sum) => (
              <li>{sum}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default ExperienceCard;
