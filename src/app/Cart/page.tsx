"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import Swal from "sweetalert2";
import { Product } from "../types/product";
import { useRouter } from "next/navigation";
import { getCartItem, updateQuantity, removeFromCart } from "../Component/AddToCartButton";

const Cart = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    setCartItems(getCartItem());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedCart = removeFromCart(id);
        setCartItems(updatedCart); // Update the state immediately
        Swal.fire("Removed!", "Your item has been removed.", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateQuantity(id, quantity);
    setCartItems(getCartItem()); // Refresh the cart items from localStorage
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) {
      handleQuantityChange(id, product.stock + 1);
    }
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.stock > 1) {
      handleQuantityChange(id, product.stock - 1);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.stock, 0);
  };

  const handleCheckout = () => {
    Swal.fire({
      title: "Checkout",
      text: "Are you sure you want to checkout?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, checkout!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Pass cart items to the checkout page using query parameters
        const queryParams = new URLSearchParams();
        queryParams.set("cartItems", JSON.stringify(cartItems));
        router.push(`/Checkout?${queryParams.toString()}`);
      }
    });
  };
  
  const formatPrice = (price: number | undefined) => {
    return typeof price === "number" ? `$${price.toFixed(2)}` : "Price not available";
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[340px] flex items-center justify-center bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 text-white">
        <Image src="/shophero.png" alt="Shop Background" layout="fill" objectFit="cover" className="absolute z-0" />
        <div className="absolute z-10 text-center px-4">
          <Image src="/p1.png" alt="logo" width={100} height={100} className="mx-auto mb-4" />
          <h3 className="font-bold text-4xl text-black">Cart</h3>
          <h5 className="flex items-center justify-center mt-2 text-lg">
            <Link href="/" className="font-medium text-black">
              Home
            </Link>
            <IoIosArrowForward className="mx-2 text-black" />
            <span className="text-black font-light">Cart</span>
          </h5>
        </div>
      </div>

      {/* Cart Content */}
      <div className="w-full h-auto mb-20 mt-20">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Cart Items Section */}
          <div className="lg:w-2/3 w-full">
            <div className="p-4 rounded-lg shadow-md">
              <div className="hidden lg:flex justify-between bg-[#F9F1E7] py-4 px-4 text-center font-Poppins font-medium text-[16px] text-black">
                <h2 className="w-1/4">Product</h2>
                <h2 className="w-1/4">Price</h2>
                <h2 className="w-1/4">Quantity</h2>
                <h2 className="w-1/4">Subtotal</h2>
              </div>

              {cartItems.map((item) => (
                <div key={item._id} className="flex flex-col lg:flex-row items-center justify-between py-4 border-b">
                  <Image
                    src={item.productImage || "/placeholder.svg"}
                    alt={item.title}
                    width={80}
                    height={80}
                    className="w-16 h-16 object-contain"
                  />
                  <div className="flex-1 flex flex-col lg:flex-row justify-between items-center mt-4 lg:mt-0 gap-2 lg:gap-0">
                    <h2 className="text-gray-600 text-lg text-center lg:text-left">{item.title}</h2>
                    <h2 className="text-gray-800 font-semibold text-center lg:text-left">
                      ${(item.price * item.stock).toFixed(2)}
                    </h2>
                    <div className="flex items-center gap-2">
                      <button onClick={() => handleDecrement(item._id)} className="text-gray-600 hover:text-gray-800">
                        -
                      </button>
                      <input
                        type="number"
                        value={item.stock}
                        onChange={(e) => handleQuantityChange(item._id, Number.parseInt(e.target.value))}
                        min="1"
                        className="w-16 h-8 border border-gray-300 rounded text-center"
                      />
                      <button onClick={() => handleIncrement(item._id)} className="text-gray-600 hover:text-gray-800">
                        +
                      </button>
                    </div>
                    <button onClick={() => handleRemove(item._id)} className="text-red-500 hover:text-red-700">
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cart Total Section (Fixed on the right) */}
          <div className="lg:w-1/3 w-full">
            <div className="sticky top-20 bg-[#F9F1E7] rounded-lg shadow-md p-6">
              <h1 className="text-[24px] font-semibold font-Poppins text-center mb-6">Cart Total</h1>
              <div className="flex justify-between items-center mt-4">
                <h3 className="text-gray-800 text-base font-Poppins">Subtotal</h3>
                <p className="text-gray-600 text-base">${calculateTotal().toFixed(2)}</p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <h3 className="text-gray-800 text-base font-Poppins">Total</h3>
                <p className="text-[#B88E2F] text-[20px] font-semibold">${calculateTotal().toFixed(2)}</p>
              </div>
              <button
                type="button"
                onClick={handleCheckout}
                className="w-full mt-6 py-4 border-black border-[1px] text-black text-lg font-medium font-Poppins rounded-[15px] hover:bg-gray-800 hover:text-white transition-all"
              >
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;