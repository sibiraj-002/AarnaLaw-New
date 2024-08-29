"use client"
import Footer from "@components/Footer"
import Insights from "@components/HomeComponent/Insights"
import Network from "@components/HomeComponent/Network"
import NumbersSpeak from "../components/HomeComponent/NumbersSpeak"
import OurCredentials from "@components/HomeComponent/OurCredentials"
import OurLegacy from "@components/HomeComponent/OurLegacy"
import Podcasts from "../components/HomeComponent/Podcasts"
import Testimonials from "../components/HomeComponent/Testimonials"
import WhatWeDo from "@components/HomeComponent/WhatWeDo"
import HomeBanner from "../components/HomeComponent/HomeBanner"


export default function Home() {
  return (
    <div className="">
      <HomeBanner />
      {/* <div className="flex flex-col">  */}
      {/* <div className="self-center flex flex-col justify-end items-center mt-40 text-center gap-8">
          <h1 className="text-white text-[50px] font-semibold">
            Client-Centric Problem Solving
          </h1>
          <p className="text-white text-xl w-1/2">
            We are a counsel-led Indian legal advisory representing India and
            her people across the world in diverse areas of expertise.
          </p>
          <button className="bg-white text-custom-red px-6 py-2 hover:bg-custom-red hover:text-white">
            Contact Us
          </button>
        </div> */}
      {/* </div> */}
      <Insights />

      <Podcasts />
      <WhatWeDo />
      <OurLegacy />
      <NumbersSpeak />
      <Testimonials />
      <OurCredentials />
      <Network />
      <Footer />
    </div>
  )
}
