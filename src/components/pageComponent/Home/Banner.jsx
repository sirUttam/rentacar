import React from "react";

function Banner({ image, titleHead, titleBody, buttons, subtitle, video }) {
  return (
    <div className="relative overflow-hidden">
      {video && (
        <video
          autoPlay
          muted
          loop
          className="md:h-[640px] h-[500px]    lg:h-screen object-cover w-screen  "
        >
          <source src={image} type="video/mp4"  />
        </video>
      )}
      {!video && (
        <img
          src={image}
          className="md:h-[640px] h-[500px] lg:h-screen object-cover w-full   "
        />
      )}

      <div className="h-full lg:block hidden w-full absolute top-0 z-10 left-0 overflow-clip">
        <div className="h-screen absolute -top-2 aspect-square bg-black rotate-45 -translate-x-60 bg-opacity-45"></div>
        <div className="h-[800px] absolute -top-0 aspect-square bg-black rotate-45 -translate-x-72 bg-opacity-25"></div>
      </div>
      <div className=" absolute z-10 top-0 bottom-0 left-0 right-0 flex flex-col gap-10 justify-center items-center md:items-start w-11/12 mx-auto">
        <div className="text-primarycolor Playballfont text-5xl flex flex-col md:text-6xl leading-relaxed ">
          {subtitle && <div className=" text-white">{subtitle}</div>}
          <div>{titleHead} </div>
          <span className="md:ml-32"> {titleBody}</span>
        </div>
        {buttons === true && (
          <div className="flex gap-4 items-center md:pl-8">
            <button className="bg-primarycolor text-white rounded-full px-6 py-2  text-md">
              Rent a car
            </button>
            <button className="border-2 border-whitecolor rounded-full px-4 py-2 text-whitecolor">
              Become a Lender
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Banner;
