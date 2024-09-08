import React from "react";
import TitleSection from "../../UI/TitleSection";
import Car from "../../../assets/Car.png";
import Scorpio from "../../../assets/Scorpio.png";
import Hiace from "../../../assets/Hiace.png";
import TataSumo from "../../../assets/TataSumo.png";
import Card from "../../UI/Card";
import { Link } from "react-router-dom";

function AvailableCars() {
  const Data = [
    {
      title: "car",
      image: Car,
      seats: 5,
      type: "hybrid",
      car_structure: "automatic",
    },
    {
      title: "Scorpio",
      image: Scorpio,
      seats: 5,
      type: "hybrid",
      car_structure: "automatic",
    },
    {
      title: "Hiace",
      image: Hiace,
      seats: 5,
      type: "hybrid",
      car_structure: "automatic",
    },
    {
      title: "TataSumo",
      image: TataSumo,
      seats: 5,
      type: "hybrid",
      car_structure: "automatic",
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
      <div className="grid md:grid-cols-4 gap-10 lg:gap-5">
        {Data.map((val, i) => {
          return (
            <Card
            key={i}
            title={val.title}
            image={val.image}
            seats={val.seats}
            car_structure={val.car_structure}
            type={val.type}
            alldata={val}
          />
          );
        })}
      </div>
      <Link to={'/cars'} className="w-fit mt-10 h-fit mx-auto rounded-full px-8 py-3   bg-primarycolor text-white cursor-pointer shadow-md shadow-gray-400 transition-all duration-700 delay-75 ease-in-out animate-bounce ">
        Load More
      </Link>
    </div>
  );
}

export default AvailableCars;
