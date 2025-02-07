"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter, useSearchParams } from "next/navigation";
import { Product } from "../types/product";

const Checkout = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    country: "",
    zipCode: "",
  });

  useEffect(() => {
    // Retrieve cart items from query parameters
    const cartItemsParam = searchParams.get("cartItems");
    if (cartItemsParam) {
      const items = JSON.parse(cartItemsParam);
      setCartItems(items);
    }
  }, [searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    clearCart();
    router.push("/order-confirmation");
  };

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.stock, 0);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[340px] flex items-center justify-center bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 text-white">
        <Image src="/shophero.png" alt="Shop Background" layout="fill" objectFit="cover" className="absolute z-0" />
        <div className="absolute z-10 text-center px-4">
          <Image src="/p1.png" alt="logo" width={100} height={100} className="mx-auto mb-4" />
          <h3 className="font-bold text-4xl text-black">Checkout</h3>
          <h5 className="flex items-center justify-center mt-2 text-lg">
            <span className="font-medium text-black">Home</span>
            <IoIosArrowForward className="mx-2 text-black" />
            <span className="text-black font-light">Checkout</span>
          </h5>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Billing Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                className="w-full p-2 border rounded"
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={formData.country}
                className="w-full p-2 border rounded"
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="zipCode"
                placeholder="Zip Code"
                value={formData.zipCode}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Your Order</h2>
            <div className="bg-gray-100 p-4 rounded">
              {cartItems.map((item) => (
                <div key={item._id} className="flex justify-between py-2">
                  <span>
                    {item.title} x {item.stock}
                  </span>
                  <span>${(item.price * item.stock).toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t mt-4 pt-4">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-yellow-600 text-white py-2 rounded hover:bg-yellow-700 transition-colors"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;

const clearCart = () => {
  localStorage.removeItem("cartItems");
  window.dispatchEvent(new Event("cartUpdated"));
};