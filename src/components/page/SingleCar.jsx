import React from "react";
import { useLocation } from "react-router-dom";

// import Card from "../UI/Card";
import SingleBanner from "../UI/SingleBanner";
import Pricing from "../pageComponent/Singlecar/Pricing";
import Review from "../pageComponent/Singlecar/Review";
import Specification from "../pageComponent/Singlecar/Specification";
import SimilarCars from "../UI/SimilarCars";
import BookingForm from "../pageComponent/Singlecar/BookingForm";
import ReviesShow from "../pageComponent/Singlecar/ReviesShow";

function SingleCar() {
  const location = useLocation();

  console.log(location);
  return (
    <div className="flex flex-col gap-10 pb-10">
      <div className="relative">
        <SingleBanner
          subtitle={""}
          titleHead={
            location &&
            location.state &&
            location.state.data &&
            location.state.data.title
          }
          buttons={false}
          image={
            location &&
            location.state &&
            location.state.data &&
            location.state.data.image
          }
          video={false}
        />
        <div className="absolute z-40 -bottom-14 left-0  px-10 rounded-2xl right-0 w-10/12 mx-auto shadow-md border-2  bg-white ">
          <div className="border-b-2 py-4 flex flex-col gap-2 border-primarycolor  ">
            <div className="text-primarycolor font-semibold">Car Features</div>
            <div className="text-3xl text-primarycolor font-semibold">
              {location &&
                location.state &&
                location.state.data &&
                location.state.data.title}
            </div>
          </div>
          <div className="py-6 capitalize grid grid-cols-3 text-sm gap-4 gap-x-44">
            <div className="grid grid-cols-2">
              <div className="capitalize  font-semibold">acceleration:</div>
              <div>0-60 km/h in 5s</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="capitalize font-semibold">Gear Box:</div>
              <div>
                {location &&
                  location.state &&
                  location.state.data &&
                  location.state.data.car_structure}
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="capitalize font-semibold">Car Colour:</div>
              <div>Red</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="capitalize font-semibold">Total Seats</div>
              <div>
                {location &&
                  location.state &&
                  location.state.data &&
                  location.state.data.seats}
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="capitalize font-semibold">Total Doors</div>
              <div>5</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="capitalize font-semibold">Fuel:</div>
              <div>
                {location &&
                  location.state &&
                  location.state.data &&
                  location.state.data.type}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-10/12 mt-20 grid grid-cols-8 gap-20  mx-auto">
        <div className="col-span-5 flex flex-col gap-6">
          <div className="h-[500px] w-full bg-gray-200 rounded-lg group">
            <img
              src={
                location &&
                location.state &&
                location.state.data &&
                location.state.data.image
              }
              alt={
                location &&
                location.state &&
                location.state.data &&
                location.state.data.title
              }
              className="h-full w-full group-hover:scale-110 transition-all duration-700 delay-75 ease-in-out object-cover"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="font-semibold text-2xl ">
              General <span className="text-primarycolor">Information</span>
            </div>
            <div className="text-sm text-gray-600 leading-relaxed">
              {location &&
                location.state &&
                location.state.data &&
                location.state.data.description}
            </div>
          </div>
          <BookingForm />
          <ReviesShow />
        </div>
        <div className="col-span-3 border-2 h-fit flex flex-col gap-14 p-4 rounded-lg">
          <Specification location={location} />
          {/* pricing */}
          <Pricing />
          <Review />
        </div>
      </div>

      {/* similar cars */}
      <SimilarCars />
    </div>
  );
}

export default SingleCar;
