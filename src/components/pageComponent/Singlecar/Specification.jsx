import React from 'react'

function Specification({location}) {
  const data=[
    {
      title:'Name',
      value:location &&
      location.state &&
      location.state.data &&
      location.state.data.title
    },
    {
      title:'Acceleration',
      value:"0-100 Km/h in 9.9 sec"
    },
    {
      title:'Colour',
      value:"Black"
    },
    {
      title:'Seat Count',
      value:"5"
    },
    {
      title:'Gear Box',
      value:"Manual"
    },
    {
      title:'Door Count',
      value:"4"
    },
    {
      title:'Fuel Type',
      value:"Petrol"
    },
    {
      title:'Car Brand',
      value:"Renault"
    },
    {
      title:'Engine Volume',
      value:"1171cc"
    },
  ]
  return (
    <div className="flex flex-col gap-5">
    <div className="text-lg  font-semibold">Full Specifications</div>
    <div className="flex flex-col gap-3 ">
     {
      data.map((val,i)=>{
        return(
          <div key={i} className={`grid grid-cols-5 font-medium  ${i===data.length-1?"border-0":"border-b"} text-sm  py-2 px-2  border-gray-700 gap-2`}>
          <div className=" col-span-2">{val.title}:</div>
          <div className="col-span-3">
            {val.value}
          </div>
        </div>
        )
      })
     }
    </div>
  </div>
  )
}

export default Specification