import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full relative flex justify-center">
      <nav className="bg-white p-4 absolute z-50 my-12 items-center justify-center w-10/12 mx-auto">
        <div className="flex justify-between items-center">
          <Image src="home-page/logo.svg" height={60} width={200} alt="" />
          <ul className="flex items-center gap-7 text-custom-blue">
            <li>
              <button className="hover:text-custom-red">About Us</button>{' '}
            </li>
            <li>
              <button className="hover:text-custom-red">Practice Areas</button>
            </li>
            <li>
              <button className="hover:text-custom-red">Industries</button>{' '}
            </li>
            <li>
              <button className="hover:text-custom-red">News & Insights</button>{' '}
            </li>
            <li>
              <button className="hover:text-custom-red">Careers</button>{' '}
            </li>
            <li>
              <button className="border border-custom-red px-6 py-2 text-custom-red hover:bg-custom-red hover:text-white">
                Contact Us
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
