import React from 'react'

function Review() {
  return (
    <div className="flex flex-col gap-4">
    <div className="text-md font-semibold">Please Provide us with Review</div>
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <label className="capitalize font-medium text-sm">name</label>
        <input type="text" placeholder="enter your name" className="border border-gray-400 p-2 rounded-md placeholder:text-sm text-sm placeholder:capitalize" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="capitalize font-medium text-sm">Image</label>
        <input type="file" placeholder="enter your name" className="border border-gray-400 p-2 rounded-md placeholder:text-sm text-sm placeholder:capitalize" />
      </div>
      <div className="flex flex-col gap-2">
        <label className="capitalize font-medium text-sm">Rating</label>
        <input type="text" placeholder="enter rating" className="border border-gray-400 p-2 rounded-md placeholder:text-sm text-sm placeholder:capitalize" />
      </div>
      <div className="flex flex-col gap-2">
        <label className="capitalize font-medium text-sm">Message</label>
        <textarea rows={9} placeholder="enter your message" className="border resize-none border-gray-400 p-2 rounded-md placeholder:text-sm text-sm placeholder:capitalize" ></textarea>
      </div>
      <div className="w-full h-full bg-primarycolor text-sm hover:scale-110 hover:shadow-lg transition-all duration-700 delay-150 ease-in-out cursor-pointer text-white text-center py-2 mt-4 rounded-md">Submit Review</div>
    </div>
  </div>
  )
}

export default Review