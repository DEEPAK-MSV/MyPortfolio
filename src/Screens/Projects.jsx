import React from 'react';
import { Link } from 'react-router-dom';

function Projects() {
  const projects = [
    {
      id: 1,
      name: 'Pulse Mobile App',
      img: 'https://cdn.dribbble.com/users/2345673/screenshots/16698256/media/888235710f030572a821871d233a92fe.png?compress=1&resize=400x300',
      type: 'Mobile App',
      description: 'Pulse is a mobile app for tracking your heart rate and other vitals.',
      gitLink:"https://play.google.com/store/apps/details?id=pulse.active.stations&pli=1"
    },
    {
      id: 2,
      name: 'News App',
      img: 'https://cdn.dribbble.com/users/1753227/screenshots/16459690/media/3ab03a98c5332034cfcf9c6dd8773eac.png?compress=1&resize=400x300',
      type: 'Mobile App',
      description: 'A news app that aggregates news from various sources and displays them in a user-friendly interface.',
      gitLink:"https://github.com/DEEPAK-MSV/NEWSAPP"
    },
    {
      id: 3,
      name: 'Gym Application',
      img: 'https://cdn.dribbble.com/userupload/6506940/file/original-68cfbdbcfd7489b1f18d873baa15ce08.jpg?resize=400x300',
      type: 'Mobile App',
      description: 'A mobile app for Gym Exersices and pedometer with water intake counter buit using ReactNative',
      gitLink:"https://github.com/DEEPAK-MSV/Gym_workout"
    },
    {
      id:4,
      name:"Blog Website",
      img:"https://cdn.dribbble.com/users/2412469/screenshots/20169150/media/dc0fe2941657e3298f1e5b5dc71c34d8.png?compress=1&resize=400x300",
      type:"website",
      description:"A website for writing simple blogs buit using react, node, express and SQLite",
      gitLink:"https://github.com/DEEPAK-MSV/Bloging"
    },
    {
      id:5,
      name:"petspot",
      img:"https://cdn.dribbble.com/userupload/4105448/file/original-024b3282988f37cc5f61bf67ba7bb5c9.png?compress=1&resize=400x300&vertical=center",
      type:"website",
      description:"A Website to buy your favorite Pets With Amazing Discounts",
      gitLink:"https://github.com/DEEPAK-MSV/PetSpot"
    }
  ];

  return (
    <div className='w-full h-full justify-center content-center text-center flex my-20 px-10'>
      <div className='flex flex-col justify-center content-center text-center space-y-10'>
        <h1 className='text-center text-white font-bold text-2xl font-serif'>Projects</h1>
        <div className='flex flex-col md:flex-row md:flex-wrap lg:flex-row lg:flex-wrap justify-center items-center'>
        {projects.map((project , index ) => (
        <div className='bg-slate-900 rounded-xl p-4 m-3 flex felx-row '>
          <Link to={project.gitLink} target='_blank'>
              <div className='flex flex-col' key={index}>
                <div className='relative'>
                  <img src={project.img} alt={project.name} className='w-full h-full rounded-xl' />
                  <div className='absolute inset-0 bg-black opacity-0 hover:opacity-90 rounded-xl transition-opacity'>
                    <div className='flex items-center justify-center h-full'>
                      <p className='text-white text-center'>{project.description}</p>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col justify-center'>
                  <h1 className='text-white font-bold uppercase'>{project.name}</h1>
                  <h2 className='text-white uppercase'>{project.type}</h2>
                </div>
              </div>
              </Link>
        </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
