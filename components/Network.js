import React from "react"
import Image from "next/image"

const Network = () => {
  return (
    <div className="flex flex-col items-center gap-10 mb-14 p-8">
      <h1 className="text-custom-blue text-xl md:text-2xl font-semibold">
        A Network Of 75+ Lawyers Around The World
      </h1>
      
      <iframe className="" src="https://www.google.com/maps/d/embed?mid=1VcQJ5rncecjuzGEyGAVCekUkRYoLUpQ&ehbc=2E312F" width="100%" height="680"></iframe>
       
      <button className="border border-custom-red px-6 py-2 text-custom-red hover:bg-custom-red hover:text-white">
        Contact Our Experts
      </button>
    </div>
  )
}

export default Network


