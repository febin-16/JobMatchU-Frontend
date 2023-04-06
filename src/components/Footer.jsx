import React from 'react'
import fb from "../assets/fb.png"
import insta from "../assets/insta.png"
import google from "../assets/google.png"
import youtube from "../assets/youtube.png"
import copy from "../assets/copy.png"
import twitter from "../assets/twitter.png";
function Footer(){
  return (
    <footer className='bg-gray-900 text-white absolute bottom-0 w-full'>
      <div className='flex  h-36 bg-[#ffffff19] '>
          <div className=' w-1/3'>
            <h1 className='mx-8 my-4'>JobMatchU</h1>
            <div className='hidden md:block sm:flex space-x-1 -my-2 mx-8'>
              <img  className='h-6  ' src={fb} alt="" />
              <img  className='h-6 ' src={twitter} alt="" />
              <img className='h-6 ' src={insta} alt="" />
              <img className='h-6 ' src={youtube} alt="" />
              <img className='h-6 ' src={google} alt="" />
            </div>  
            <img className='h-6 absolute bottom-2 mx-2' src={copy} alt="error" />
            <h1 className='absolute bottom-2 mx-12'>2023 JobMatchU</h1>
          </div>
          <div className='my-8 text-center w-1/3'>
            <h1 className=''>Contact Us</h1>
            <h1 className='my-3'>Phone</h1>
            <h1 className='my-3'>Email</h1>
          </div>
          <div className='text-center w-1/3 my-10'>
            <h1>About JobMatchU</h1>
            <h1 className='my-5'>Help Center</h1>
          </div>
      </div>

    </footer>
 
 )
}

export default Footer