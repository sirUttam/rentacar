import React from "react";
import TitleSection from "../../UI/TitleSection";
import Car from "../../../assets/Car.png";
import Scorpio from "../../../assets/Scorpio.png";
import Hiace from "../../../assets/Hiace.png";
import TataSumo from "../../../assets/TataSumo.png";

function AvailableCars() {
  const Data = [
    {
      title: "car",
      image: Car,
    },
    {
      title: "Scorpio",
      image: Scorpio,
    },
    {
      title: "Hiace",
      image: Hiace,
    },
    {
      title: "TataSumo",
      image: TataSumo,
    },
  ];
  return (
    <div className="w-11/12 mx-auto h-fit grid gap-10">
      <div>
        <TitleSection
          subtitle={"Available Now"}
          title={"See Currently"}
          secondSection={"Available Cars"}
          description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, quia,
 voluptas, doloremque, quos, velit,`}
        />
      </div>
      <div className="grid md:grid-cols-4 gap-10 lg:gap-20">
        {Data.map((val, i) => {
          return (
            <div className="flex flex-col gap-2">
              <img
                src={val.image}
                alt={val.title}
                className="w-full h-full object-contain"
              />
              <div className="text-center text-xl font-medium">{val.title}</div>
            </div>
          );
        })}
      </div>
      <div className="w-fit mt-10 h-fit mx-auto rounded-full px-8 py-3   bg-primarycolor text-white cursor-pointer shadow-md shadow-gray-400 transition-all duration-700 delay-75 ease-in-out animate-bounce ">Load More</div>
    </div>
  );
}

export default AvailableCars;
