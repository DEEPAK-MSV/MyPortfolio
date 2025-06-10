import React from 'react';
import { FaDyalog } from 'react-icons/fa';
import ReactSvg from '../assets/react.svg';

function About() {
  const skills = [
    "ReactJs","Angular", "Nodejs", "MongoDb", "Express", "ReactNative", "Tailwind"
  ]
  return (
    <div className='text-center flex flex-col justify-center items-center mb-8'>
      <div>
        <h1 className='text-center text-white font-bold text-2xl font-serif mb-2'>About Me</h1>
        <div className='flex flex-wrap justify-center items-center space-y-3 w-full h-full'>
          <div className='lg:w-9/12 w-full h-full'>
            <p className='text-white font-mono text-sl whitespace-break-spaces mx-8 text-left uppercase'>
                Hi there!👋 I'm a Detail-oriented and passionate Frontend Developer with over 2 years of hands-on experience building
                high-performance, scalable, and mobile-friendly web applications. Specialized in Angular, Tailwind CSS,
                RxJS, and RESTful APIs. Skilled at creating clean, modular front-end architecture using modern JavaScript
                frameworks and tools. Proficient in Agile methodologies and a strong advocate for UI/UX consistency,
                performance optimization, and cross-functional team collaboration. Adept at transforming complex business
                requirements into elegant, user-centric interfaces with high code maintainability and testability. Experienced
                in conducting frontend code reviews, optimizing web performance, and ensuring accessibility standards
                compliance. Proven ability to deliver scalable solutions on tight deadlines while enhancing the end-user
                experience.
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center content-center text-center mt-10'>
        <h1 className='text-center text-xl text-white font-serif font-bold uppercase'>Skills</h1>
        <div className='flex flex-col space-y-3 lg:space-y-0 justify-center content-center text-ceter m-10 lg:flex-row'>
          {skills.map((skill) => (
            <h1 className='text-white font-general text-lg mx-2 bg-indigo-900 p-3 rounded-xl uppercase'>{skill}</h1>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
