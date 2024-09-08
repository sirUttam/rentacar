import React from 'react'
import TitleSection from './TitleSection';
import Card from './Card';
import Car from "../../assets/Car.png";
import Scorpio from "../../assets/Scorpio.png";
import Hiace from "../../assets/Hiace.png";
import TataSumo from "../../assets/TataSumo.png";
function SimilarCars() {
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
    <div className="w-10/12 flex flex-col gap-8 mx-auto">
    <TitleSection
      title={"Similar"}
      secondSection={"cars"}
      description={"similar cars"}
    />
    {/* <div className="flex flex-col gap-2">
      <div className="text-4xl capitalize font-semibold">Similar <span className="text-primarycolor">cars</span></div>
      <div className="text-gray-500 font-medium text-sm">Similar Cars</div>
    </div> */}

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
  </div>
  )
}

export default SimilarCars