import React from 'react';
import Skill from './Skill';

type Props = {};

function Skills({}: Props) {
  const skillNameToSrc = (file: string) => {
    return `${process.env.PUBLIC_URL}/img/skills/${file}`;
  };

  return (
    <div className="section">
      <h3 className="subTitle">Skills</h3>
      <h4 className="mt-5 tracking-[3px] text-sm uppercase text-gray-500">
        Hover a skill for current proficiency
      </h4>
      <div className="flex flex-col justify-center items-center h-[70vh] overflow-x-hidden  overflow-scroll">
        <div className="grid grid-cols-3 md:grid-cols-4 gap-3 p-2 ">
          <Skill avatar={skillNameToSrc('java-wordmark.svg')} percent={90} />
          <Skill avatar={skillNameToSrc('spring-wordmark.svg')} percent={80} />
          <Skill avatar={skillNameToSrc('python-wordmark.svg')} percent={90} />
          <Skill avatar={skillNameToSrc('django.svg')} percent={80} />
          <Skill avatar={skillNameToSrc('kafka-wordmark.svg')} percent={70} />
          <Skill avatar={skillNameToSrc('typescript.svg')} percent={80} />
          <Skill avatar={skillNameToSrc('react-wordmark.svg')} percent={80} />
          <Skill avatar={skillNameToSrc('angular.svg')} percent={80} />
          <Skill avatar={skillNameToSrc('vuejs.svg')} percent={70} />
          <Skill avatar={skillNameToSrc('nodejs.svg')} percent={60} />
          <Skill avatar={skillNameToSrc('redis.svg')} percent={80} />
          <Skill avatar={skillNameToSrc('docker.svg')} percent={70} />
          <Skill avatar={skillNameToSrc('git.svg')} percent={80} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
