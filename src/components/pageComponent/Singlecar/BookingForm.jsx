import React from 'react'

function BookingForm() {
  return (
    <div className="border-2 border-gray-200 rounded-md p-10 flex flex-col gap-6">
    <div className="text-primarycolor font-semibold text-xl">
      Book Now
    </div>
    <div className="grid grid-cols-2 gap-10 gap-y-4">
      <div className="flex flex-col gap-3">
        <div className="font-medium text-md">Pickup location</div>
        <select className="border border-gray-400 capitalize rounded-md p-2 w-full">
          <option>select a pickup location</option>
        </select>
      </div>
      <div className="flex flex-col gap-3">
        <div className="font-medium text-md">Pickup location</div>
        <select className="border border-gray-400 capitalize rounded-md p-2 w-full">
          <option>select a pickup location</option>
        </select>
      </div>
      <div className="flex flex-col gap-3">
        <div className="font-medium text-md">Pickup location</div>
        <input
          className="border border-gray-400  rounded-md p-2 w-full"
          type="date"
        />
      </div>
      <div className="flex flex-col gap-3">
        <div className="font-medium text-md">Pickup location</div>
        <input
          className="border border-gray-400 capitalize rounded-md p-2 w-full"
          type="time"
        />
      </div>
      <div className="flex flex-col gap-3">
        <div className="font-medium text-md">Pickup location</div>
        <input
          className="border border-gray-400  rounded-md p-2 w-full"
          type="date"
        />
      </div>
      <div className="flex flex-col gap-3">
        <div className="font-medium text-md">Pickup location</div>
        <input
          className="border border-gray-400 capitalize rounded-md p-2 w-full"
          type="time"
        />
      </div>
      <div className="w-full bg-secondarycolor text-white font-semibold hover:bg-primarycolor hover:shadow-lg hover:scale-105 cursor-pointer transition-all ease-in-out delay-75 duration-700  col-span-2 mt-5 text-center py-3 rounded-md">
        Book Now
      </div>
    </div>
  </div>
  )
}

export default BookingForm