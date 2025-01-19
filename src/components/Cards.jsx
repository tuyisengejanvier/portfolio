import React from 'react'
import Logo from '../assets/logo.jpeg'
import Good from '../assets/good.jpeg'

import Best from '../assets/best.jpeg'
const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto  grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounder-lg hover:scale-105 duration-300'>
         <img className='w-20 mx-auto  bg-white ' src= {Logo} alt='/' />
         <h2 className='text-2xl text-center font-bold font-center py-8'>Single User</h2>
         <p className='text-center text-4xl font-blod'>$145</p>
         <div className='text-center font-medium'>
            <div className='py-2 border-b max-8 mt-8'>500 GB Store </div>
            <div className='py-2 border-b max-8'>1 Granted User </div>
            <div className='py-2 border-b max-8'>Send Up to 2 GB</div>
         </div>
         <button className='bg-[#1d4ed8] w-[200px] p-2 rounded-md font-medium my-6 mx-auto px-6'>Start Trial</button>
        </div>
        <div className='w-full shadow-xl flex flex-col md:my-0  bg-gray-100 p-4 my-4 rounder-lg hover:scale-105 duration-300'>
         <img className='w-20 mx-auto  bg-white bg-transparent' src= {Good} alt='/' />
         <h2 className='text-2xl text-center font-bold font-center py-8'>Single User</h2>
         <p className='text-center text-4xl font-blod'>$155</p>
         <div className='text-center font-medium'>
            <div className='py-2 border-b max-8 mt-8'>500 GB Store </div>
            <div className='py-2 border-b max-8'>1 Granted User </div>
            <div className='py-2 border-b max-8'>Send Up to 2 GB</div>
         </div>
         <button className=' text-black bg-[#fde047] w-[200px] p-2 rounded-md font-medium my-6 mx-auto px-6'>Start Trial</button>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounder-lg hover:scale-105 duration-300'>
         <img className='w-20 mx-auto  bg-white ' src= {Best} alt='/' />
         <h2 className='text-center text-2xl font-bold foKnt-center py-8 '>Single User</h2>
         <p className='text-center text-4xl font-blod'>$196</p>
         <div className='text-center font-medium'>
            <div className='py-2 border-b max-8 mt-8'>500 GB Store </div>
            <div className='py-2 border-b max-8'>1 Granted User </div>
            <div className='py-2 border-b max-8'>Send Up to 2 GB</div>
         </div>
         <button className='bg-[#db2777] w-[200px] rounded-md p-2 font-medium my-6 mx-auto px-6'>Start Trial</button>
        </div>
      
      </div>
    </div>
  )
}

export default Cards