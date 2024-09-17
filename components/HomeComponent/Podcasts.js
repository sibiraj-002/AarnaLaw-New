"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import PodcastCard from "../HomeComponent/PodcastCard";
import InsightSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { leftArrow, rightArrow } from "@utils/Icon";

const Podcasts = () => {
  const sliderRef = useRef(null);
  const [podcasts, setPodcasts] = useState([]);

  // Fetch podcasts data dynamically
  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        const response = await fetch(
          "https://www.aarnalaw.com/wp-json/wp/v2/podcast"
        );
        const data = await response.json();

        // Set fetched podcasts
        setPodcasts(
          data.map((podcast) => ({
            ...podcast,
            formattedDate: formatDate(podcast.date),
            imageUrl: podcast.episode_player_image,
          }))
        );
      } catch (error) {
        console.log(error);
      }
    };

    fetchPodcasts();
  }, []);

  // Custom Next Arrow Component
  const NextArrow = () => (
    <div
      className="cursor-pointer bg-custom-blue text-white text-xl p-3 rounded-full hover:bg-custom-red"
      onClick={() => sliderRef.current.slickNext()}
    >
      {rightArrow}
    </div>
  );

  // Custom Prev Arrow Component
  const PrevArrow = () => (
    <div
      className="cursor-pointer bg-custom-blue text-white text-xl p-3 rounded-full hover:bg-custom-red"
      onClick={() => sliderRef.current.slickPrev()}
    >
      {leftArrow}
    </div>
  );

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  const settings = {
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    <>
      <div className="container mx-auto relative mb-14 mt-6 md:mt-[650px] flex flex-col items-center">
        <h1 className="text-custom-blue text-2xl font-semibold text-center mb-8">
          Podcast
        </h1>

        {/* Conditionally render the slider only if podcasts data is available */}
        {podcasts.length > 0 ? (
          <div className="w-full md:w-3/4 gap-24">
            <InsightSlider ref={sliderRef} {...settings}>
              {podcasts.slice(0, 4).map(
                (
                  item // Display only the first 4 podcasts
                ) => (
                  <div key={item.id} className="h-full">
                    <PodcastCard podcastDetails={item} />
                  </div>
                )
              )}
            </InsightSlider>
          </div>
        ) : (
          <p className="text-center mt-10">Loading...</p>
        )}

        <div className="flex justify-center mt-10">
          <Link
            href="/podcast"
            className="border border-custom-blue px-6 py-2 text-custom-blue hover:bg-custom-blue hover:text-white"
          >
            View all
          </Link>
        </div>
      </div>
    </>
  );
};

export default Podcasts;
