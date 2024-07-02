import Footer from "@components/Footer"
import Insights from "@components/Insights"
import Network from "@components/Network"
import NumbersSpeak from "@components/NumbersSpeak"
import OurCredentials from "@components/OurCredentials"
import OurLegacy from "@components/OurLegacy"
import Podcasts from "@components/Podcasts"
import Testimonials from "@components/Testimonials"
import WhatWeDo from "@components/WhatWeDo"

import HomeBanner from "../components/HomeBanner"

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
