// "use client"
// import React, { useEffect, useRef, useState } from "react"
// import InsightSlider from "react-slick"
// import InsightsCard from "./InsightsCard"
// import { leftArrow, rightArrow } from "@utils/Icon"

// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"

// function HomeBanner() {
//   const [insights, setInsights] = useState([])
//   const sliderRef = useRef(null)

//   useEffect(() => {
//     const fetchInsights = async () => { 
//       try {
//         const response = await fetch(
//           "https://www.aarnalaw.com/wp-json/wp/v2/posts?_embed"
//         )
//         const data = await response.json()
//         const latestInsights = await data
//           .sort((a, b) => new Date(b.date) - new Date(a.date))
//           .slice(0, 3)
//           .map((item) => ({
//             ...item,
//             imageUrl: item["_embedded"]["wp:featuredmedia"][0]["source_url"],
//             title: item["yoast_head_json"]["title"],
//             desc: item["yoast_head_json"]["og_description"],
//           }))
//         console.log(data)
//         console.log(latestInsights)
//         setInsights(await latestInsights)
//       } catch (error) {
//         console.log(error)
//       }
//     }

//     fetchInsights()
//   }, [])

//   const NextArrow = () => (
//     <div
//       className="cursor-pointer bg-custom-blue text-white text-xl p-3 rounded-full hover:bg-custom-red"
//       onClick={() => sliderRef.current.slickNext()}
//     >
//       {rightArrow}
//     </div>
//   )

//   const PrevArrow = () => (
//     <div
//       className="cursor-pointer bg-custom-blue text-white text-xl p-3 rounded-full hover:bg-custom-red"
//       onClick={() => sliderRef.current.slickPrev()}
//     >
//       {leftArrow}
//     </div>
//   )
//   var setting = {
//     speed: 500,
//     slidesToShow: 2,
//     initialSlide: 2,
//     slidesToScroll: 1,
//     fade: false,
//     autoplay: false,
//     arrow: false,
//     dots: false,

//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: false,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   }

//   return (
//     <div className="flex flex-col md:flex-row bg-white md:absolute md:left-0 md:right-0 items-center gap-0 md:-mt-24 md:ml-24 md:pt-10">
//       <div className="flex flex-col items-center gap-7">
//         <h1 className="text-custom-red md:writing-mode-vertical-rl transform md:rotate-180 text-[80px] font-bold m-0 p-0">
//           Insights
//         </h1>
//         {/* <div className="md:flex hidden gap-2">
//           <div className="cursor-pointer bg-custom-blue text-white text-xl p-3 rounded-full hover:bg-custom-red">
//             {leftArrow}
//           </div>

//           <div className="cursor-pointer bg-custom-blue text-white text-xl p-3 rounded-full hover:bg-custom-red">
//             {rightArrow}
//           </div>
//         </div> */}
//         <div className="flex gap-2 justify-end">
//           <PrevArrow />
//           <NextArrow />
//         </div>
//       </div>
//       <div className=" mx-auto max-w-screen-xl flex flex-col md:flex-row gap-5">
//         {/* {insights.map((item) => (
//           <InsightsCard key={item.id} cardDetails={item} />
//         ))} */}

//          <InsightSlider ref={sliderRef} {...setting}>



//           {insights.map((item) => (
//             <InsightsCard key={item.id} cardDetails={item}/>
//           ))}

//           </InsightSlider>nsightSlider
        
//       </div>
//     </div>
//   )
// }

// export default HomeBanner
