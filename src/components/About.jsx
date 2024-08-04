import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-black text-gray-300'>
  <div className='flex flex-col justify-center items-center w-full h-full'>
    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
      <div className='sm:text-right pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-gray-600'>About Me</p>
      </div>
      <div></div>
    </div>
    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
      <div className='sm:text-right text-4xl font-bold'>
        <p>Hi. I'm Thami, nice to meet you. Please take a look around.</p>
      </div>
      <div>
        <p>
          I am a talented frontend developer specializing in HTML, CSS, and JavaScript to create engaging user interfaces. With a passion for continuous learning, I'm actively expanding my skills in backend technologies, aiming to become a full-stack developer. My dedication and drive makes me a valuable asset to any development team.
        </p>
      </div>
    </div>
  </div>
</div>

  )
}

export default About