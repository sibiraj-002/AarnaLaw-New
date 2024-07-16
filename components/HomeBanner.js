"use client";
import React from "react";
import BannerSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "@components/Navbar";

function HomeBanner() {
  var setting = {
    speed: 500,
    slidesToShow: 1,
    initialSlide: 1,
    slidesToScroll: 1,
    fade: false,
    autoplay: true,
    arrow: false,
    dots: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="text-center relative w-full mx-auto overflow-hidden md:h-screen">
      <Navbar />
      <div className="text-center">
        <BannerSlider {...setting} className="z-0">
          <div className="relative overflow-hidden">
            <img
              src="/home-page/home-banner-1.jpg"
              className="w-full lg:h-auto h-[500px] z-0"
              width={800}
              height={150}
              alt=""
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center text-center z-50">
              <p className="text-white lg:text-6xl text-3xl font-bold">
                Unlocking Abundance
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <img
              src="/home-page/home-banner-3.jpg"
              className="w-full lg:h-auto h-[500px] z-0"
              width={800}
              height={150}
              alt=""
              priority
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-50">
              <p className="text-white lg:text-6xl text-3xl font-bold">
                Client-Centric Problem Solving
              </p>
              <p className="text-white lg:text-2xl text-1xl mt-4">
                We are a counsel-led Indian legal advisory representing India
                and people across the world in diverse areas of expertise.
              </p>
              <button className="text-red-600 bg-white hover:bg-red-700 hover:text-white p-2 mt-8 rounded-none">
                Contact Us
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <img
              src="/home-page/home-banner-2.jpg"
              className="w-full lg:h-auto h-[500px] z-0"
              width={800}
              height={150}
              alt=""
              priority
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-50">
              <p className="text-white lg:text-6xl text-3xl font-bold">
                Rooted in India,
              </p>
              <p className="mt-4 text-white lg:text-6xl text-3xl font-bold">
                Global in Practice.
              </p>
            </div>
          </div>
        </BannerSlider>
      </div>
    </section>
  );
}

export default HomeBanner;
