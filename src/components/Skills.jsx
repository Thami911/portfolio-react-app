import React from 'react'
import CSS from '../assets/css.png'
import HTML from '../assets/html.png'
import FireBase from '../assets/firebase.png'
import Github from '../assets/github.png'
import JavaScript from '../assets/javascript.png'
import Node from '../assets/node.png'
import Reacting from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'
import Vercel from '../assets/vercel.png'
import Vuejs from '../assets/vuejs.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-black text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-gray-700'>Skills</p>
                <p className='py-4'>These are the Technologies I'm working on mastering</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-gray-400 hover:scale-110 duration-400'>
                    <img className='w-20 mx-auto' src={CSS} alt='css icon' />
                    <p>CSS</p>
                </div>
                <div className='shadow-md shadow-gray-400 hover:scale-110 duration-400'>
                    <img className='w-20 mx-auto' src={HTML} alt='html icon' />
                    <p>HTML</p>
                </div><div className='shadow-md shadow-gray-400 hover:scale-110 duration-400'>
                    <img className='w-20 mx-auto' src={JavaScript} alt='javascript icon' />
                    <p>JavaScript</p>
                </div><div className='shadow-md shadow-gray-400 hover:scale-110 duration-400'>
                    <img className='w-20 mx-auto' src={Reacting} alt='react icon' />
                    <p>ReactJS</p>
                </div>
                <div className='shadow-md shadow-gray-400 hover:scale-110 duration-400'>
                    <img className='w-20 mx-auto' src={Tailwind} alt='tailwind icon' />
                    <p>Tailwind CSS</p>
                </div>
                <div className='shadow-md shadow-gray-400 hover:scale-110 duration-400'>
                    <img className='w-20 mx-auto' src={Vuejs} alt='vue icon' />
                    <p>VueJS</p>
                </div>
                <div className='shadow-md shadow-gray-400 hover:scale-110 duration-400'>
                    <img className='w-20 mx-auto' src={Github} alt='github icon' />
                    <p>Github</p>
                </div>
                <div className='shadow-md shadow-gray-400 hover:scale-110 duration-400'>
                    <img className='w-20 mx-auto' src={Node} alt='node icon' />
                    <p>NodeJS</p>
                </div>
                <div className='shadow-md shadow-gray-400 hover:scale-110 duration-400'>
                    <img className='w-20 mx-auto' src={FireBase} alt='firebase icon' />
                    <p>FireBase</p>
                </div>
                <div className='shadow-md shadow-gray-400 hover:scale-110 duration-400'>
                    <img className='w-20 mx-auto' src={Vercel} alt='vercel icon' />
                    <p>Vercel</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills