import Link from 'next/link'
import React from 'react'

const Footer= () => {
  return (
    <div className="mt-16 border-t-[1.5px] border-[#0000002B]">
    <footer className="bg-white">
      {/* Footer Container */}
      <div className="w-full flex flex-col lg:flex-row border-t-2 border-gray-300 px-6 lg:px-16 py-8">
        
        {/* Brand Section */}
        <div className="flex-shrink-0 lg:w-1/4 mb-8 lg:mb-0">
          <h2 className="font-bold text-2xl font-Poppins">Funiro.</h2>
          <p className="text-gray-600 mt-4 leading-6">
            400 University Drive Suite 200<br />
            Coral Gables, FL 33134 USA
          </p>
        </div>
  
        {/* Links Section */}
        <div className="flex flex-wrap lg:flex-nowrap lg:gap-16 lg:w-3/4 justify-between">
          
          {/* Links Column */}
          <div className="mb-8 lg:mb-0">
            <h4 className="text-gray-500 text-lg mb-4 font-medium">Links</h4>
            <ul className="space-y-4 text-gray-800 font-semibold">
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
  
          {/* Help Column */}
          <div className="mb-8 lg:mb-0">
            <h4 className="text-gray-500 text-lg mb-4 font-medium">Help</h4>
            <ul className="space-y-4 text-gray-800 font-semibold">
              <li>Payment Option</li>
              <li>Returns</li>
              <li>Privacy Policies</li>
            </ul>
          </div>
  
          {/* Newsletter Column */}
          <div className="lg:w-1/3">
            <h4 className="text-gray-500 text-lg mb-4 font-medium">Newsletter</h4>
            <div className="mt-4 gap-4 flex">
              <input
                type="text"
                placeholder="Enter Your Email Address"
                className="w-full border-b-2 border-black focus:border-gray-500 outline-none p-2 text-gray-800"
              />
              <button
                type="submit"
                className="mt-4 px-6 py-2 border-b-2 border-black  text-black text-sm font-medium rounded hover:bg-gray-700"
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
  
      {/* Footer Bottom */}
      <div className="w-full border-t border-gray-300 mt-8 py-4 text-center">
        <p className="text-gray-600 text-sm">
          2023 Funiro. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
  
  )
}

export default Footer