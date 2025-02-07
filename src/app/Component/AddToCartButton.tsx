"use client"

import { useState } from "react"
import { Product } from "../types/product"
import { useCart } from "../hooks/useCart"
import { useRouter } from "next/navigation"

//interface AddToCartButtonProps {
  //product: Product
  //quantity: number
//}

//const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product, quantity }) => {
  // const [isAdding, setIsAdding] = useState(false)
  // const { addToCart } = useCart()
  // const router = useRouter()

  // const handleAddToCart = async () => {
  //   setIsAdding(true)
  //   await addToCart(product, quantity) // Pass the product and quantity
  //   setIsAdding(false)
  //   router.push("/Cart") // Navigate to the cart page
  // }

  //return (
    // <button
    //   onClick={handleAddToCart}
    //   disabled={isAdding}
    //   className="inline-flex items-center justify-center max-w-80 bg-yellow-600 text-white px-6 py-2 rounded-md hover:bg-yellow-700 transition-colors disabled:opacity-50"
    // >
    //   {isAdding ? "Adding..." : "Add to Cart"}
    // </button>
  //)
//}

//export default AddToCartButton


// export const AddToCartButton = (product : Product) => {
//   const cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]')

//   const existingProductIndex = cart.findIndex(item  => item._id === product._id)

//   if (existingProductIndex > -1) {
//     cart[existingProductIndex].stock += 1
//    }
//    else {
//     cart.push({...product, stock: 1 })
//    }

// }

// export const removeProduct = (productId : string) => { 
//   let cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]')
//   cart = cart.filter(item => item._id !== productId) 
  

// }

// export const updateQuantity = (productId : string, stock : number) => {
//   let cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]')
//   const ProductIndex = cart.findIndex(item => item._id === productId)

//   if (ProductIndex > -1) {
//     cart[ProductIndex].stock = stock
//     localStorage.setItem('cart', JSON.stringify(cart))
//   }

// }

// export const getCartItem = () : Product[] => {
//   return JSON.parse(localStorage.getItem('cart') || '[]')
// }





// app/Component/AddToCartButton.ts

export const addToCart = (product: Product, quantity: number) => {
  const cartItems = getCartItem();
  const existingItem = cartItems.find((item) => item._id === product._id);

  if (existingItem) {
    // Update the quantity if the product already exists in the cart
    existingItem.stock += quantity;
  } else {
    // Add the product to the cart with the specified quantity
    cartItems.push({ ...product, stock: quantity });
  }

  // Save the updated cart to localStorage
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
export const removeFromCart = (id: string) => {
  const cartItems = getCartItem();
  const updatedCart = cartItems.filter((item) => item._id !== id);
  localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  return updatedCart;
};
  
  export const updateQuantity = (productId : string, stock : number) => {
    let cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]')
    const ProductIndex = cart.findIndex(item => item._id === productId)
  
    if (ProductIndex > -1) {
      cart[ProductIndex].stock = stock
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  
  }

export const getCartItem = (): Product[] => {
  if (typeof window !== "undefined") {
    const cartItems = localStorage.getItem("cartItems");
    return cartItems ? JSON.parse(cartItems) : [];
  }
  return [];
};