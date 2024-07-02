"use client"

import React, { useEffect, useRef, useState } from "react"
import PodcastCard from "./PodcastCard"
import Link from "next/link"

const Podcasts = () => {
  const [podcasts, setPodcasts] = useState([])
  const hasFetchedData = useRef(false)

  useEffect(() => {
    if (hasFetchedData.current) return
    hasFetchedData.current = true

    const fetchPodcasts = async () => {
      try {
        const response = await fetch(
          "https://www.aarnalaw.com/wp-json/wp/v2/podcast"
        )
        const data = await response.json()
        const latestPodcasts = await data
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 2)
          .map((podcast) => ({
            ...podcast,
            formattedDate: formatDate(podcast.date),
            imageUrl: podcast.episode_player_image,
          }))

        setPodcasts(latestPodcasts)
        console.log(latestPodcasts)
      } catch (error) {
        console.log(error)
      }
    }
    fetchPodcasts()
  }, [])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(date)
  }

  return (
    <div className="space-y-10 pb-10 flex flex-col items-center mt-16 md:mt-[590px]">
      <h1 className="text-custom-blue text-2xl font-semibold text-center">
        Podcast
      </h1>
      <ul className="flex flex-wrap justify-center gap-3 w-full">
        {podcasts.map((item) => (
          <PodcastCard key={item.id} podcastDetails={item} />
        ))}
      </ul>
      <Link href={"/podcast"} className="border border-custom-blue px-6 py-2 text-custom-blue hover:bg-custom-blue hover:text-white">
        View all
      </Link>
    </div>
  )
}

export default Podcasts
