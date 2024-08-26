import React from "react";
// import homeCar from '../../assets/homeCar.png'
import homeCar from "../../assets/video.mp4";

function Home() {
  return (
    <div>
      <div className="w-screen h-screen relative overflow-clip">
        {/* <img src={homeCar} className='w-full h-full object-cover'/> */}
        <video autoPlay muted loop className="w-screen h-full object-cover ">
          <source
            src={homeCar}
            type="video/mp4"
            className="w-full h-full object-cover"
          />
        </video>

        <div className="h-full w-full absolute top-0 z-20 left-0 overflow-clip">
          <div className="h-full absolute top-0 aspect-square bg-black rotate-45 -translate-x-44 bg-opacity-25"></div>
          <div className="h-full absolute top-0 aspect-square bg-black rotate-45 -translate-x-72 bg-opacity-45">
            {" "}
          </div>
        </div>
        <div className=" absolute z-50 top-0 bottom-0 left-0 right-0 flex flex-col gap-10 justify-center w-11/12 mx-auto">
          <h1 className="text-primarycolor Playballfont text-6xl leading-relaxed ">
            Unlock The Road <br />{" "}
            <span className="m-32"> To Posibilities</span>
          </h1>
          <div className="flex gap-4 items-center pl-8">
            <button className="bg-primarycolor text-white rounded-full px-6 py-2  text-md">
              Rent a car
            </button>
            <button className="border-2 border-whitecolor rounded-full px-4 py-2 text-whitecolor">
              Become a Lender
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
