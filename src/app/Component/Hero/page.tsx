import React from 'react'
import Image from 'next/image'
import Card from '../Cards/page'
import Link from 'next/link'
import { title } from 'process'
import { sanityFetch } from "@/sanity/lib/live";
import { SingleProduct } from '@/sanity/lib/quries'

const HeroSection = () => {
  return (
    <div>
<div className="bg-white">
  {/* Hero Section */}
  <div className="relative">
    <Image
      src="/MaskGroup.png"
      alt="pic"
      width={1000}
      height={1000}
      className="w-full h-auto"
    />

  {/* Browse The Range Section */}
  <div className="max-w-screen mx-auto px-4 lg:px-0 lg:mx-16 my-16 text-center">
    <h1 className="text-2xl lg:text-3xl font-bold font-Poppins text-[#333333]">
      Browse The Range
    </h1>
    <p className="mt-4 text-lg text-[#666666]">
      Lorem ipsum sit amet, consectetur adipiscing elit
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
      <Image
        src="/Mask Group.png"
        alt="Dining"
        width={500}
        height={500}
        className="w-full h-auto"
      />
      <Image
        src="/Mask Group2.png"
        alt="Living"
        width={500}
        height={500}
        className="w-full h-auto"
      />
      <Image
        src="/Mask Group3.png"
        alt="Bedroom"
        width={500}
        height={500}
        className="w-full h-auto"
      />

    <div className="flex justify-center ml-[630px] lg:space-x-[300px] space-x-10 mt-6">
      <span className="text-lg lg:text-2xl mr-4 font-semibold">Dining</span>
      <span className="text-lg lg:text-2xl font-semibold">Living</span>
      <span className="text-lg lg:text-2xl text-black font-semibold">Bedroom</span>
  </div>
  </div>
  </div>

  {/* Inspiration Section */}
  <div className="bg-gray-50 mx-28  py-16">
    <div className="max-w-7x mx-auto px-4 lg:px-0 flex flex-col lg:flex-row items-center lg:space-x-16">
      <div className="lg:w-2/4 text-center lg:text-left">
        <h1 className="text-2xl lg:text-4xl font-bold font-Poppins text-[#3A3A3A]">
          50+ Beautiful rooms <br /> inspiration
        </h1>
        <p className="mt-4 text-[#666666]">
          Our designer already made a lot of beautiful <br /> prototype rooms
          that inspire you.
        </p>
        <button className="mt-6 px-6 py-2 bg-[#B88E2F] text-white font-semibold">
          Explore More
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 lg:mt-0">
        <Image
          src="/Rectangle 24.png"
          alt="Inspiration 1"
          width={500}
          height={500}
          className="w-full h-auto"
        />
        <Image
          src="/Rectangle 25.png"
          alt="Inspiration 2"
          width={500}
          height={500}
          className="w-full h-auto"
        />
      <Image
  src="/Rectangle 26.png"
  alt="Inspiration 3"
  width={500}
  height={500}
  className="w-screen h-[486px] "
/>

      </div>
    </div>
  </div>

  <div className="w-full  py-10">
      <div className="container mx-auto  text-center">
        <h1 className="text-white text-xl -ml-80 md:text-5xl font-bold mb-8">
          Share your setup with{" "}
          <span className="text-[#D4AF37]">#FuniroFurniture</span>
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 px-2 sm:px-4 lg:px-8  ">
  {/* Image 1 */}
  <div className="relative aspect-square">
    <Image
      src="/Rectangle 36.png" // Replace with actual image path
      alt="Furniture 1"
      layout="responsive"
      width={300} // Set the natural width
      height={200} // Set the natural height
      objectFit=""
      className="rounded-lg w-auto max-h-[460px]"
    />
  </div>

  {/* Image 2 */}
  <div className="relative aspect-square">
    <Image
      src="/Rectangle 38.png" // Replace with actual image path
      alt="Furniture 2"
      layout="responsive"
      width={500}
      height={500}
      objectFit="cover"
      className="rounded-lg"
    />
  </div>

  {/* Image 3 */}
  <div className="relative aspect-square">
    <Image
      src="/Rectangle 40.png" // Replace with actual image path
      alt="Furniture 3"
      layout="responsive"
      width={500}
      height={500}
      objectFit="cover"
      className="rounded-lg"
    />
  </div>

  {/* Image 4 */}
  <div className="relative aspect-square">
    <Image
      src="/Rectangle 43.png" // Replace with actual image path
      alt="Furniture 4"
      layout="responsive"
      width={500}
      height={500}
      objectFit="cover"
      className="rounded-lg"
    />
  </div>

  {/* Image 5 */}
  <div className="relative aspect-square">
    <Image
      src="/Rectangle 37.png" // Replace with actual image path
      alt="Furniture 5"
      layout="responsive"
      width={500}
      height={500}
      objectFit="cover"
      className="rounded-lg"
    />
  </div>

  {/* Image 6 */}
  <div className="relative aspect-square">
    <Image
      src="/Rectangle 39.png" // Replace with actual image path
      alt="Furniture 6"
      layout="responsive"
      width={500}
      height={500}
      objectFit="cover"
      className="rounded-lg"
    />
  </div>

  {/* Image 7 */}
  <div className="relative aspect-square">
    <Image
      src="/Rectangle 41.png" // Replace with actual image path
      alt="Furniture 7"
      layout="responsive"
      width={500}
      height={500}
      objectFit="cover"
      className="rounded-lg"
    />
  </div>

  {/* Image 8 */}
  <div className="relative aspect-square">
    <Image
      src="/Rectangle 44.png" // Replace with actual image path
      alt="Furniture 8"
      layout="responsive"
      width={500}
      height={500}
      objectFit="cover"
      className="rounded-lg"
    />
  </div>
</div>

      </div>
    </div>
</div>
</div>
    </div>
  )
}

export default HeroSection