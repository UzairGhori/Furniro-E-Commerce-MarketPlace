import React from 'react';
import Image from 'next/image';
import { IoIosArrowForward } from 'react-icons/io';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
     
      <div className="relative w-full h-[340px] flex items-center justify-center bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 text-white">
        <Image
          src="/shophero.png"
          alt="Shop Background"
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
        />
        <div className="absolute z-10 text-center px-4">
          <Image src="/p1.png" alt="logo" width={100} height={100} className="mx-auto mb-4" />
          <h3 className="font-bold text-4xl text-black">Contact</h3>
          <h5 className="flex items-center justify-center mt-2 text-lg">
            <span className="font-medium text-black">Home</span>
            <IoIosArrowForward className="mx-2 text-black" />
            <span className="text-black font-light">Contact</span>
          </h5>
        </div>
      </div>

      <div className="flex flex-col items-center mt-[100px] px-4 text-center">
  {/* Heading Section */}
  <h1 className="text-[36px] md:text-[48px] font-Poppins font-semibold text-[#000000] mb-4">
    Get In Touch With Us
  </h1>
  <p className="text-[16px] md:text-[18px] font-Poppins font-normal text-[#9F9F9F] max-w-[700px]">
    For More Information About Our Product & Services, Please Feel Free To Drop Us 
    An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
  </p>
</div>


      {/* Contact Information Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Section (Address, Phone, Working Time) */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-xl text-black" />
              <div>
                <h3 className="text-lg font-bold text-black">Address</h3>
                <p className="text-gray-600">236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-xl text-black" />
              <div>
                <h3 className="text-lg font-bold text-black">Phone</h3>
                <p className="text-gray-600">Mobile: +(84) 546-6789</p>
                <p className="text-gray-600">Hotline: +(84) 456-6789</p>
              </div>
            </div>

            {/* Working Time */}
            <div className="flex items-start gap-4">
              <FaClock className="text-xl text-black" />
              <div>
                <h3 className="text-lg font-bold text-black">Working Time</h3>
                <p className="text-gray-600">Monday–Friday: 9:00–22:00</p>
                <p className="text-gray-600">Saturday–Sunday: 9:00–21:00</p>
              </div>
            </div>
          </div>

          {/* Right Section (Form) */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h3 className="text-xl font-semibold text-black">Get In Touch</h3>
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-gray-600 mb-2">Your Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Abc"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-600 mb-2">Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Abc@def.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-gray-600 mb-2">Subject</label>
                <input
                  id="subject"
                  type="text"
                  placeholder="This is optional"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-gray-600 mb-2">Message</label>
                <textarea
                  id="message"
                  placeholder="Hi! I’d like to ask about..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
         
        </div>
      </div>
       {/* Bottom Image Section */}
<div className="w-full mt-8 -mb-[65px] ">
    <div className="relative w-full max-w-full mx-auto">
      <Image
        src="/Frame161(1).png"
        alt="pic"
        width={1440}
        height={570}
        className="w-full h-auto object-cover"
        priority
      />
    </div>
  </div>
    </div>
  );
};

export default Contact;
