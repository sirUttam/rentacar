import React from 'react'
import ReactStarsRating from "react-awesome-stars-rating";
import { useLocation } from 'react-router-dom';

function ReviesShow() {
  const location = useLocation();

  console.log(location);
  return (
    <div className="bg-gray-0 p-5 flex flex-col gap-8 rounded-md">
    <div className="text-xl text-secondarycolor capitalize font-semibold  rounded-md">
      2 review
    </div>
    <div className="flex flex-col gap-16">
      <div className="grid grid-cols-8">
        <div className="h-20 w-20 bg-red-500 overflow-clip rounded-full">
          <img
            src={
              location &&
              location.state &&
              location.state.data &&
              location.state.data.image
            }
            className="h-full w-full object-cover"
          />
        </div>
        <div className="col-span-7 flex flex-col gap-3 w-full">
          <div className="flex items-center pr-6 justify-between">
            <div className="text-lg font-semibold">Uttam Aryal</div>
            <div>
              <ReactStarsRating
                value={3.5}
                className="flex"
                isEdit={false}
              />
            </div>
          </div>
          <div className="text-sm">
            Aliquip eu excepteur nisi veniam eiusmod in eiusmod. Qui
            elit id minim aliqua anim exercitation nostrud. Eiusmod enim
            voluptate pariatur deserunt id ad dolore magna. Eu est velit
            aliquip ut nulla laboris. Ipsum dolor sunt ad consequat ex
            excepteur anim cillum tempor cupidatat laboris nostrud
            irure.
          </div>
        </div>
      </div>

      <div className="grid grid-cols-8">
        <div className="h-20 w-20 bg-red-500 overflow-clip rounded-full">
          <img
            src={
              location &&
              location.state &&
              location.state.data &&
              location.state.data.image
            }
            className="h-full w-full object-cover"
          />
        </div>
        <div className="col-span-7 flex flex-col gap-3 w-full">
          <div className="flex items-center pr-6 justify-between">
            <div className="text-lg font-semibold">Uttam Aryal</div>
            <div>
              <ReactStarsRating
                value={4.5}
                className="flex"
                isEdit={false}
              />
            </div>
          </div>
          <div className="text-sm">
            Aliquip eu excepteur nisi veniam eiusmod in eiusmod. Qui
            elit id minim aliqua anim exercitation nostrud. Eiusmod enim
            voluptate pariatur deserunt id ad dolore magna. Eu est velit
            aliquip ut nulla laboris. Ipsum dolor sunt ad consequat ex
            excepteur anim cillum tempor cupidatat laboris nostrud
            irure.
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ReviesShow