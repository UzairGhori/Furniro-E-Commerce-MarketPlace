import React from 'react'
import Image from 'next/image'
import { IoIosArrowForward } from 'react-icons/io'
import { FaAngleDown } from 'react-icons/fa'

const ProductComparison = () => {
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
                  <Image
                    src="/p1.png"
                    alt="logo"
                    width={100}
                    height={100}
                    className="mx-auto mb-4"
                  />
                  <h3 className="font-bold text-4xl text-black">Product Comparison</h3>
                  <h5 className="flex items-center justify-center mt-2 text-lg">
                    <span className="font-medium text-black">Home</span>
                    <IoIosArrowForward className="mx-2 text-black" />
                    <span className="text-black font-light">Comparison</span>
                  </h5>
                </div>
              </div>

              <div className="max-w-screen  bg-white py-8">
      {/* Header */}
      <div className="max-w-screen mx-auto lg:mx-96 px-4 md:px-0">
        <div className="flex justify-between items-center mb-6">
         <div className='ml-7 '>
          <h1 className='-mt-[500px] w-[223px] h-[105px] font-Poppins font-semibold text-[28px] text-[#000000]'>Go to Product <br /> Page for more <br /> Products</h1>
          
        <button className='w-[115px] h-[33px] mt-6 border-b-[2px] border-[#727272] text-[20px] text-[#727272] font-Poppins font-medium '>View More</button>
        </div>
        {/* Product Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-200 ">
          {/* Product Card 1 */}
          <div className="border-r border-gray-200 px-4 md:px-8 py-6">
            <div className="mb-4">
              <Image
                src="/Asgaard sofa 3.png"
                alt="Product 1"
                width={200}
                height={200}
                className="mx-auto w-[283px] h-[211px]"
              />
            </div>
            <h3 className="text-xl font-semibold font-Poppins ml-9 mb-2">
              Asgaard Sofa
            </h3>
            <p className=' ml-9 text-[18px] font-Poppins font-medium text-black'>RS. 250,000.00</p>
            <p className="text-sm ml-9 text-gray-500 mb-4">
              ⭐⭐⭐⭐✭ | 204 Reviews
            </p>
            
          </div>

          {/* Product Card 2 */}
          <div className="border-r border-gray-200 px-4 md:px-8 py-6">
            <div className="mb-4">
              <Image
                src="/Group 94.png"
                alt="Product 2"
                width={200}
                height={200}
                className="w-[283px] h-[211px]"
              />
            </div>
            <h3 className="text-xl font-semibold font-Poppins ml-9 mb-2">
              Outdoor Sofa Set
            </h3>
            <p className=' ml-9 text-[18px] font-Poppins font-medium text-black'>RS. 224,000.00</p>
            <p className="text-sm text-center text-gray-500 mb-4">
              ⭐⭐⭐⭐✭ | 148 Reviews
            </p>
            
          </div>
          <div className='w-[242px] h-[79px] mt-28 '>
           <h1 className='w-[174px] h-[26px] text-[24px] text-black font-Poppins font-semibold mb-3'>Add A Product</h1>
           <button className='bg-[#B88E2F] w-[242px] h-[39px] rounded-[6px] text-[16px] text-[#FFFFFF] font-Poppins font-semibold text-center pt-[8px]  '>Choose a Product <FaAngleDown className='ml-[200px] -mt-7 w-[40px] h-[35px]' /></button>
          </div>

          <div className='w-[1730px] h-[802px] border-t-[1px]  border-t-[#E8E8E8] mt-[80px] -ml-[154px]'></div>
          
          </div>

          </div>
          <div className='flex max-w-screen -ml-[200px] lg:-ml-[20px] mt-6 '>
            <div className='-mt-[850px] lg:pr-[300px]'>
              <div className=' '>
              <div className="border-r-[1px] border-r-[#E8E8E8] mt-6 mx-10 pt-5  lg:mb-0">
            <h4 className="text-black text-[28px] mb-4 font-medium pt-12">General</h4>
            <ul className="space-y-6 text-[20px] w-[280px] text-gray-800 font-semibold">
              <li>Sales Package</li>
              <li>Model Number</li>
              <li>Secondary Material</li>
              <li>Configuration </li>
              <li>Upholstery Material</li>
              <li>Upholstery Color</li>
            
            </ul>
          </div> 
          </div>
              <div>
              <div className="border-r-[1px] border-r-[#E8E8E8] mx-10 pt-10 lg:mb-0">
            <h4 className="text-black text-[28px] mb-4 font-medium pt-12">Product</h4>
            <ul className="space-y-6 text-[20px] w-[250px] text-gray-800 font-semibold">
              <li>Filling Material</li>
              <li>Finish Type</li>
              <li>Adjustable Headrest</li>
              <li>Maximum Load Capacity</li>
              <li>Origin of Manufacture</li>
            
            </ul>
          </div>
              </div>
              <div>
              <div className="border-r-[1px] border-r-[#E8E8E8] pt-28 mx-10 lg:mb-0">
            <h4 className="text-black text-[28px] mb-4 font-medium">Dimensions</h4>
            <ul className="space-y-6 text-[20px] w-[250px] text-gray-800 font-semibold">
              <li>Width</li>
              <li>Height</li>
              <li>Depth</li>
              <li>Weight</li>
              <li>Seat Height</li>
              <li>Leg Height</li>
            </ul>
          </div>
              </div>
              <div>
              <div className="border-r-[1px] border-r-[#E8E8E8] pt-28 mx-10 lg:mb-0">
            <h4 className="text-black text-[28px] mb-4  font-medium">Warranty</h4>
            <ul className=" text-[20px] w-[250px] text-gray-800 font-semibold">
              <li>Warranty Summary</li>
              <li className='mt-16'>Warranty Service Type</li>
              <li className='mt-32'>Covered in Warranty</li>
              <li className='mt-11'>Not Covered in Warranty</li>
              <li className='mt-52'>Domestic Warranty</li>
            
            </ul>
          </div>
              </div>
              
            </div>
            <div className='w-[370px] -ml-60 px-250'>
              <div >
                <div className=" -mt-[706px]  lg:mb-0  border-r-[1px] border-r-[#E8E8E8] mx-10">
            
            <ul className="space-y-6 text-[20px] w-[250px] text-gray-800 font-semibold">
            <li>1 sectional sofa</li>
              <li>TFCBLIGRBL6SRHS</li>
              <li>Solid Wood</li>
              <li>L-shaped</li>
              <li>Fabric + Cotton</li>
              <li>Bright Grey & Lion</li>
            </ul>
          </div>
          </div>
              <div>
              <div className="mx-10 pt-36 lg:mb-0 pl-0 border-r-[1px] border-r-[#E8E8E8]">
            
            <ul className="space-y-6 text-[20px] w-[250px] text-gray-800 font-semibold">
            <li>Foam</li>
              <li>Bright Grey & Lion</li>
              <li>No</li>
              <li>280 KG</li>
              <li>Indian</li>
            </ul>
          </div>
              </div>
              <div>
              <div className="mx-10 pt-44 lg:mb-0 border-r-[1px] border-r-[#E8E8E8] ">
            
            <ul className="space-y-6 text-[20px] w-[150px] text-gray-800 font-semibold">
              <li>265.32 cm</li>
              <li>76 cm</li>
              <li>167.76 cm</li>
              <li>45 KG</li>
              <li>41.52 cm</li>
              <li>5.46 cm</li>
            </ul>
          </div>
              </div>
              <div>
              <div className="mx-10 pt-44 lg:mb-0 border-r-[1px] border-r-[#E8E8E8] ">
            
            <ul className="space-y-7 text-[20px] w-[260px] text-gray-800 font-semibold">
              <li>1 year Manufacturing Warranty</li>
              <li>For Warranty Claims or Any Product Related Issues Pleace Email at Operations@trevifuniture.com</li>
              <li>Warrranty Against Manufacturing Defect</li>
              <li>The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond its Intended Use And Wear & Tear In The Natural Course Of Product Usage. </li>
              <li>1 Year</li>
              
            </ul>
          </div>
              </div>
              <div>
              <div className="mx-10 pt-16 lg:mb-0 border-r-[1px] border-r-[#E8E8E8] ">
            <button className='bg-[#B88E2F] border-[1px] border-[#B88E2F] w-[215px] h-[64px] text-[20px] text-[#FFFFFF] font-Poppins font-normal text-center '>Add To Card</button>
          </div>
              </div>
            </div>
            <div>
              <div>
              <div className="mx-10 -mt-[706px] lg:mb-0 pr-20 border-r-[1px] border-r-[#E8E8E8] ">
            
            <ul className="space-y-6 text-[20px] w-[250px] text-gray-800 font-semibold">
            <li>1 Three Seater, 2 Single Seater</li>
              <li>DTUBLIGRBL568</li>
              <li>Solid Wood</li>
              <li>L-shaped</li>
              <li>Fabric + Cotton</li>
              <li>Bright Grey & Lion</li>
            </ul>
          </div>
              </div>
              <div>
              <div className="mx-10 pt-[120px] lg:mb-0 pr-20 border-r-[1px] border-r-[#E8E8E8] ">
            
            <ul className="space-y-6 text-[20px] w-[250px] text-gray-800 font-semibold">
              <li>Matte</li>
              <li>Bright Grey & Lion</li>
              <li>Yes</li>
              <li>300 KG</li>
              <li>India</li>
            
            </ul>
          </div>
              </div>
              <div>
              <div className="mx-10 pt-[160px] lg:mb-0 pr-20 border-r-[1px] border-r-[#E8E8E8] ">
            
            <ul className="space-y-6 text-[20px] w-[250px] text-gray-800 font-semibold">
              <li>265.32 cm</li>
              <li>76 cm</li>
              <li>167.76 cm</li>
              <li>65 KG</li>
              <li>41.52 cm</li>
              <li>5.46 cm</li>
            </ul>
          </div>
              </div>
              <div>
              <div className="mx-10 pt-[180px] lg:mb-0 pr-20 border-r-[1px] border-r-[#E8E8E8] ">
            
            <ul className="space-y-6 text-[20px] w-[260px] text-gray-800 font-semibold">
              <li>1.2 Year Manufacturing Warranty</li>
              <li>for Warranty Claims or Any Product Related Issues Pleace Email at Support@xyz.com </li>
              <li>Warranty of the Product Is limited to manufacturing defects only.</li>
              <li>The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond its Intended Use And Wear & Tear In The Natural Course Of Product Usage. </li>
              <li>3 Months</li>
            
            </ul>
          </div>
              </div>
              <div>
              <div className="mx-10 pt-16 lg:mb-0 border-r-[1px] border-r-[#E8E8E8] ">
            <button className='bg-[#B88E2F] border-[1px] border-[#B88E2F] w-[215px] h-[64px] text-[20px] text-[#FFFFFF] font-Poppins font-normal text-center '>Add To Card</button>
          </div>
              </div>
            </div>
          </div>
          </div>
         <div className="w-full mt-28 -mb-[65px] ">
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
</div>
    
    
  )
}

export default ProductComparison