import React from 'react'
import { Link } from 'react-router-dom'
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { TbManualGearboxFilled } from "react-icons/tb";
import { TiTick } from "react-icons/ti";

function Card(
  {
    image,
    title,
    seats,
    type,
    car_structure,
    alldata

  }
) {
  return (
    <Link
    to={`/cars/single_car/${JSON.stringify(title)}`}
    state={{
      data:alldata
    }}
    className="border border-gray-300 rounded-md p-2 h-full cursor-pointer group"
  >
    <div className="bg-gray-300 h-44 overflow-clip rounded-md">
      <img
        src={image}
        className="h-full w-full object-contain group-hover:rotate-6 group-hover:translate-y-1 group-hover:scale-125 transition-all duration-700 delay-75 ease-in-out "
      />
    </div>
    <div className="flex flex-col gap-4 pt-5 pb-6 px-2">
      <h1 className="text-xl font-semibold">{title}</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-100  capitalize rounded-full w-full  h-full  flex items-center justify-center px-5 py-2 text-xs "> <MdAirlineSeatReclineExtra className='text-xl mr-2' />

          {seats} seats
        </div>
        <div className="bg-gray-100  capitalize rounded-full w-full  h-full flex items-center justify-center  px-5 py-2 text-xs ">
        <BsFillFuelPumpFill className='text-lg mr-2' />

          {type}
        </div>
        <div className="bg-gray-100  capitalize rounded-full w-full  h-full flex items-center justify-center  px-5 py-2 text-xs ">
        <TbManualGearboxFilled className='text-lg mr-2'/>

          {car_structure}
        </div>
      </div>
      <div className="text-sm text-gray-500">
        <div className='flex items-center gap-2'><TiTick className='text-lg text-green-500' />No deposite</div>
        <div className='flex items-center gap-2'><TiTick className='text-lg text-green-500' />Insurance Included</div>

      </div>
      <div className="flex items-center justify-between">
        <div className="text-primarycolor">
          {" "}
          Rs. <span className="text-xl font-semibold">
            3000
          </span>{" "}
        </div>
        <div className="text-primarycolor border border-primarycolor group-hover:bg-primarycolor group-hover:text-white text-sm px-4 py-2 rounded-md">
          Book Now
        </div>
      </div>
    </div>
  </Link>
  )
}

export default Card