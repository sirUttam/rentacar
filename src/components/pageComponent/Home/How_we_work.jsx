import React from 'react'
import Location from '../../../assets/Location.png'
import Calendar from '../../../assets/Calendar.png'
import CarLogo from '../../../assets/CarLogo.png'
import TitleSection from '../../UI/TitleSection'

function How_we_work() {
  const Data=[
    {
      title:"Choose Location",
      desc:'Choose Your Locaion And Find Your Best Car',
      image:Location
    },
    {
      title:"Pick Up Date",
      desc:'Select Your Pick Up Date And Time To Book Your Car',
      image:Calendar
    },
    {
      title:"Book Your Car",
      desc:'Book Your Car And We Will Deliver it Directly To You',
      image:CarLogo
    },
  ]
  return (
    <div className='bg-gray-200'>
      <div className='pt-20 pb-4'>
        <TitleSection
        title={'How'}
        secondSection={'It Works'}
        />
      </div>
      <div className='w-11/12 grid md:grid-cols-3 mx-auto gap-10 md:gap-0  pb-28  '>
      {
        Data.map((val,i)=>{
          return (
            <div className='flex flex-col justify-center items-center gap-3'>
                <img src={val.image} alt={val.title} className={`${i==2?"h-20  aspect-square object-cover":"h-14 aspect-square object-contain"}`} />
              <div className='text-xl font-medium  '> {val.title}</div>
              <div className=' w-10/12 md:w-full lg:w-9/12 mx-auto text-center'>{val.desc}</div>

            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default How_we_work