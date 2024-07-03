import React, { useState } from "react";
import Image from "next/image";
import "bootstrap-icons/font/bootstrap-icons.css";

const Navbar = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsSearchActive(true);
  };

  const handleMouseLeave = () => {
    setIsSearchActive(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value) => {
    console.log(`Selected: ${value}`);
    setIsOpen(false);
  };

  return (
    <div
      className="w-full relative flex justify-center"
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute z-50 flex justify-end space-x-5 my-5 w-11/12 md:w-10/12">
        <button className="bg-white text-custom-blue hover:text-white  hover:bg-red-700 px-10 py-2 shadow-2xl">
          Log in
        </button>

        <div className="relative inline-block text-left">
          <div>
            <button
              type="button"
              className="inline-flex justify-center w-full border border-gray-300 shadow-sm px-4 py-3 bg-white text-sm font-medium text-custom-blue hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
                  onClick={() => handleOptionClick("es")}
                >
                  Spanish
                </a>
                <a
                  href="#"
                  className=" hover:text-white  hover:bg-red-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  onClick={() => handleOptionClick("fr")}
                >
                  French
                </a>
                <a
                  href="#"
                  className=" hover:text-white  hover:bg-red-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  onClick={() => handleOptionClick("de")}
                >
                  German
                </a>
                <a
                  href="#"
                  className=" hover:text-white  hover:bg-red-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  onClick={() => handleOptionClick("zh")}
                >
                  Chinese
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      <nav className="absolute bg-white dark:bg-gray-900 w-11/12 md:w-10/12 z-20 my-20 border-b border-gray-200 dark:border-gray-600 shadow-2xl">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="home-page/logo.svg"
              height={60}
              width={200}
              alt="aarnalaw-logo"
              className="w-32 md:w-48"
            />
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
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
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 relative"
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
                  className="block py-2 px-3 text-custom-blue rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-custom-red md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About Us
                </a>
              </li>
              <li className="z-10">
                <a
                  href="#"
                  className="block py-2 px-3 text-custom-blue rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-custom-red md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Practice Areas
                </a>
              </li>
              <li className="z-10">
                <a
                  href="#"
                  className="block py-2 px-3 text-custom-blue rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-custom-red md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Industries
                </a>
              </li>
              <li className="z-10">
                <a
                  href="#"
                  className="block py-2 px-3 text-custom-blue rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-custom-red md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  News & Insights
                </a>
              </li>
              <li className="z-10">
                <a
                  href="#"
                  className="block py-2 px-3 text-custom-blue rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-custom-red md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Careers
                </a>
              </li>
            </ul>

            <div
              className="relative z-40 flex items-center justify-between lg:ps-10"
              onMouseEnter={handleMouseEnter}
              // onMouseLeave={handleMouseLeave}
            >
              <i className="text-custom-blue bi bi-search"></i>
              {isSearchActive && (
                <div className="absolute left-0 right-0 z-30">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="border border-gray-300 p-2"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
