import Image from "next/image"
import React from "react"

const WhatWeDo = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row">
      <div className="w-full md:w-1/2">
        <Image
          src="/home-page/What_we_do.jpg"
          width={683}
          height={456}
          className="w-full"
          alt=""
        />
      </div>
      <div className="w-full md:w-1/2 p-8">
        <div className="flex flex-col justify-between items-start h-full w-full md:w-5/6">
          <h1 className="text-custom-red text-2xl font-bold">What We Do</h1>
          <h2 className="text-custom-blue text-4xl font-semibold mt-4 md:mt-0">
            We are an award-winning advisory with an international perspective.
          </h2>
          <p className="text-custom-gray mt-4 md:mt-0">
            Our counsel-led, tech-enabled practice advises domestic, foreign and
            diasporic clients on a range of issues, equipping them to thrive in
            this global economy of international trade and fluid borders.
          </p>
          <button className="border border-custom-red px-6 py-2 text-custom-red hover:bg-custom-red hover:text-white mt-4 md:mt-0">
            Our Services
          </button>
        </div>
      </div>
    </div>
  )
}

export default WhatWeDo
