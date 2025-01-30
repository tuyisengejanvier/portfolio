import React from 'react'
import logo from "../assets/logo.jpeg"
import {FaFacebookSquare,
FaDribbbleSquare,
FaGitSquare,
FaTwitterSquare,
FaInstagramSquare
 }from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px]  mx-auto py-16 px-4 grid lg:grid-cols-3 pag-8 text-gray-300'>
        <div>
            <h1 className='w-full text-3xl font-blod text-[#03b500] m-4'>Menyanibi.Media</h1>
            <img className='w-60 h-70 list-image-[url(checkmark.png)]  border-r-4 bg-white ' src= {logo} alt='/' />
            <p className='py-4'>Thank you to be hare in this wabesite Menyanibi.media. You can read more about the terms </p>
            <div className='flex justify-between my-6 md:w-[75%]'>
                <FaFacebookSquare size={30}/>
                <FaInstagramSquare size={30}/>
                <FaTwitterSquare  size={30}/>
                <FaGitSquare  size={30}/>
                <FaDribbbleSquare  size={30}/>
            </div>
        </div>
        
       <div className='lg:col-span-2 flex justify-between mt-6'>
          <div>
            <h6 className='font-medium text-gray-400'>Solution</h6>
            <ul>
                <li className='py-2 text-sm'>Analytics</li>
                <li className='py-2 text-sm'>Marketing</li>
                <li className='py-2 text-sm'>Commerce</li>
                <li className='py-2 text-sm'>Insights</li>
            </ul>
          </div>
        

        
        <div>
            <h6 className='font-medium text-gray-400'>Legal</h6>
            <ul>
                <li className='py-2 text-sm'>Claim</li>
                <li className='py-2 text-sm'>police</li>
                <li className='py-2 text-sm'>Terms</li>
                <li className='py-2 text-sm'>Insights</li>
            </ul>
        </div>
  
       
          <div>
            <h6 className='font-medium text-gray-400'>Support</h6>
            <ul>
                <li className='py-2 text-sm'>Pricing</li>
                <li className='py-2 text-sm'>Document</li>
                <li className='py-2 text-sm'>Guides</li>
                <li className='py-2 text-sm'>API Startus</li>
            </ul>
          </div>
     
     
          <div>
            <h6 className='font-medium text-gray-400'>Company</h6>
            <ul>
                <li className='py-2 text-sm'>About</li>
                <li className='py-2 text-sm'>Blog</li>
                <li className='py-2 text-sm'>Jobs</li>
                <li className='py-2 text-sm'>Press</li>
            </ul>
          </div>
       
        
         
    </div>
    </div>
  )
}

export default Footer