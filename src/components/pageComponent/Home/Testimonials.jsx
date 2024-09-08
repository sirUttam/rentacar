import React from 'react'

import TitleSection from '../../UI/TitleSection'
import ReactStarsRating from 'react-awesome-stars-rating';
function Testimonials() {
  const Data=[
    {
      name:"Alexa Watson",
      location:"Los Angeles, CA",
      desc:'Tempor deserunt laborum fugiat elit et nisi culpa do. Dolor consectetur voluptate laborum mollit. In ipsum et fugiat duis ut Lorem. Nisi consequat est sint sunt duis labore aliqua nisi aliqua deserunt ut mollit qui mollit. Ut qui laborum id et aliquip reprehenderit.',
      image:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating:4.5
    },
    {
      name:"Nico Robin",
      location:"Los Angeles, CA",
      desc:'Tempor deserunt laborum fugiat elit et nisi culpa do. Dolor consectetur voluptate laborum mollit. In ipsum et fugiat duis ut Lorem. Nisi consequat est sint sunt duis labore aliqua nisi aliqua deserunt ut mollit qui mollit. Ut qui laborum id et aliquip reprehenderit.',
      image:'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating:4
    }, {
      name:"Franklin Dawson",
      location:"Los Angeles, CA",
      desc:'Tempor deserunt laborum fugiat elit et nisi culpa do. Dolor consectetur voluptate laborum mollit. In ipsum et fugiat duis ut Lorem. Nisi consequat est sint sunt duis labore aliqua nisi aliqua deserunt ut mollit qui mollit. Ut qui laborum id et aliquip reprehenderit.',
      image:'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating:4
    }
  ]
  return (
    <div className='w-10/12 md:w-11/12 lg:w-11/12 mx-auto h-fit grid gap-10'>
      <div>
        <TitleSection
        title={'clients'}
        secondSection={"Testimonials"}
        />
      </div>
      <div className='grid md:grid-cols-3 gap-5'>
        {
          Data.map((val,i)=>{
            return(
              <div className='flex flex-col gap-6 bg-gray-100 p-5 py-8 rounded-md'>
                <div>
                <ReactStarsRating  value={val.rating} className='flex' isEdit={false}   />
                </div>
                <div className='text-sm'>{val.desc}</div>
                <div className='flex items-center  gap-3'>
                  <img src={val.image} alt={val.name} className='h-14 w-14 rounded-full border-2 border-gray-200  object-cover bg-gray-200' />
                  <div className='text-md'>
                    <h1 className=' font-semibold text-primarycolor'>{val.name}</h1>
                    <div className=' text-sm text-gray-400'>{val.location}</div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Testimonials