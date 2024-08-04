import React from 'react'
import Netflix from '../assets/netflix-ui.png'
import ReactUI from '../assets/react-ui.png'
import Gym from '../assets/gym-ui.png'
import Weather from '../assets/weather-ui.png'

const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-black'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-700'>My Work</p>
                    <p className='py-6'>Check out my recent work</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    <div style={{ backgroundImage: `url(${Netflix})` }} className='shadow-lg shadow-gray-500 group container rounded-md flex justify-center items-center mx-auto content-div h-60 bg-cover bg-center'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>ReactJS Application</span>
                            <div className='pt-8 text-center'>
                                <a href="https://react-netflix-c5881.web.app/"><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button></a>
                                <a href="https://github.com/Thami911/react-netflix"><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button></a>
                            </div>
                        </div>
                    </div>
                    
                    <div style={{ backgroundImage: `url(${ReactUI})` }} className='shadow-lg shadow-gray-500 group container rounded-md flex justify-center items-center mx-auto content-div h-60 bg-cover bg-center'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>ReactJS User Interface</span>
                            <div className='pt-8 text-center'>
                                <a href="https://gpt-react-omega.vercel.app/"><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button></a>
                                <a href="https://github.com/Thami911/gpt-react"><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button></a>
                            </div>
                        </div>
                    </div>
                    
                    <div style={{ backgroundImage: `url(${Gym})` }} className='shadow-lg shadow-gray-500 group container rounded-md flex justify-center items-center mx-auto content-div h-60 bg-cover bg-center'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>ReactJS Application</span>
                            <div className='pt-8 text-center'>
                                <a href="https://home-gym-hazel.vercel.app/"><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button></a>
                                <a href="https://github.com/Thami911/home-gym"><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button></a>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${Weather})` }} className='shadow-lg shadow-gray-500 group container rounded-md flex justify-center items-center mx-auto content-div h-60 bg-cover bg-center'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>VueJS Application</span>
                            <div className='pt-8 text-center'>
                                <a href="https://weather-app-jet-rho-21.vercel.app/"><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button></a>
                                <a href="https://github.com/Thami911/weather-app"><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work