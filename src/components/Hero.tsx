import React from 'react';
import Typewriter from 'typewriter-effect';
import BackgroundCircle from './BackgroundCircle';

type Props = {};

export default function Hero({}: Props) {
  const handleScroll = (tag: string) => {
    const ele = document.getElementById(tag);
    if (ele) {
      ele.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col space-y-8  justify-center items-center h-screen overflow-hidden">
      <BackgroundCircle />
      <div className="relative  text-center">
        <img
          className="w-28 h-28 rounded-full mx-auto mb-10"
          src={process.env.PUBLIC_URL + '/img/profile.jpg'}
        />
        <div className=" text-gray-500 text-sm uppercase pb-2 tracking-[15px]">
          software developer
        </div>
        <div className="text-2xl md:text-4xl font-mono text-[#00FF41] flex flex-row justify-center space-x-4">
          <div>{'>'}</div>
          <Typewriter
            options={{
              strings: [
                'Hi, My Name is Frank',
                'GuyWhoLovesCoffee.java',
                'i-love-coding',
              ],
              autoStart: true,
              loop: true,
              delay: 50,
            }}
          />
        </div>
        <div className="flex space-x-5 md:space-x-10 justify-center">
          <button className="heroButton" onClick={() => handleScroll('about')}>
            About
          </button>
          <button
            className="heroButton"
            onClick={() => handleScroll('workExperience')}
          >
            Experience
          </button>
          {/* <button className="heroButton" onClick={() => handleScroll('about')}>
            Education
          </button> */}
          <button className="heroButton" onClick={() => handleScroll('skills')}>
            Skills
          </button>
          <button
            className="heroButton"
            onClick={() => handleScroll('contact')}
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}
