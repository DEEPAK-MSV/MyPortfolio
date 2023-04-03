import React from 'react'
import {FiGithub, FiInstagram, FiLinkedin} from 'react-icons/fi'

function Footer() {
  return (
    <div className='w-full h-full'>
        <div className=' border border-t-indigo-400 mx-20'></div>
        <div className='flex flex-col text-center my-10'>
        <div className='justify-center flex content-center'>
            <h1 className='font-bold text-2xl text-white font-serif'>Follow Me</h1>
        </div>
        <div className='flex flex-row justify-center text-center space-x-5 mt-6'>
          <a href='https://github.com/DEEPAK-MSV' target='_blank'>
           <FiGithub className='bg-slate-700 rounded text-6xl drop-shadow-lg p-3 text-slate-400 hover:text-sky-600 '/>
          </a>
          <a href='https://www.linkedin.com/in/deepak-kiriti-7a1183224' target='_blank'>
           <FiLinkedin className='bg-slate-700 rounded text-6xl drop-shadow-lg p-3 text-slate-400 hover:text-sky-600 '/> 
          </a>
           <a href='https://www.instagram.com/tyrantdk/' target='_blank'><FiInstagram className='bg-slate-700 rounded text-6xl drop-shadow-lg p-3 text-slate-400 hover:text-sky-600 '/></a>
        </div>
        </div>
        <div className='justify-center text-center mb-4'>
            <h1 className='text-slate-400 text-2xl font-bold'>© 2023 React vite & Tailwind CSS Portfolio</h1>
        </div>
    </div>
  )
}

export default Footer