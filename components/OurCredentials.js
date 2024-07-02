"use client"

import Slider from "react-slick"
import Image from "next/image"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const OurCredentials = () => {
  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  }

  return (
    <>
      <div className="space-y-6 p-12 mb-10 text-center bg-[#EFEFEF]">
        <h1 className="text-2xl text-custom-red font-semibold mb-10">
          Our Credentials
        </h1>
        <div>
          <Slider {...settings}>
            <div className="flex items-center h-full">
              <div className="flex flex-col items-center space-y-3">
                <Image
                  src="/home-page/our-credentials-1.png"
                  width={200}
                  height={150}
                  alt=""
                />
                <h1 className="text-custom-blue text-2xl font-semibold text-center">
                  Who’s Who Legal 2023
                </h1>
                <p className="text-custom-blue text-center text-sm w-10/12">
                  Thought Leaders- India, Asset Recovery and Arbitration
                </p>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center space-y-3 mt-14">
                <Image
                  src="/home-page/our-credentials-2.png"
                  width={175}
                  height={74}
                  alt=""
                />
                <h1 className="text-custom-blue text-2xl font-semibold text-center">
                  ICC Fraudnet
                </h1>
              </div>
            </div>

            <div>
              <div className="flex flex-col items-center space-y-3 mt-3">
                <Image
                  src="/home-page/our-credentials-3.png"
                  width={120}
                  height={120}
                  alt=""
                />
                <h1 className="text-custom-blue text-2xl font-semibold text-center">
                  Chamber & Partners
                </h1>
                <p className="text-custom-blue text-center text-sm w-1/2">
                  Dispute Resolution: Arbitration-India
                </p>
              </div>
            </div>

            <div>
              <div className="flex flex-col items-center mt-3 space-y-3">
                <Image
                  src="/home-page/our-credentials-4.png"
                  width={100}
                  height={100}
                  alt=""
                />
                <h1 className="text-custom-blue text-2xl font-semibold text-center">
                  Legal 500 2020
                </h1>
                <p className="text-custom-blue text-center text-sm w-1/2">
                  Aarna Law feature in Legal 500
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  )
}

export default OurCredentials
