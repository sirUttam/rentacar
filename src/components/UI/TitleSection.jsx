import React from 'react'

function TitleSection({description,subtitle,title,secondSection}) {
  return (
    <div className='text-center flex flex-col gap-3'>
      <div className='capitalize  font-medium text-primarycolor'>{subtitle}</div>
      <div className='text-3xl font-semibold capitalize'> {title} <span className='text-primarycolor'>{secondSection}</span></div>
      <div className='text-gray-500 w-11/12 lg:w-6/12 mx-auto'>{description}</div>
    </div>
  )
}

export default TitleSection 