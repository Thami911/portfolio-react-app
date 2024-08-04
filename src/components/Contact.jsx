import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-black flex justify-center itmes-center p-4'>
        <form method='POST' action='https://getform.io/f/byvpqnza' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-700 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>You can submit the form below or Send me an Email -- thamimncwabe@gmail.com</p>
            </div>
            <input type='text' placeholder='Name' name='name' className='p-2' />
            <input type='email' placeholder='Email' name='email' className='my-4 p-2' />
            <textarea name='message'placeholder='Message' rows='10' className='p-2'></textarea>
            <button className='text-white border-2 hover:bg-gray-700 hover:border-gray-700 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact