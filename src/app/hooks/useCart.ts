import { useState } from "react";
import { Product } from "../types/product";

export const useCart = (p0: never[]) => {
  const [cart, setCart] = useState<any[]>([]);

  const addToCart = (product: any, quantity: number = 1) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      // If the product already exists in the cart, update the quantity
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      // If the product is not in the cart, add it
      setCart((prevCart) => [
        ...prevCart,
        { ...product, quantity: quantity },
      ]);
    }
    console.log("Product added to cart:", product); // Debugging
  };

  const removefromCart = (id: string, cartItems: Product[]) => {
    const updatedCart = cartItems.filter((item) => item._id !== id);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    return updatedCart;
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: quantity } : item
      )
    );
  };

  return { cart, addToCart, removefromCart, updateQuantity };
};