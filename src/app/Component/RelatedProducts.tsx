import { ProductsByCategory, SingleProduct } from "@/sanity/lib/quries"; // Assuming you have a query for fetching products by category
import { Product } from "../types/product";
import { sanityFetch } from "@/sanity/lib/live";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface RelatedProductsProps {
  productId: string;
  category: string;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ productId, category }) => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch products by category, excluding the current product
        const { data }: { data: Product[] } = await sanityFetch({
          query: SingleProduct,
          params: { category, excludeId: productId }, // Pass category and exclude current product ID
        });
        setData(data);
      } catch (error) {
        console.error("Error fetching related products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [productId, category]);

  if (loading) {
    return <div className="text-center text-gray-600 py-10">Loading related products...</div>;
  }

  return (
    <div className="w-full max-w-[1920px] px-4 sm:px-6 lg:px-8 py-12 mx-auto">
      <h1 className="text-5xl text-center font-serif font-bold text-black py-10 animate-bounce">
        Related Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
        {Array.isArray(data) && data.length > 0 ? (
          data.map((product: Product) => (
            <Link href={`/products/${product._id}`} key={product._id} className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <div className="relative aspect-square">
                  <Image
                    src={typeof product.productImage === "string" ? product.productImage.trim() : ""}
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
            No related products available.
          </p>
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;