import React from 'react';
import { FaDyalog } from 'react-icons/fa';
import ReactSvg from '../assets/react.svg';

function About() {
  const skills = [
    "HTML5", "CSS", "Javascript", "reactjs", "bootstrap", "reactnative"
  ]
  return (
    <div className='text-center flex flex-col justify-center content-center mb-8'>
      <div>
        <h1 className='text-center text-white font-bold text-2xl font-serif'>About Me</h1>
        <div className='flex felx-row justify-center content-center m-10'>
          <div className='w-3/12 h-full float-left'>
          <img src={ReactSvg} alt='React logo' className='w-3/6 h-3/6 float-left' />
          </div>
          <div className='w-9/12 h-full float-right'>
          <p className='text-white font-general text-sl float-right mx-8 text-left uppercase'>
            With one year of experience in React Native development, I have gained a deep understanding of the framework's capabilities and limitations.
            React Native is a cross-platform mobile application development framework that allows developers to build applications for both iOS and Android platforms using JavaScript and React.
            During my experience, I have honed my skills in building intuitive user interfaces, integrating third-party libraries and APIs, and troubleshooting issues.
            In conclusion, my one-year experience in React Native development has provided me with a strong foundation in building cross-platform mobile applications.
            I have gained proficiency in building intuitive user interfaces, integrating third-party libraries and APIs, and optimizing application performance.
            I am excited to continue learning and growing in this field, and I am confident that my skills and experience make me a valuable asset to any development team.
          </p>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center content-center text-center mt-10'>
        <h1 className='text-center text-xl text-white font-serif font-bold uppercase'>Skills</h1>
        <div className='flex flex-row justify-center content-center text-ceter m-10'>
          {skills.map((skill) => (
            <h1 className='text-white font-general text-lg mx-2 bg-indigo-900 p-3 rounded-xl uppercase'>{skill}</h1>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;