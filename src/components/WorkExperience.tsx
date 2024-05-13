import React, { useRef, useState } from 'react';
import ExperienceCard from './ExperienceCard';

type Props = {};

enum Company {
  SIMPLIFYVMS = 'SimplifyVms',
  RINGUS = 'Ringus',
  HKMA = 'Hkma',
  UST = 'Ust',
}

function WorkExperience({}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const [activeCard, setActiveCard] = useState<Company | null>(
    Company.SIMPLIFYVMS,
  );

  const skillNameToSrc = (files: string[]) => {
    return files.map((file) => `${process.env.PUBLIC_URL}/img/skills/${file}`);
  };

  const handleSelectExp = (company: Company) => {
    setActiveCard(company);
  };
  const handleMouseDown = (e: { pageX: number }) => {
    setIsDragging(true);
    if (!containerRef.current) return;
    containerRef.current.classList.remove('snap-x');
    containerRef.current.classList.add('snap-none');
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: { pageX: number }) => {
    if (!isDragging || !containerRef.current) return;
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust the multiplier for smoother scrolling
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (!containerRef.current) return;
    containerRef.current.classList.remove('snap-none');
    containerRef.current.classList.add('snap-x');
  };

  return (
    <div className="section">
      <h3 className="subTitle">Experience</h3>
      <div
        className="w-full flex flex-row space-x-3 p-10 cursor-grab active:cursor-grabbing overflow-x-auto select-none snap-x"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div className="flex-shrink-0 w-[320px] hidden md:w-[600px] md:flex justify-center items-center">
          <div className='md:hidden'>
            <img src={`${process.env.PUBLIC_URL}/img/coding-cat.gif`} alt="GIF"  width={300}/>
          </div>
        </div>
        <div onClick={() => handleSelectExp(Company.SIMPLIFYVMS)}>
          <ExperienceCard
            isActive={activeCard == Company.SIMPLIFYVMS}
            post={'Software Engineer'}
            company={'SimplifyVMS'}
            period={'2023-Aug - Current'}
            summaries={[
              'Developed and delivered new features on the VMS platform, synchronizing platform data across multiple platforms using Kafka within an event-driven microservices architecture',
              'Successfully refactored and optimized API endpoints, achieving a notable reduction in response time by 30%',
              'Proficient in both front-end and back-end development, utilizing AngularJS for front-end development and Python Django for back-end development. Experience includes writing test cases and Swagger documentation',
              'Collaborated effectively with colleagues across the globe, including teams in the US and Asia, within a multinational corporation setting',
            ]}
            avatarSrc={`${process.env.PUBLIC_URL}/img/experience/simplifyvms.jpg`}
            skillsSrc={skillNameToSrc([
              'python.svg',
              'django.svg',
              'kafka-wordmark.svg',
              'angular.svg',
            ])}
          />
        </div>
        <div onClick={() => handleSelectExp(Company.RINGUS)}>
          <ExperienceCard
            isActive={activeCard == Company.RINGUS}
            post={'Application Developer'}
            company={'Ringus solution Enterprise LTD'}
            period={'2021-Jun - 2022-Jun'}
            summaries={[
              'Worked in a team of 10 developers to develop UI, web application, and backend micro-service for the forex trading platform',
              'Completed a payment gateway system from scratch, capable of handling high-loading traffic up to 400 request/s, utilizing Java, JavaScript, and database knowledge.',
              'Revamped internal legacy system by introducing micro-service architecture, scale up to handle 10 different platforms member data',
              'Engaged in designing the system architecture and user interface with senior developers',
            ]}
            avatarSrc={`${process.env.PUBLIC_URL}/img/experience/ringus.jpg`}
            skillsSrc={skillNameToSrc([
              'spring.svg',
              'react.svg',
              'vuejs.svg',
              'redis.svg',
              'nodejs.svg',
              'typescript.svg',
              'java.svg',
            ])}
          />
        </div>
        <div onClick={() => handleSelectExp(Company.HKMA)}>
          <ExperienceCard
            isActive={activeCard == Company.HKMA}
            post={'Programmer (Placement)'}
            company={'Hong Kong Monetary Authority'}
            period={'2020-Jun - 2021-Jan'}
            summaries={[
              'Implemented a database reconciliation platform in Python script programming to automatic reconcile over 10K banking data between different IT systems',
              'Collected subject officers’ requirements and enhanced 6 internal VBA programs',
              'Conducted testing on the latest system build before deployment',
              'Prepared over 50 incidents log and documentation for system defects and system configuration',
            ]}
            avatarSrc={`${process.env.PUBLIC_URL}/img/experience/hkma.jpg`}
            skillsSrc={skillNameToSrc(['python.svg', 'oracle.svg'])}
          />
        </div>
        <div onClick={() => handleSelectExp(Company.UST)}>
          <ExperienceCard
            isActive={activeCard == Company.UST}
            post={'Web Developer (Campus Intern)'}
            company={'HKUST Entrepreneurship Center'}
            period={'2018-Oct - 2019-Feb'}
            summaries={[
              'Revamped and improved Entrepreneurship website layout to a modern design using JavaScript',
              'Implemented an Online Booking system for 10K students and advisors to schedule appointments',
              'Assisted with Entrepreneurship Center to organize Hackathon UST 2019',
            ]}
            avatarSrc={`${process.env.PUBLIC_URL}/img/experience/ust.svg`}
            skillsSrc={skillNameToSrc(['php.svg', 'javascript.svg'])}
          />
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
