import { linkedIn, spotify } from "@utils/Icon";
import Image from "next/image";
import React from "react";
import ScrollToTop from "scroll-to-top-react";

const Footer = () => {
  return (
    <>
      <style>
        {`
        .scroll_top.visible {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
        }
        .scroll_top {
            position: fixed;
            right: 2rem;
            bottom: 1rem;
            font-size: 1.5rem;
            font-family: 'Montserrat', sans-serif;
            cursor: pointer;
            border-radius: 7px;
            background: #222422;
            border: 2px solid #d4d6d4;
            color: #d4d6d4;
            padding: 0.25rem;
            opacity: 0;
            transform: translateY(100px);
            transition: all 0.5s ease;
            font-weight: 300;
            margin:20px
        }
            .scroll_top:hover {
            color: #ffffff;
            transform: scale(0.9);
        }

  `}
      </style>
      <ScrollToTop
        displayType={"text"}
        text="Back to Top"
        className="custom-scroll-to-top"
      />

      <div className="bg-custom-blue px-5 md:px-20 py-7">
        <div className="flex justify-between items-center">
          <div className="space-y-4">
            <Image
              src="/home-page/logo-white.svg"
              width={200}
              height={60}
              alt=""
              className="w-24 sm:w-40 md:w-52"
            />
            <div className="flex gap-2">
              <span className="font-semibold text-white text-sm md:text-xl flex items-center">
                Linked{linkedIn}
              </span>
              <span className="text-white text-sm md:text-xl">|</span>
              <span className="font-semibold text-white text-sm md:text-xl flex items-center">
                {spotify}Spotify
              </span>
            </div>
          </div>
          <div>
            <button className="border border-custom-red text-xs md:text-base md:px-6 px-2 py-2 text-white hover:bg-white hover:border-white hover:text-custom-red">
              Subscribe to newsletter
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#091F48] md:px-20 py-5">
        <div className="flex flex-col gap-2 justify-between items-center">
          <div className="flex gap-2">
            <span className="text-white text-xs md:text-sm flex items-center">
              Privacy Policy
            </span>
            <span className="text-white text-xs md:text-sm">|</span>
            <span className="text-white text-xs md:text-sm flex items-center">
              Terms & Conditions
            </span>
            <span className="text-white text-xs md:text-sm">|</span>
            <span className="text-white text-xs md:text-sm flex items-center">
              Disclaimer
            </span>
          </div>
          <span className="text-white text-xs md:text-sm">
            © 2024 Aarna Law. All Rights Reserved
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
