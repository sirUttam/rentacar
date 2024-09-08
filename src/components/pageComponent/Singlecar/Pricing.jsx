import React from "react";

function Pricing() {
  const data = [
    {
      title: 1,
      value: 4000,
    },
    {
      title: 3,
      value: 10000,
    },
    {
      title: 7,
      value: 20000,
    },
    {
      title: 30,
      value: 75000,
    },
  ];
  return (
    <div className="flex flex-col gap-7">
      <div className=" text-md font-semibold">
        <span className="text-primarycolor">Affordable,</span> Transparent
        Pricing for{" "}
        <span className="text-secondarycolor">Everyday Journey !</span>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          {data.map((val, i) => {
            return (
              <div
                key={i}
                className={`grid grid-cols-4 font-semibold  text-sm ${i==data.length-1?"border-0":"border-b"} py-2 px-2  border-gray-700 gap-2`}
              >
                <div className=" ">{val.title} Day :</div>
                <div className="col-span-3 text-gray-700">Nrs {val.value}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
