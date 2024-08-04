import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-black'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-gray-300'>Hi, My name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-gray-300'>Thamsanqa Mncwabe</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-gray-500'>I'm a Front-End Developer.</h2>
            <p className='text-gray-400 py-4 max-w-[700px]'>I'm a front-end develpoer with the ambitions to be a Full Stack develpoer but at the moment I specialize in building User Interfaces and responsive web applications, while I'm learnig back-end technologies as well.</p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-slate-600 hover:border-slate-600'>View Work
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-2' />
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home