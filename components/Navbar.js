"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/navbar.css";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);

  // const router = useRouter();

  useEffect(() => {
    // Event listener to detect clicks outside the search box
    const handleClickOutside = (event) => {
      if (event.target.closest(".search-box") === null) {
        setShowSearchResults(false);
      }
    };

    // Attach the event listener
    document.addEventListener("click", handleClickOutside);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsSearchActive(true);
  };

  const handleMouseLeave = () => {
    setIsSearchActive(false);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (slug) => {
    console.log(`Selected: ${slug}`);
    // Navigate to the landing page based on the slug
    window.location.href = `/insights/${slug}`; // Adjust the URL structure as per your routing setup
  };

  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior if applicable

    const search = e.target.value;
    setSearchInput(search); // Update search input state

    if (search.trim() === "") {
      setData([]); // Clear previous search results if search input is empty
      setShowSearchResults(false); // Hide search results if search input is empty
      return;
    }

    try {
      const response = await fetch(
        `https://www.aarnalaw.com/wp-json/wp/v2/posts?_embed&search=${search}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const results = await response.json();
      setData(results); // Update state with fetched data
      setShowSearchResults(true); // Show search results when there are results

      if (results.length === 0) {
        console.log("No search results found");
        // Handle no search results found here
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleSearchClick = () => {
    console.log(searchInput);
    // Navigate to search results page with encoded search query
    window.location.href = `/search-result?q=${encodeURIComponent(
      searchInput
    )}`;
  };
  return (
    <div
      className="w-full relative flex justify-center"
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute z-50 flex justify-end space-x-5 my-5 w-11/12 md:w-11/12">
        <button className="bg-white text-custom-blue hover:text-white hover:bg-red-700 px-10 py-2 shadow-2xl ">
          Log in
        </button>

        <div className="relative inline-block text-left">
          <div>
            <button
              type="button"
              className="inline-flex justify-center w-full shadow-2xl px-4 py-3 bg-white  text-custom-blue hover:text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={toggleDropdown}
            >
              Translate
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.9l3.71-3.67a.75.75 0 111.04 1.08l-4.25 4.21a.75.75 0 01-1.04 0L5.21 8.3a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {isOpen && (
            <div
              className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              <div className="py-1" role="none">
                <a
                  href="#"
                  className=" hover:text-white  hover:bg-red-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  onClick={() => handleOptionClick("en")}
                >
                  English
                </a>
                <a
                  href="#"
                  className=" hover:text-white  hover:bg-red-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  onClick={() => handleOptionClick("ka")}
                >
                  ಕನ್ನಡ (Kannada)
                </a>
                <a
                  href="#"
                  className=" hover:text-white  hover:bg-red-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  onClick={() => handleOptionClick("ta")}
                >
                  தமிழ் (Tamil)
                </a>
                <a
                  href="#"
                  className=" hover:text-white  hover:bg-red-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  onClick={() => handleOptionClick("hi")}
                >
                  हिंदी (Hindi)
                </a>
                <a
                  href="#"
                  className=" hover:text-white  hover:bg-red-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  onClick={() => handleOptionClick("tel")}
                >
                  తెలుగు (Telugu)
                </a>
                <a
                  href="#"
                  className=" hover:text-white  hover:bg-red-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  onClick={() => handleOptionClick("fr")}
                >
                  française (French)
                </a>
                <a
                  href="#"
                  className=" hover:text-white  hover:bg-red-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  onClick={() => handleOptionClick("ja")}
                >
                  日本語 (Japanese)
                </a>
                <a
                  href="#"
                  className=" hover:text-white  hover:bg-red-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  onClick={() => handleOptionClick("es")}
                >
                  Española (Spanish)
                </a>
                <a
                  href="#"
                  className=" hover:text-white  hover:bg-red-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  onClick={() => handleOptionClick("zh")}
                >
                  中國人 (Chinese)
                </a>
                <a
                  href="#"
                  className=" hover:text-white  hover:bg-red-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  onClick={() => handleOptionClick("ar")}
                >
                  عربي (Arabic)
                </a>
                <a
                  href="#"
                  className=" hover:text-white  hover:bg-red-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  onClick={() => handleOptionClick("ko")}
                >
                  한국인 (Korean)
                </a>
                <a
                  href="#"
                  className=" hover:text-white  hover:bg-red-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  onClick={() => handleOptionClick("gu")}
                >
                  ગુજરાતી (Gujarati)
                </a>
                <a
                  href="#"
                  className=" hover:text-white  hover:bg-red-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  onClick={() => handleOptionClick("ru")}
                >
                  русский (Russian)
                </a>
                <a
                  href="#"
                  className=" hover:text-white  hover:bg-red-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  onClick={() => handleOptionClick("de")}
                >
                  Deutsch (German)
                </a>
                <a
                  href="#"
                  className=" hover:text-white  hover:bg-red-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  onClick={() => handleOptionClick("ml")}
                >
                  മലയാളം (Malayalam)
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      <nav className="absolute bg-white dark:bg-gray-900 w-11/12 md:w-11/12 z-20 my-20 border-b border-gray-200 dark:border-gray-600 shadow-2xl">
        <div className="max-w-screen-xxl flex flex-wrap items-center justify-between mx-auto p-4 relative">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/home-page/logo.svg"
              height={60}
              width={200}
              alt="aarnalaw-logo"
              className="w-32 md:w-48"
            />
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse me-0 pe-0">
            <button
              type="button"
              className="border border-custom-red text-custom-red hover:bg-custom-red hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Contact Us
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={handleMobileMenuToggle}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between text-center  w-full md:flex md:w-auto md:order-1 relative ${
              isMobileMenuOpen ? "block" : "hidden"
            }`}
            id="navbar-sticky"
          >
            <ul
              className={`flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ${
                isSearchActive ? "hidden" : ""
              }`}
            >
              <li className="z-10">
                <a
                  href="#"
                  className=" block py-2 px-1 text-custom-blue rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-custom-red md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About Us
                </a>
              </li>
              <li className="z-10">
                <a
                  href="#"
                  className=" block py-2 px-1 text-custom-blue rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-custom-red md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Practice Areas
                </a>
              </li>
              <li className="z-10">
                <a
                  href="#"
                  className=" block py-2 px-1 text-custom-blue rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-custom-red md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Industries
                </a>
              </li>
              <li className="z-10">
                <a
                  href="#"
                  className=" block py-2 px-1 text-custom-blue rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-custom-red md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  News & Insights
                </a>
              </li>
              <li className="z-10">
                <a
                  href="#"
                  className=" block py-2 px-1 text-custom-blue rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-custom-red md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Careers
                </a>
              </li>
            </ul>
            {/* Mobile view */}
            {/* <li className="z-10 block md:hidden pb-10">
                <div className="absolute left-0 right-0 z-30 mb-5">
                  <input
                    type="text"
                    className=""
                    placeholder="Type to Search..."
                    onChange={handleSearch}
                    value={searchInput} // Ensure the input value is managed by state
                  />
                  <Link
                    className="lg:pt-3"
                    href={`/search-result?q=${encodeURIComponent(searchInput)}`}
                  >
                    <i className="text-custom-blue bi bi-search ps-2"></i>
                  </Link>
                </div>
              </li> */}
            {/* --- */}
            <ul className="">
              <li className="relative lg:order-1 lg:ps-4">
                <div className="search-box z-40 text-end flex-col justify-center items-center">
                  <div className="relative">
                    <Link
                      className="btn-search lg:pt-3"
                      href={searchInput ? `/search-result?q=${encodeURIComponent(searchInput)}` : "#"}
                    >
                      <i className="text-custom-blue bi bi-search"></i>
                    </Link>
                    <input
                      type="text"
                      className="input-search"
                      placeholder="Type to Search..."
                      onChange={handleSearch}
                      value={searchInput}
                      onFocus={() => setShowSearchResults(true)} // Show results on input focus
                    />
                    {showSearchResults && data.length > 0 && (
                      <div className="absolute top-full mt-2 max-h-80 overflow-y-auto no-scrollbar bg-white p-2 text-start">
                        {data.map((item, index) => (
                          <div
                            key={index}
                            className="search-result-item"
                            onClick={() => handleOptionClick(item.slug)}
                          >
                            <div className="lg:flex hover:bg-blue-950 hover:text-white p-2 border-b cursor-pointer items-center">
                              {item._embedded &&
                                item._embedded["wp:featuredmedia"] && (
                                  <div
                                    className="mr-2"
                                    style={{ width: "100px" }}
                                  >
                                    <img
                                      src={
                                        item._embedded["wp:featuredmedia"][0]
                                          .source_url
                                      }
                                      alt={item.title.rendered}
                                      className="w-full h-auto hidden md:flex"
                                      width="100"
                                      height="100"
                                    />
                                  </div>
                                )}
                              <div className="lg:flex-1 lg:ps-3">
                                {item.title.rendered}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
