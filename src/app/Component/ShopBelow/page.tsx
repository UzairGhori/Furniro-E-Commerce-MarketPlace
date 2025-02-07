import Image from "next/image";

export default function BlowHero() {
  return (
    <div>
      {/* Filter Bar Section */}
      <div className="w-full h-16 bg-[#F9F1E7] flex items-center justify-between px-4 md:px-8 lg:px-16">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Image
              src="/filter.png"
              width={20}
              height={20}
              alt="Filter Icon"
              className="w-[28px] h-[28px]"
            />
            <Image 
            src="/view-list (1).png" 
            alt="Icon" 
            width={100} 
            height={100} 
            className="w-6 h-6" />
            <Image 
            src="/view-list (2).png"  
            alt="Icon" 
            width={100} 
            height={100} 
            className="w-[28px] h-[28px]" /> 
                <p className="text-sm md:text-base font-medium text-gray-700">Filter</p>
          </div>
          <p className="text-sm md:text-base font-medium text-gray-700">
            | Showing 1–16 of 32 results
          </p>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Show Input */}
          <div className="flex items-center gap-2">
            <p className="text-sm md:text-base font-medium text-gray-700">Show</p>
            <input
              type="number"
              className="w-10 h-10 bg-white text-black text-center rounded-md focus:ring-2 focus:ring-[#B88E2F] outline-none"
              placeholder="16"
            />
          </div>

          {/* Sort By Input */}
          <div className="flex items-center gap-2">
            <p className="text-sm md:text-base font-medium text-gray-700">Sort by</p>
            <input
              type="text"
              className="w-32 h-10 bg-white text-black text-center rounded-md focus:ring-2 focus:ring-[#B88E2F] outline-none"
              placeholder="Default"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
