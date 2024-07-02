import Image from "next/image"
import React from "react"

const Network = () => {
  return (
    <div className="flex flex-col items-center gap-10 mb-14 p-8">
      <h1 className="text-custom-blue text-xl md:text-2xl font-semibold">
        A Network Of 75+ Lawyers Around The World
      </h1>

      <div className="relative w-full">
        <div className="w-10/12 mx-auto">
          <Image
            src="/home-page/world-map.svg"
            width={1000}
            height={500}
            className="w-full"
            alt="World Map"
          />
        </div>
        <div className="absolute bottom-[37%] left-[47%] md:bottom-[58%] md:left-[66%] sm:bottom-[8%] sm:left-[6%] ">
          <div className="md:space-y-7 space-y-3 ms-5">
            <button
              data-popover-target="new-delhi"
              type="button"
              className="text-white text-xs bg-custom-red hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium md:text-sm px-2 md:px-5 py-1 text-center dark:bg-custom-red dark:hover:bg-red-700 dark:focus:ring-red-700"
            >
              New Delhi
            </button>

            <div
              data-popover
              id="new-delhi"
              role="tooltip"
              className="absolute z-10 invisible inline-block text-center text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
            >
              <div className="px-3 py-2 bg-custom-red text-white">
                <p>
                  No. 53 Sundernagar, <br /> New Delhi - 110003
                </p>
                <span>- - - - - - - - - - - - - - - - - - - - - - </span>
                <p>mail@aarnalaw.com</p>
                <p>+91 11 4350 5878</p>
              </div>
              <div data-popper-arrow></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-[37%] right-[47%] md:bottom-[50.5%] md:right-[32.9%]">
          <div className="md:space-y-7 space-y-3 ms-5">
            <button
              data-popover-target="popover-bottom"
              data-popover-placement="bottom"
              type="button"
              className="text-white bg-custom-red hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium text-xs md:text-sm px-2 md:px-5 py-1 text-center dark:bg-custom-red dark:hover:bg-red-700 dark:focus:ring-red-700"
            >
              Mumbai
            </button>

            <div
              data-popover
              id="popover-bottom"
              role="tooltip"
              className="absolute z-10 invisible inline-block text-center text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
            >
              <div className="px-3 py-2 bg-custom-red text-white">
                <p>
                  No. 109, DBS Heritage, <br /> Prescott Road, Fort, <br />{" "}
                  Mumbai - 400001
                </p>
                <span>- - - - - - - - - - - - - - - - - - - - - - </span>
                <p>mail@aarnalaw.com</p>
                <p>+022 4077 9109</p>
              </div>
              <div data-popper-arrow></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-[37%] left-[47%] md:bottom-[46%] md:left-[66%]">
          <div className="md:space-y-7 space-y-3 ms-5">
            <div className="flex gap-3 justify-center ms-6">
              <button
                data-popover-target="popover-bottom-a"
                data-popover-placement="bottom"
                type="button"
                className="text-white bg-custom-red hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium text-xs md:text-sm px-2 md:px-5 py-1 text-center dark:bg-custom-red dark:hover:bg-red-700 dark:focus:ring-red-700"
              >
                Bengaluru
              </button>

              <div
                data-popover
                id="popover-bottom-a"
                role="tooltip"
                className="absolute z-10 invisible inline-block text-center text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
              >
                <div className="px-3 py-2 bg-custom-red text-white">
                  <p>
                    No. 5, 2nd Main Road <br /> Vyalikaval, <br /> Bengaluru -
                    560003
                  </p>
                  <span>- - - - - - - - - - - - - - - - - - - - - - </span>
                  <p>mail@aarnalaw.com</p>
                  <p>+91 80 2356 6792</p>
                  <p>+91 80 2334 9955</p>
                  <p>+91 80 2336 8494</p>
                </div>
                <div data-popper-arrow></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="border border-custom-red px-6 py-2 text-custom-red hover:bg-custom-red hover:text-white">
        Contact Our Experts
      </button>
    </div>
  )
}

export default Network
