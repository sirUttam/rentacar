import React from "react";
import girl from "../../../assets/Girl.png";
import CarIcons from "../../../assets/CarIcon_.png";
import LocationIcon from "../../../assets/LocationIcon.png";
import CarIcon from "../../../assets/CarIcon.png";

function Aboutsection() {
  return (
    <div className="bg-gray-100 min-h-96 py-20 w-full">
      <div className="grid lg:grid-cols-3 gap-20 w-10/12 mx-auto">
        <div className="md:col-span-2 flex w-full h-full flex-col gap-6 justify-center">
          <div className="flex flex-col gap-2">
            <div className="font-medium text-lg">
              Help you to find your next car easily
            </div>
            <div className="text-4xl md:text-5xl font-semibold">
              Welcome to <span className="text-primarycolor">Rent</span> Car{" "}
              <span className="text-secondarycolor">Nepal</span>
            </div>
          </div>
          <div className="">
            Winged, good, male fourth abundantly dominion second it tree over
            thing that may tree. Signs fish made tree you days seas heaven.
            Called seas, shall isn’t. 2900
          </div>
          <div className="w-full pt-6 grid grid-cols-3  lg:grid-cols-5 gap-10">
            <div>
              <img
                src={CarIcons}
                className="w-6/12 mx-auto aspect-square  object-contain"
              />
              <div className="text-center capitalize font-medium pt-2">
                Fast & Easy Booking
              </div>
            </div>
            <div>
              <img
                src={LocationIcon}
                className="w-6/12 mx-auto aspect-square object-contain "
              />

              <div className="text-center capitalize font-medium pt-2">
                Many Pickup Locations
              </div>
            </div>
            <div>
              <img
                src={CarIcon}
                className="w-6/12 mx-auto aspect-square  object-contain"
              />

              <div className="text-center capitalize font-medium pt-3">
                No Booking Charge
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full hidden lg:block">
          <img
            src={girl}
            className="h-full w-full object-cover"
            alt="about section"
          />
        </div>
      </div>
    </div>
  );
}

export default Aboutsection;
