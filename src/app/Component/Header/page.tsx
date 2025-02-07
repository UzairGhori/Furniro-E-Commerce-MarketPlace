"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/app/hooks/useCart"



const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { cart } = useCart([])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="w-full bg-white py-4 sm:py-6 shadow-md">
      <div className="flex items-center justify-between max-w-[1280px] mx-auto px-4 sm:px-8">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/p1.png" alt="Furniro logo" width={50} height={32} className="w-[40px] sm:w-[50px] h-auto" />
          <h1 className="text-[20px] sm:text-[28px] md:text-[34px] font-bold text-black">Furniro</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-black font-Poppins text-[14px] lg:text-[16px] font-medium">
          <Link href="/" className="hover:text-[#f4a261] transition">
            Home
          </Link>
          <Link href="/Shop" className="hover:text-[#f4a261] transition">
            Shop
          </Link>
          <Link href="/Blog" className="hover:text-[#f4a261] transition">
            Blog
          </Link>
          <Link href="/Contact" className="hover:text-[#f4a261] transition">
            Contact
          </Link>
        </nav>

        {/* Icons Section */}
        <div className="flex items-center gap-4">
          <Link href="/Checkout" aria-label="Account">
            <Image
              src="/account-alert (1).png"
              alt="Account icon"
              width={28}
              height={28}
              className="w-[24px] sm:w-[28px] h-auto"
            />
          </Link>
          <Link href="/search" aria-label="Search">
            <Image
              src="/account-alert (2).png"
              alt="Search icon"
              width={28}
              height={28}
              className="w-[24px] sm:w-[28px] h-auto"
            />
          </Link>
          <Link href="/wishlist" aria-label="Wishlist">
            <Image
              src="/account-alert (3).png"
              alt="Wishlist icon"
              width={23.33}
              height={28}
              className="w-[20px] sm:w-[23.33px] h-auto"
            />
          </Link>
          <Link href="/Cart" aria-label="Cart" className="relative">
            <Image
              src="/account-alert (4).png"
              alt="Cart icon"
              width={28}
              height={28}
              className="w-[24px] sm:w-[28px] h-auto"
            />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cart.reduce((total:any, item:any) => total + item.quantity, 0)}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} aria-label="Toggle mobile menu" className="text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 7.5h16.5m-16.5 7.5h16.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white w-full py-4">
          <nav className="flex flex-col gap-4 items-center text-black font-Poppins text-[14px] font-medium">
            <Link href="/" className="hover:text-[#f4a261] transition">
              Home
            </Link>
            <Link href="/Shop" className="hover:text-[#f4a261] transition">
              Shop
            </Link>
            <Link href="/Blog" className="hover:text-[#f4a261] transition">
              Blog
            </Link>
            <Link href="/Contact" className="hover:text-[#f4a261] transition">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header


