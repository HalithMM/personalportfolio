import React from 'react'
import { TypeAnimation } from 'react-type-animation';
const Landing = () => {
  return (
    <div id='home' className=' md:w-[90%] mt-15 mx-auto'>
        <h1 className='md:text-6xl pt-10 text-4xl text-white'>Mohamed Halith M</h1>
        <TypeAnimation
            sequence={[
                '-------------------Web Developer',
                1000,
                '-------------------UI/UX Designer',
                1000,
            ]}
            wrapper="span"
            speed={50}
            className='text-2xl text-white md:relative left-35 pt-2'
            style={{display: 'inline-block' }}
            repeat={Infinity}
        />
         
    </div>
  )
}

export default Landing
