import React from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

const BlogPage = () => {
  return (
    <div>
        <div className="relative w-full h-[340px] flex items-center justify-center bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 text-white">
  {/* Background Image */}
  <Image
    src="/shophero.png"
    alt="Shop Background"
    layout="fill"
    objectFit="cover"
    priority
    className="absolute z-0"
  />

  {/* Content Overlay */}
  <div className="absolute z-10 text-center px-4 sm:px-6">
    {/* Logo */}
    <Image
      src="/p1.png"
      alt="Logo"
      width={80}
      height={80}
      className="mx-auto mb-4 sm:mb-6"
    />

    {/* Title */}
    <h3 className="font-bold text-2xl sm:text-4xl md:text-5xl text-black">
      Blog
    </h3>

    {/* Breadcrumb */}
    <h5 className="flex items-center justify-center mt-2 text-sm sm:text-lg">
      <span className="font-medium text-black">Home</span>
      <IoIosArrowForward className="mx-1 sm:mx-2 text-black" />
      <span className="text-black font-light">Blog</span>
    </h5>
  </div>
</div>

    

    <div className="bg-white min-h-screen p-4 md:p-8">
      <div className="container mx-auto">
        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Blog Posts */}
          <div className="lg:col-span-8 space-y-12">
            {/* Post 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                src="/Rectangle 68.png"
                alt=""
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 space-x-4 mb-4">
                  <span>👤 Admin</span>
                  <span>📅 14 Oct 2022</span>
                  <span>🪵 Wood</span>
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Going all-in with millennial design
                </h2>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Mus mauris vitae ultricies leo integer malesuada nunc. In
                  nulla posuere sollicitudin aliquam ultrices. Morbi blandit
                  cursus risus at ultrices mi tempus imperdiet.
                </p>
                <button className="text-yellow-600 font-semibold hover:underline">
                  Read more
                </button>
              </div>
            </div>

            {/* Post 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                src="/Rectangle 68 (1).png"
                alt="Post 2"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 space-x-4 mb-4">
                  <span>👤 Admin</span>
                  <span>📅 14 Oct 2022</span>
                  <span>🎨 Handmade</span>
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Exploring new ways of decorating
                </h2>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Mus mauris vitae ultricies leo integer malesuada nunc. In
                  nulla posuere sollicitudin aliquam ultrices.
                </p>
                <button className="text-yellow-600 font-semibold hover:underline">
                  Read more
                </button>
              </div>
            </div>

            {/* Post 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                src="/Rectangle 68 (2).png"
                alt="Post 3"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 space-x-4 mb-4">
                  <span>👤 Admin</span>
                  <span>📅 14 Oct 2022</span>
                  <span>🪵 Wood</span>
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Handmade pieces that took time to make
                </h2>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Mus mauris vitae ultricies leo integer malesuada nunc.
                </p>
                <button className="text-yellow-600 font-semibold hover:underline">
                  Read more
                </button>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center space-x-4">
              <button className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700">
                1
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
                2
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
                3
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
                Next
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-12">
            {/* Categories */}
            <div className="bg-white shadow-lg rounded-lg p-6">
                <div>
                <input type="text" placeholder="" className="w-[311px] h-[58px] border-[1px] border-[#9F9F9F]" />
                <Image src="/Vector (1).png" alt="logo" width={200} height={200} className=" w-[19px] h-[19px] -mt-[40px] ml-[280px] " />
                </div>
              <h3 className="text-xl font-semibold mt-5 text-gray-800 mb-4">
                Categories
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>📚 Crafts (2)</li>
                <li>🎨 Design (8)</li>
                <li>🛠️ Handmade (7)</li>
                <li>🏠 Interior (1)</li>
                <li>🪵 Wood (6)</li>
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Recent Posts
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-4">
                  <Image
                    src="/Image/Rectangle 69.png"
                    alt=""
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                  <div>
                    <h4 className="text-sm font-medium text-gray-800">
                      Going all-in with millennial design
                    </h4>
                    <p className="text-xs text-gray-500">03 Aug 2022</p>
                  </div>
                </li>
                <li className="flex items-center space-x-4">
                  <Image
                    src="/Image/Rectangle 69 (1).png"
                    alt="Recent Post 2"
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                  <div>
                    <h4 className="text-sm font-medium text-gray-800">
                      Exploring new ways of decorating
                    </h4>
                    <p className="text-xs text-gray-500">03 Aug 2022</p>
                  </div>
                </li>
                <li className="flex items-center space-x-4">
                  <Image
                    src="/Image/Rectangle 69 (2).png"
                    alt="Recent Post 3"
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                  <div>
                    <h4 className="text-sm font-medium text-gray-800">
                      Handmade pieces that took time to make
                    </h4>
                    <p className="text-xs text-gray-500">03 Aug 2022</p>
                  </div>
                </li>
                <li className="flex items-center space-x-4">
                  <Image
                    src="/Image/Rectangle 69 (3).png"
                    alt=""
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                  <div>
                    <h4 className="text-sm font-medium text-gray-800">
                      Going all-in with millennial design
                    </h4>
                    <p className="text-xs text-gray-500">03 Aug 2022</p>
                  </div>
                </li>
                <li className="flex items-center space-x-4">
                  <Image
                    src="/Image/Rectangle 69 (4).png"
                    alt=""
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                  <div>
                    <h4 className="text-sm font-medium text-gray-800">
                      Going all-in with millennial design
                    </h4>
                    <p className="text-xs text-gray-500">03 Aug 2022</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BlogPage;
