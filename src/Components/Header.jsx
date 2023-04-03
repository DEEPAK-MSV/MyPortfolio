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
    <div>
      <div className='w-full justify-between content-center my-5 flex flex-row cursor-default'>
        <Link to='/'>
          <div className='flex flex-row mx-5 cursor-default'>
            <FaDyalog className='text-3xl font-bold font-serif text-white text-center drop-shadow-2xl' />
            <h1 className='text-3xl font-bold font-serif text-white text-center'>Portfolio</h1>
          </div>
        </Link>
        <div className='flex flex-row space-x-10'>
        <div className='flex-row flex cursor-pointer space-x-3'>
          {routes.map((route) => (
            <NavLink key={route.id} to={route.path}>
              <h1 className='text-xl font-bold font-serif text-white text-center mx-2'>{route.name}</h1>
            </NavLink>
          ))}
        </div>
        <div className='sd:hidden'>
          <a href='mailto:deepakkiriti.m.s.v@gmail.com'>
          <button className='bg-indigo-600 border border-indigo-900 rounded mx-4 px-3 py-2 drop-shadow-lg cursor-default font-serif text-white font-bold hover:bg-indigo-900 hover:text-white'>Hire Me</button>
          </a>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
