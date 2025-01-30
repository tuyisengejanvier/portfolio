import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4' >
            <h1 className='md:text-xl sm:text-3xl text-2xl flont-bold py-2'>Do you want tips and ways to improve your 
              learning process?</h1>
            <p>We are here to for you</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center gap-2 justify-between w-full'>
                 <input className='p-3 flex w-full rounded-md text-black' type='email' placeholder='Enter Email'/>
                 <button className='flex space-x-4 bg-[#0be200] text-black w-[200px] rounded-md font-medium my-6 px-2  py-3'>Notify Me</button>
                </div> 
                <p>Thank you somuch if you like this <span className='bg-[#fcc61f] p-1 rounded-md'>click here </span> </p>
            </div>
           
        </div>
         
    </div>
  )
}

export default Newsletter