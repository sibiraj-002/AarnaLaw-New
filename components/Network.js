// import React from "react"
// import Image from "next/image"

// const Network = () => {
//   return (
//     <>
//     <style>
//       {
//         `
//         .SfQLQb-dIxMhd-bN97Pc-b3rLgd.SfQLQb-QClCJf-giiMnc .i4ewOd-pzNkMb-r4nke-LS81yb .i4ewOd-pzNkMb-ornU0b-b0t70b-Bz112c {
//             margin-top: 16px;
//             opacity: 0 !important;
//         }
            
//         .dIxMhd-bN97Pc-b3rLgd {
//             display: none !important;
//         }                  
//         `
//       }
//     </style>
//     <div className="flex flex-col items-center gap-10 mb-14 p-8">
//       <h1 className="text-custom-blue text-xl md:text-2xl font-semibold">
//         A Network Of 75+ Lawyers Around The World
//       </h1>
      
//       <iframe className="" src="https://www.google.com/maps/d/embed?mid=1VcQJ5rncecjuzGEyGAVCekUkRYoLUpQ&ehbc=2E312F" width="100%" height="680"></iframe>
//        <div>
//       <button className="border border-custom-red px-6 py-2 text-custom-red hover:bg-custom-red hover:text-white">
//         Contact Our Experts
//       </button>
//       </div>
//     </div>
//     </>
//   )
// }

// export default Network


import React from "react"
import Image from "next/image"

const Network = () => {
  return (
    <>
      <style>
        {`
          .custom-hidden-elements .i4ewOd-pzNkMb-r4nke-LS81yb .i4ewOd-pzNkMb-ornU0b-b0t70b-Bz112c {
            margin-top: 16px;
            opacity: 0 !important;
          }

          .custom-hidden {
            display: none !important;
          }
            .bg-light-black{
            background-color :#2E312F;
            }
        `}
      </style>
      <div className="flex flex-col items-center gap-10 mb-14 lg:p-8 p-2">
        <h1 className="text-custom-blue text-xl md:text-2xl font-semibold">
          A Network Of 75+ Lawyers Around The World
        </h1>

        <div className="py-5 bg-light-black text-white w-full">
          <p className="font-semibold p-3">Aarna Law</p>
        <div className="w-full overflow-hidden">
          
          <iframe 
            src="https://www.google.com/maps/d/embed?mid=1VcQJ5rncecjuzGEyGAVCekUkRYoLUpQ&ehbc=2E312F"
            width="100%"
            height="600"
           
            className="border-0 mt-[-61px]"
          >
          </iframe>
        </div>
        </div>
        <div>
          
          <button className="border border-custom-red px-6 py-2 text-custom-red hover:bg-custom-red hover:text-white">
            Contact Our Experts
          </button>
        </div>

       
      </div>
    </>
  )
}

export default Network

