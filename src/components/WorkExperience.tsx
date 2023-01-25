import React from 'react';
import ExperienceCard from './ExperienceCard';

type Props = {};

function WorkExperience({}: Props) {
  return (
    <div className="section">
      <h3 className="subTitle">Experience</h3>

      <div className="w-full flex flex-row space-x-3 p-10  overflow-x-scroll snap-x snap-mandatory     ">
        <ExperienceCard
          post={'Application Developer'}
          company={'Ringus solution Enterprise LTD'}
          period={'2021-Jun - 2022-Jun'}
          summaries={[
            'Worked in a team of 10 developers to develop UI, web application, and backend micro-service for the forex trading platform',
            'Completed a payment gateway system from scratch, capable of handling high-loading traffic up to 400 request/s, utilizing Java, JavaScript, and database knowledge.',
            'Revamped internal legacy system by introducing micro-service architecture, scale up to handle 10 different platforms member data',
            'Engaged in designing the system architecture and user interface with senior developers',
          ]}
          avatarSrc={'/experience/ringus.jpg'}
          skillsSrc={[
            '/skills/spring-original.svg',
            '/skills/react-original.svg',
            '/skills/vuejs-original.svg',
            '/skills/redis-original.svg',
            '/skills/nodejs-original.svg',
            '/skills/typescript-original.svg',
            '/skills/java-original.svg',
          ]}
        />
        <ExperienceCard
          post={'Programmer (Placement)'}
          company={'Hong Kong Monetary Authority'}
          period={'2020-Jun - 2021-Jan'}
          summaries={[
            'Implemented a database reconciliation platform in Python script programming to automatic reconcile over 10K banking data between different IT systems',
            'Collected subject officers’ requirements and enhanced 6 internal VBA programs',
            'Conducted testing on the latest system build before deployment',
            'Prepared over 50 incidents log and documentation for system defects and system configuration',
          ]}
          avatarSrc={'/experience/hkma.jpg'}
          skillsSrc={[
            '/skills/python-original.svg',
            '/skills/oracle-original.svg',
          ]}
        />
        <ExperienceCard
          post={'Web Developer (Campus Intern)'}
          company={'HKUST Entrepreneurship Center'}
          period={'2018-Oct - 2019-Feb'}
          summaries={[
            'Revamped and improved Entrepreneurship website layout to a modern design using JavaScript',
            'Implemented an Online Booking system for 10K students and advisors to schedule appointments',
            'Assisted with Entrepreneurship Center to organize Hackathon UST 2019',
          ]}
          avatarSrc={'/experience/ust.svg'}
          skillsSrc={[
            '/skills/php-original.svg',
            '/skills/javascript-original.svg',
          ]}
        />
      </div>
    </div>
  );
}

export default WorkExperience;
