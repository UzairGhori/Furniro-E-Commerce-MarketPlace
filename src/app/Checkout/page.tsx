"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";
import { Product } from "../types/product";
import { client } from "@/sanity/lib/client";
import Swal from "sweetalert2";
import { getCartItem } from "../Component/AddToCartButton";

const Checkout = () => {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState(0);
  const [FormValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    country: "",
    zipCode: "",
  });

  const [formErrors, setformErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    address: false,
    city: false,
    country: false,
    zipCode: false,
  });

  useEffect(() => {
    setCartItems(getCartItem());
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.stock, 0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate the form
    if (!ValidationForm()) {
      Swal.fire("Error!", "Please fill all required fields.", "error");
      return;
    }

    // Show processing prompt
    Swal.fire({
      title: "Processing your order!",
      text: "Please wait while we process your order.",
      icon: "info",
      showConfirmButton: false,
      allowOutsideClick: false,
      timer: 3000, // Show for 3 seconds
    });

    try {
      // Prepare order data
      const orderData = {
        _type: "order", // Ensure this matches your Sanity schema
        firstName: FormValues.firstName,
        lastName: FormValues.lastName,
        email: FormValues.email,
        address: FormValues.address,
        city: FormValues.city,
        country: FormValues.country,
        zipCode: FormValues.zipCode,
        cartItems: cartItems.map((item) => ({
          _key: item._id, // Use _key for array items
          product: {
            _type: "reference",
            _ref: item._id,
          },
          quantity: item.stock,
        })),
        subtotal: subtotal,
        discount: discount,
        orderDate: new Date().toISOString(),
      };

      // Send order data to Sanity
      await client.create(orderData);

      // Clear cart and applied discount
      localStorage.removeItem("cartItems");
      localStorage.removeItem("appliedDiscount");

      // Show success message
      Swal.fire("Success!", "Your order has been placed.", "success").then(() => {
        router.push("/order-confirmation");
      });
    } catch (error) {
      console.error("Error creating order:", error);
      Swal.fire("Error!", "Failed to place your order. Please try again.", "error");
    }
  };

  const handleInputChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const ValidationForm = () => {
    const errors = {
      firstName: FormValues.firstName.trim() === "",
      lastName: FormValues.lastName.trim() === "",
      email: FormValues.email.trim() === "",
      address: FormValues.address.trim() === "",
      city: FormValues.city.trim() === "",
      country: FormValues.country.trim() === "",
      zipCode: FormValues.zipCode.trim() === "",
    };
    setformErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

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
          <div className="space-y-4 bg-gray-100 p-4 rounded-md ">
            <h2 className="text-3xl font-[Poppins]  font-semibold">Billing Details</h2>
            <div className="grid grid-cols-2 gap-2">
              <label htmlFor="firstName" className="text-xl  font-serif ">FirstName</label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={FormValues.firstName}
                onChange={handleInputChanges}
                className="py-2 rounded-md w-full text-black border-2 border-slate-300"
                required
              />
              <label htmlFor="lastName" className="text-xl  font-serif ">LastName</label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={FormValues.lastName}
                onChange={handleInputChanges}
                className="py-2 rounded-md w-full text-black border-2 border-slate-300"
                required
              />
              <label htmlFor="email" className="text-xl  font-serif ">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={FormValues.email}
                onChange={handleInputChanges}
                className="py-2 rounded-md w-full text-black border-2 border-slate-300"
                required
              />
              <label htmlFor="address" className="text-xl  font-serif ">Address</label>
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={FormValues.address}
                onChange={handleInputChanges}
                className="py-2 rounded-md w-full text-black border-2 border-slate-300"
                required
              />
              <label htmlFor="city" className="text-xl  font-serif ">City</label>
              <input
                type="text"
                name="city"
                placeholder="City"
                value={FormValues.city}
                onChange={handleInputChanges}
                className="py-2 rounded-md w-full text-black border-2 border-slate-300"
                required
              />
              <label htmlFor="country" className="text-xl  font-serif ">Country</label>
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={FormValues.country}
                onChange={handleInputChanges}
                className="py-2 rounded-md w-full text-black border-2 border-slate-300"
                required
              />
              <label htmlFor="zipCode" className="text-xl  font-serif ">Zip Code</label>
              <input
                type="text"
                name="zipCode"
                placeholder="Zip Code"
                value={FormValues.zipCode}
                onChange={handleInputChanges}
                className="py-2 rounded-md w-full text-black border-2 border-slate-300"
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