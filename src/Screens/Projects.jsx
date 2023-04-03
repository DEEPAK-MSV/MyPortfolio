import React from 'react';

function Projects() {
  const projects = [
    {
      id: 1,
      name: 'Pulse Mobile App',
      img: 'https://cdn.dribbble.com/users/2345673/screenshots/16698256/media/888235710f030572a821871d233a92fe.png?compress=1&resize=400x300',
      type: 'Mobile App',
      description: 'Pulse is a mobile app for tracking your heart rate and other vitals.'
    },
    {
      id: 2,
      name: 'News App',
      img: 'https://cdn.dribbble.com/users/1753227/screenshots/16459690/media/3ab03a98c5332034cfcf9c6dd8773eac.png?compress=1&resize=400x300',
      type: 'Mobile App',
      description: 'A news app that aggregates news from various sources and displays them in a user-friendly interface.'
    },
    {
      id: 3,
      name: 'Student Result Management',
      img: 'https://cdn.dribbble.com/users/861271/screenshots/15508543/media/9490f146ac3fe7c1d38561a4fc32ae6d.png?compress=1&resize=400x300',
      type: 'Website',
      description: 'A web-based application for managing student grades, attendance, and other related information.'
    },
    {
      id:4,
      name:"Petspot",
      img:"https://cdn.dribbble.com/users/8430061/screenshots/17764839/media/0192f34031fe4fdf35cfb266465e9b6a.png?compress=1&resize=400x300&vertical=top",
      type:"website",
      description:"a web-based application for purchase of Pets with a hude Discount price"
    }
  ];

  return (
    <div className='w-full h-full justify-center content-center text-center flex my-20 px-10'>
      <div className='flex flex-col justify-center content-center text-center space-y-10'>
        <h1 className='text-center text-white font-bold text-2xl font-serif'>Projects</h1>
        <div className='flex felx-row'>
        {projects.map((project , index ) => (
        <div className='bg-slate-900 rounded-xl p-4 m-3 flex felx-row '>
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
          </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
