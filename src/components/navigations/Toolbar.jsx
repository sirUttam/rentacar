import React, { useEffect, useState } from 'react'
import { RiMenuSearchLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

function Toolbar() {
  const [stuckdata,setStuckData]=useState(false)
  useEffect(() => {
    window.addEventListener('scroll',function(){
      if(this.scrollY>300){
        setStuckData(true)
      }else{
        setStuckData(false)
      }
    })
  
    return () => {
      window.removeEventListener('scroll',function(){
        if(this.scrollY>300){
          setStuckData(true)
        }else{
          setStuckData(false)
        }
      })
    
    }
  }, [stuckdata])
  
  return (
    <div className={`fixed top-0 ${stuckdata?"bg-black":'bg-transparent'} transition-all duration-700 delay-75 ease-in-out left-0 z-50 py-4  w-full `}>
      <div className='flex h-full items-center justify-between w-11/12 mx-auto'>
        <div className='text-white Playballfont text-2xl md:text-4xl'><span className='text-primarycolor'>Rent</span> Car <span className='text-secondarycolor'>Nepal</span></div>
        <div className='hidden relative z-50 lg:flex gap-6 text-whitecolor'>
          <Link to='/'>Home</Link>
          <Link to="/about">About</Link>
          <Link to="/cars">Cars</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          
          <Link to="/become_a_lender">Become a Lender</Link>


        </div>
        <div className='bg-primarycolor lg:block hidden px-6 py-2 rounded-full text-md font-medium text-whitecolor cursor-pointer shadow-md    hover:scale-110     hover:shadow-gray-600
         transition-all duration-1000 delay-0
          ease-in-out'>
          Rent cars
        </div>
        <div className='text-whitecolor text-3xl block lg:hidden'>
          <RiMenuSearchLine/>
        </div>
      </div>
    </div>
  )
}

export default Toolbar