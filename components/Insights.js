// 'use client'
// import React, { useState, useRef, useEffect } from 'react';
// import InsightSlider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import InsightsCard from './InsightsCard'; // Import your InsightsCard component here
// import { insights } from '@utils/data';

// function HomeBanner() {
//   const [insightsData, setInsightsData] = useState([]);
//   const sliderRef = useRef(null);

//   useEffect(() => {
//     const fetchInsights = async () => { 
//       try {
//         const response = await fetch(
//           "https://www.aarnalaw.com/wp-json/wp/v2/posts?_embed"
//         );
//         const data = await response.json();
//         const latestInsights = data
//           .sort((a, b) => new Date(b.date) - new Date(a.date))
//           .slice(0, 3)
//           .map((item) => ({
//             ...item,
//             imageUrl: item["_embedded"]["wp:featuredmedia"][0]["source_url"],
//             title: item["yoast_head_json"]["title"],
//             desc: item["yoast_head_json"]["og_description"],
//           }));
//         setInsightsData(latestInsights);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchInsights();
//   }, []);

//   const NextArrow = () => (
//     <div className="transform -translate-y-1/2 right-4 z-10 cursor-pointer" onClick={() => sliderRef.current.slickNext()}>
//       <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
//         <g id="Group_49400" data-name="Group 49400" transform="translate(-1167 -1988)">
//           <circle id="Ellipse_133" data-name="Ellipse 133" cx="24" cy="24" r="24" transform="translate(1167 1988)" fill="#1d1d1d" />
//           <g id="Group_13142" data-name="Group 13142" transform="translate(-69.769 -3315.449)">
//             <g id="Group_158" data-name="Group 158" transform="translate(1248.88 5318.561)">
//               <path id="Path_96" data-name="Path 96" d="M0,0H12.534V12.605" transform="translate(8.913 0) rotate(45)" fill="none" stroke="#fff" strokeWidth="2" />
//             </g>
//           </g>
//         </g>
//       </svg>
//     </div>
//   );

//   const PrevArrow = () => (
//     <div className=" transform -translate-y-1/2 left-4 z-10 cursor-pointer" onClick={() => sliderRef.current.slickPrev()}>
//       <svg id="Group_49401" data-name="Group 49401" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
//         <circle id="Ellipse_133" data-name="Ellipse 133" cx="24" cy="24" r="24" fill="#1d1d1d" />
//         <g id="Group_13142" data-name="Group 13142" transform="translate(18.112 15.112)">
//           <g id="Group_158" data-name="Group 158" transform="translate(0)">
//             <path id="Path_96" data-name="Path 96" d="M0,12.605H12.534V0" transform="translate(17.776 8.913) rotate(135)" fill="none" stroke="#fff" strokeWidth="2" />
//           </g>
//         </g>
//       </svg>
//     </div>
//   );

//   const settings = {
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 2,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     arrows: true,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           infinite: true,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           infinite: true,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="flex flex-col md:flex-row bg-white md:absolute md:left-0 md:right-0 items-center gap-0 md:-mt-24 md:ml-24 md:pt-10">
//       <div className="flex flex-col items-center gap-7">
//         <h1 className="text-custom-red md:writing-mode-vertical-rl transform md:rotate-180 text-[80px] font-bold m-0 p-0">
//           Insights
//         </h1>
//       </div>
//       <div className="px-4 mx-auto max-w-screen-xl text-center overflow-hidden">
//         <InsightSlider ref={sliderRef} {...settings} className="z-0 gap-4">
//           {insightsData.map((item, index) => (
//             <InsightsCard key={index} imageUrl={item.imageUrl} title={item.title} desc={item.desc} />
//           ))}
//         </InsightSlider>
//       </div>
//     </div>
//   );
// }

// export default HomeBanner;


"use client"
import React, { useEffect, useRef, useState } from "react"
import InsightSlider from "react-slick"
import InsightsCard from "./InsightsCard"
import { leftArrow, rightArrow } from "@utils/Icon"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function HomeBanner() {
  const [insights, setInsights] = useState([])
  const sliderRef = useRef(null)

  useEffect(() => {
    const fetchInsights = async () => { 
      try {
        const response = await fetch(
          "https://www.aarnalaw.com/wp-json/wp/v2/posts?_embed"
        )
        const data = await response.json()
        const latestInsights = await data
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 2)
          .map((item) => ({
            ...item,
            imageUrl: item["_embedded"]["wp:featuredmedia"][0]["source_url"],
            title: item["yoast_head_json"]["title"],
            desc: item["yoast_head_json"]["og_description"],
          }))
        console.log(data)
        console.log(latestInsights)
        setInsights(await latestInsights)
      } catch (error) {
        console.log(error)
      }
    }

    fetchInsights()
  }, [])

  const NextArrow = () => (
    <div
      className="cursor-pointer bg-custom-blue text-white text-xl p-3 rounded-full hover:bg-custom-red"
      onClick={() => sliderRef.current.slickNext()}
    >
      {rightArrow}
    </div>
  )

  const PrevArrow = () => (
    <div
      className="cursor-pointer bg-custom-blue text-white text-xl p-3 rounded-full hover:bg-custom-red"
      onClick={() => sliderRef.current.slickPrev()}
    >
      {leftArrow}
    </div>
  )
  var setting = {
    speed: 500,
    slidesToShow: 2,
    initialSlide: 2,
    slidesToScroll: 1,
    fade: false,
    autoplay: false,
    arrow: false,
    dots: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="flex flex-col md:flex-row bg-white md:absolute md:left-0 md:right-0 items-center gap-0 md:-mt-24 md:ml-24 md:pt-10">
      <div className="flex flex-col items-center gap-7">
        <h1 className="text-custom-red md:writing-mode-vertical-rl transform md:rotate-180 text-[80px] font-bold m-0 p-0">
          Insights
        </h1>
        <div className="md:flex hidden gap-2">
          <div className="cursor-pointer bg-custom-blue text-white text-xl p-3 rounded-full hover:bg-custom-red">
            {leftArrow}
          </div>

          <div className="cursor-pointer bg-custom-blue text-white text-xl p-3 rounded-full hover:bg-custom-red">
            {rightArrow}
          </div>
        </div>
        {/* <div className="flex gap-2 justify-end">
          <PrevArrow />
          <NextArrow />
        </div> */}
      </div>
      <div className=" mx-auto max-w-screen-xl flex flex-col md:flex-row gap-5">
        {insights.map((item) => (
          <InsightsCard key={item.id} cardDetails={item} />
        ))}

         {/* <InsightSlider ref={sliderRef} {...setting}> */}



          {/* {insights.map((item) => (
            <InsightsCard key={item.id} cardDetails={item}/>
          ))} */}

          {/* </InsightSlider> */}
        
      </div>
    </div>
  )
}

export default HomeBanner
