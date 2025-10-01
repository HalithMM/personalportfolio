import React from 'react'

const Bio = () => {
  return (
    <div id='home' className='bio  md:w-[90%]  mx-auto bg-black md:flex items-center '>
        <div>
            <img src="/IMG_9609.JPG" className='md:w-7xl p-3 rounded-md rotate-1' alt="" />
        </div>
        <div>
            <h1 className='text-white text-5xl text-end'> <span className='text-gray-500'>I'm a</span> Software Developer <span className='text-gray-500'>Who loves </span> to Create awesome, big-scale apps with <span className='text-gray-500'>smooth</span>user interactions</h1>
        </div>
    </div>
  )
}

export default Bio
