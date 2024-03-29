import React from 'react';
import { FaDyalog } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const routes = [
  {
    id: 1,
    path: '/projects',
    name: 'Projects'
  },
  {
    id: 2,
    path: '/about',
    name: 'About'
  }
];

function Header() {
  return (
    <div className='w-full justify-center items-center flex'>
      <div className='w-full justify-between items-center p-3 flex flex-row cursor-default'>
        <Link to='/'>
          <div className='flex flex-row cursor-default'>
            <FaDyalog className='text-3xl font-bold font-serif text-white text-center drop-shadow-2xl' />
            <h1 className='text-3xl font-bold font-serif text-white text-center'>Portfolio</h1>
          </div>
        </Link>
        <div className='flex flex-row justify-center items-center space-x-10'>
        <div className='flex-row flex cursor-pointer items-center space-x-3'>
          {routes.map((route) => (
            <NavLink key={route.id} to={route.path}>
              <h1 className='text-xl font-bold items-center font-serif text-white text-center mx-2'>{route.name}</h1>
            </NavLink>
          ))}
        </div>
        <div className='hidden md:inline-flex lg:inline items-center pb-3'>
          <a href='mailto:kiritideepak@gmail.com'>
          <button className='bg-indigo-600 border border-indigo-900 items-center rounded mx-4 px-3 py-2 drop-shadow-lg cursor-default font-serif text-white font-bold hover:bg-indigo-900 hover:text-white'>Hire Me</button>
          </a>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
