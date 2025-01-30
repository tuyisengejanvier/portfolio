import React from 'react'
import { ReactTyped } from "react-typed";
const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[96px] w-full h-screen mx-auto text-center flex-col justify-center'>
           <p className='text-[#03b500] font-bold p-2 '>GROWING WITH MENYANIBI.MEDIA</p>
           
           <h1 className='md:text-7xl sm:test-6xl text-4xl font-bold md:py-6'>Grow with menyanibi.media </h1>
           <div className='flex justify-center items-center'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Achieve victory for </p>
           <ReactTyped 
           className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-2 pl-2'
           strings={['DRIVING','TECHNOLOGY','LANGUAGES']}
            typedSpeed={120} 
            backSpeed={140} 
            loop/>
           </div>
           <p className='md:text-2xl text-xl font-bold text-gray-500'>I encourage you to deepen you knowledge in the following areas: technologe,driving,langues</p>
           <button className='bg-[#facc15] w-[200px] rounded-md font-medium my-6 mx-auto p-1 px-6'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero