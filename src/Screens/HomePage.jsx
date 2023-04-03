import React from 'react'
import { FiDownload } from 'react-icons/fi'
import devloper from '../imgs/developer.png'


function HomePage() {
    return (
        <div className='w-full h-full mb-20'>
            <div className='w-full h-full justify-center content-center flex flex-col lg:flex-row'>
                <div className='justify-center content-center flex flex-col mt-10 lg:mt-60 space-y-4 lg:w-6/12 ml-10'>
                    <h1 className='text-4xl font-bold text-white uppercase text-left'>hi, iam deepak</h1>
                    <p className='text-3xl font-bold font-serif text-white uppercase'>front-end developer</p>
                    <a download='Resume.pdf' href='src\assets\Resume.pdf' >
                        <button className='bg-indigo-400 rounded p-3 drop-shadow-lg hover:bg-indigo-900 hover:text-white duration-100 flex flex-row text-center justify-center content-center'>
                            <FiDownload className='text-2xl' />
                            <h1 className='text-sl font-bold font-serif px-2'>Download</h1>
                        </button>
                    </a>
                </div>
                <div className='w-full h-full justify-end content-center flex lg:w-6/12'>
                    <img src={devloper} className='w-full h-full rounded-lg drop-shadow-lg' />
                </div>
            </div>
        </div>
    )
}

export default HomePage
