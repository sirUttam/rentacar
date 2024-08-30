import React from 'react'
import { RiMenuSearchLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

function Toolbar() {
  return (
    <div className="bg-navigationcolor py-4  w-full ">
      <div className='flex h-full items-center justify-between w-11/12 mx-auto'>
        <div className='text-white Playballfont text-2xl md:text-4xl'><span className='text-primarycolor'>Rent</span> Car <span className='text-secondarycolor'>Nepal</span></div>
        <div className='hidden lg:flex gap-6 text-whitecolor'>
          <Link to='/'>Home</Link>
          <Link to="/about">About</Link>
          <Link to="/brands">Brands</Link>
          <Link to="/cars">Cars</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>


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