import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { sanityFetch } from "@/sanity/lib/live";
import { Product } from "../types/product";
import { Allproducts } from "@/sanity/lib/quries";
import BlowHero from "../Component/ShopBelow/page";
import { addToCart } from "../Component/AddToCartButton";

export default async function ShopPage() {
  const { data }: { data: Product[] } = await sanityFetch({ query: Allproducts });

  console.log("Fetched Data:", data); // Debug log

  const handleAddToCart = async (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    addToCart(product, 1); // Assuming default quantity is 1
    console.log("Adding product to cart:", product);
  }

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[340px] flex items-center justify-center bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 text-white">
        <Image
          src="/shophero.png"
          alt="Shop Background"
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
        />
        <div className="absolute z-10 text-center">
          <h3 className="font-bold text-4xl text-black">Shop</h3>
          <h5 className="flex items-center justify-center mt-2 text-lg">
            <Link href="/" className="font-medium text-black">
              Home
            </Link>
            <IoIosArrowForward className="mx-2 text-black" />
            <span className="text-black">Shop</span>
          </h5>
        </div>
      </div>
      <BlowHero />

      {/* Products Section */}
      <div className="w-full max-w-[1920px] px-4 sm:px-6 lg:px-8 py-12 mx-auto">
        <h1 className="text-5xl text-center font-serif font-bold text-black py-10 animate-bounce ">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {Array.isArray(data) && data.length > 0 ? (
            data.map((product: Product) => (
              <Link href={`/products/${product._id}`} key={product._id} className="group">
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-105">
                  <div className="relative aspect-square">
                    <Image
                      src={product.productImage && product.productImage.trim() !== "" ? product.productImage : "/placeholder.svg"}
                      alt={product.title || "Product"}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h5 className="text-lg font-semibold text-gray-900 truncate">{product.title}</h5>
                    <p className="mt-2 text-sm text-gray-600 line-clamp-2">{product.description}</p>
                    <h5 className="mt-3 text-xl font-bold text-gray-900">${product.price.toFixed(2)}</h5>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-600">
              No products available or data fetch failed.
            </p>
          )}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-12 space-x-4">
        <button className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors">
          1
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors">
          2
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors">
          3
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors">
          Next
        </button>
      </div>
    </>
  );
}