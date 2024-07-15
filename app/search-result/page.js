// SearchResults.js
"use client";
import Navbar from "@components/Navbar";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";

const SearchResults = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSearchResults = async () => {
      setLoading(true);
      try {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const q = urlParams.get("q"); // Get the value of 'q' parameter

        if (!q) {
          throw new Error("Search query not found");
        }

        setSearchQuery(q); // Set the search query state

        const apiUrl = `https://www.aarnalaw.com/wp-json/wp/v2/posts?_embed&search=${encodeURIComponent(
          q
        )}`;
        const response = await fetch(apiUrl);
        console.log(response);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const results = await response.json();
        setSearchResults(results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching search results:", error);
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, []);

  return (
    <>
      <Navbar />
      <style>
        {`
          .truncate {
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 5; /* Number of lines to show */
              overflow: hidden;
              text-overflow: ellipsis;
              line-height: 1.5em; /* Adjust line height as needed */
              max-height: 4.5em; /* line-height * number of lines */
          }
        `}
      </style>
      <div className="flex justify-center items-center min-h-screen pt-40">
        <div className="w-full max-w-3xl p-4 rounded-lg">
          {/* <h1 className="text-2xl font-bold mb-4 text-center">Search Results</h1> */}
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : (
            <div className="w-full">
              {searchQuery && (
                <h1 className="text-4xl font-semibold mb-10 text-center">
                  Search results for: {searchQuery}
                </h1>
              )}
              <ul>
                {searchResults.length > 0 ? (
                  searchResults.map((result) => (
                    <li key={result.id} className="my-4">
                      {result._embedded &&
                        result._embedded["wp:featuredmedia"] && (
                          <div className="mx-auto w-full sm:w-[750px]">
                            <img
                              src={
                                result._embedded["wp:featuredmedia"][0]
                                  .source_url
                              }
                              alt={result.title.rendered}
                              className="w-full h-auto rounded-lg"
                            />
                          </div>
                        )}
                      <div className="text-center py-5">
                        <h2
                          className="text-xl font-semibold mb-2"
                          dangerouslySetInnerHTML={{
                            __html: result.title.rendered,
                          }}
                        />
                        <p
                          className="leading-tight truncate"
                          dangerouslySetInnerHTML={{
                            __html: result.content.rendered,
                          }}
                        />
                        <div className=" pt-5">
                          <Link
                            href={`/insights/${result.slug}`}
                            className="text-blue-800 font-semibold"
                          >
                            Read more
                          </Link>
                        </div>
                      </div>
                    </li>
                  ))
                ) : (
                  <div className="text-center">
                    <p className="text-4xl py-5">
                      Your search for <strong className="text-red-600">{searchQuery}</strong> did not
                      match any entries.
                    </p>
                    <p className="font-semibold">
                      Don't panic, we'll get through this together. Let's
                      explore our options here.
                    </p>
                    <p className="py-5">
                      You can return{" "}
                      <Link href="/" className="font-semibold text-red-800">
                        {" "}
                        {/* Arrow image */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="inline-block w-6 h-6 align-middle"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                          />
                        </svg>{" "}
                        Home
                      </Link>{" "}
                      or search for the page you were looking for.
                    </p>
                  </div>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchResults;
