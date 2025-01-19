import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4' >
            <h1 className='md:text-4xl sm:text-3xl text-2xl flont-bold py-2'>Want tips & trick to optimize you flow?</h1>
            <p>IS better to thank God</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center gap-2 justify-between w-full'>
                 <input className='p-3 flex w-full rounded-md text-black' type='email' placeholder='Enter Email'/>
                 <button className='flex space-x-4 bg-[#db2777] text-black w-[200px] rounded-md font-medium my-6 px-2  py-3'>Notify Me</button>
                </div> 
                <p>Ikana ko ntakindi wakwitura Imana yaguhishuriye ubwiza bwayo <span className='bg-[#1d4ed8] p-1 rounded-md'>kandi ikaba ihora</span> </p>
            </div>
           
        </div>
         
    </div>
  )
}

export default Newsletter