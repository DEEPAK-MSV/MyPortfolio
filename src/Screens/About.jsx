import React from 'react';
import { FaDyalog } from 'react-icons/fa';
import ReactSvg from '../assets/react.svg';

function About() {
  const skills = [
    "ReactJs", "Nodejs", "MongoDb", "Express", "ReactNative", "Tailwind"
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
            <p className='text-white font-mono text-sl float-right mx-8 text-left uppercase'>
              Hi there! I'm a full-stack web developer, I absolutely love what I do
              and I'm passionate about crafting awesome applications that people
              can enjoy using.
              My journey into web development started with a curiosity about
              the inner workings of the internet. From there, I dove headfirst into
              learning and exploring all aspects of web development. I've had the
              opportunity to work on a variety of projects, which has allowed me to
              gain valuable skills across the entire development stack.
              I thrive in collaborative and dynamic environments where I can
              bring my problem-solving skills and attention to detail to the table. I
              believe that teamwork and communication are essential for creating
              remarkable products.
              When it comes to front-end development, I'm well-versed in HTML,
              CSS, and JavaScript. I'm also familiar with modern frameworks like
              React.js and Next.js, which I use to build beautiful and user-friendly
              interfaces.
              On the back-end side, I have experience with the server-side
              programming language Node.js. I've worked with the framework
              Express to build robust and scalable web applications. I'm also
              comfortable working with databases like SQLite and MongoDB.
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