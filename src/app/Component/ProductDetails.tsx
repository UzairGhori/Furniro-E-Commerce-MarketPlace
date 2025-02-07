// app/Component/ProductDetails.tsx
"use client"; // Mark this as a client component if it uses interactivity

import Image from "next/image";
import { Product } from "../types/product";
import CompareButton from "./CompareButton";
import { useState } from "react";
import Swal from "sweetalert2";
import { addToCart } from "./AddToCartButton"; // Import the addToCart function

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  if (!product) {
    return <div className="text-center text-gray-500 py-10">Product details not available.</div>;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    addToCart(product, quantity); // Add the product to the cart with the selected quantity
    Swal.fire({
      position: "top-right",
      title: `${product.title} added to cart!`,
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b-2 border-gray-100 pb-20">
        {/* Product Image */}
        <div className="relative aspect-square">
          <Image
            src={product.productImage || "/placeholder.svg"}
            alt={product.title || "Product"}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
          <p className="mt-4 text-gray-600">{product.description}</p>
          <p className="mt-6 text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</p>

          {/* Quantity Selector */}
          <div className="flex items-center space-x-6 mt-5">
            <h3 className="text-xl font-semibold font-serif text-gray-900">Quantity</h3>
            <div className="flex items-center border rounded-md">
              <button
                onClick={decrementQuantity}
                className="px-4 py-4 bg-gray-100 hover:bg-gray-200"
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={incrementQuantity}
                className="px-4 py-4 bg-gray-100 hover:bg-gray-200"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart and Compare Buttons */}
          <div className="flex items-center space-x-8 mt-6">
            <button
              className="bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-yellow-700"
              onClick={(e) => handleAddToCart(e, product)}
            >
              Add to Cart
            </button>
            <CompareButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}