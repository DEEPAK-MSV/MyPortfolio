import React from 'react'
import { FiDownload } from 'react-icons/fi'
import devloper from '../imgs/developer.png'


function HomePage() {
    return (
        <div className='w-full h-full mb-20'>
            <div className='w-full h-full justify-center items-center flex flex-col md:flex-row lg:flex-row'>
                <div className='justify-center items-center flex flex-col mt-10 space-y-4 lg:w-6/12 '>
                    <h1 className='text-2xl lg:text-4xl font-bold text-white uppercase text-center'>hi, iam Deepak</h1>
                    <p className='text-lg lg:text-3xl font-bold font-serif text-white uppercase text-center flex-nowrap'>Front End developer</p>
                    <a download='Deepak_Angular_developer.pdf' href='https://drive.google.com/file/d/1mYjBlll1J_4jQ4wmr6husqI4XOvDLatT/view?usp=sharing' >
                        <button className='bg-indigo-400 mb-3 rounded p-3 drop-shadow-lg hover:bg-indigo-900 hover:text-white duration-100 flex flex-row text-center justify-center content-center'>
                            <FiDownload className='text-2xl' />
                            <h1 className='text-sl font-bold font-serif px-2'>Download</h1>
                        </button>
                    </a>
                </div>
                <div className='w-full h-full opacity-70 justify-center items-center flex'>
                    <img src={devloper} className='w-full h-full rounded-lg drop-shadow-lg' />
                </div>
            </div>
        </div>
    )
}

export default HomePage
