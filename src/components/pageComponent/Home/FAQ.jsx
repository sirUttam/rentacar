import React from "react";
import TitleSection from "../../UI/TitleSection";
import YellowCar from '../../../assets/YellowCar.png'
import BlackCar from '../../../assets/BlackCar.png'


function FAQ() {
  return (
    <div className="bg-gray-100 h-fit">
 <div className="w-11/12 min-h-[450px] py-20 relative mx-auto">
 <div className="">
        <img src={YellowCar} alt="" className="bottom-5 absolute md:h-48 md:w-48 lg:h-96 lg:w-96 lg:-left-10 h-14  object-contain " />
       <div className="md:pt-8 pt-0 lg:pt-0">
       <TitleSection
          title={"frequently"}
          subtitle={"FAQ"}
          secondSection={"asked questions"}
          description={`Use securing confined his shutters. Delightful as he it acceptance an solicitude discretion reasonably. Carriage we husbands advanced an perceive greatest.`}
        />
       </div>
        <img src={BlackCar} alt="" className="absolute top-6 md:-top-6 lg:-top-8 right-0 md:h-48 md:w-48 lg:h-96 lg:w-96 lg:-right-10 h-14 object-contain " />
      </div>
 </div>
    </div>
  );
}

export default FAQ;
