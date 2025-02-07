
// import Image from "next/image"
// import Link from "next/link"

// interface CardProps {
//   img: string
//   title: string
//   description: string
//   price: string
//   oldprice?: string
// }

// const Card: React.FC<CardProps> = ({ img, title, description, price, oldprice }) => {
//   return (
//     <Link href={`/product/${title.toLowerCase().replace(" ", "-")}`} className="group">
//       <div className="bg-[#F4F5F7] rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-105">
//         <Image
//           src={img || "/placeholder.svg"}
//           alt={title}
//           width={285}
//           height={301}
//           className="w-full h-[301px] object-cover"
//         />
//         <div className="p-4">
//           <h3 className="text-2xl font-semibold mb-1">{title}</h3>
//           <p className="text-[#898989] mb-2">{description}</p>
//           <div className="flex justify-between items-center">
//             <span className="text-[#3A3A3A] font-semibold">{price}</span>
//             {oldprice && <span className="text-[#B0B0B0] line-through">{oldprice}</span>}
//           </div>
//         </div>
//       </div>
//     </Link>
//   )
// }

// export default Card

"use client"
import React, { useEffect, useState } from 'react'
import { Product } from '../types/product'
import { getCartItem, updateQuantity } from './AddToCartButton'
import Image from 'next/image'
import Swal from 'sweetalert2'

const Card = () => {
  const [cartItems, setcartItems] = useState<Product[]>([])

  useEffect(() => {
    setcartItems(getCartItem())
  }, [])

  const handleremove = (id : string) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove it!'
    }).then((result) => {
      if (result.isConfirmed) {
      removefromCart(id)
      setcartItems(getCartItem())
      Swal.fire(
        'Removed!',
        'Your item has been removed.',
       'success'
      )
        
      }
    })
  }

const handleQuantityChange =(id : string , quantity : number) => {
  updateQuantity(id, quantity)
  setcartItems(getCartItem())

}

  const handleIncrement = (id : string) => {
    const product = cartItems.find((item) => item._id === id)
    if(product) {
      handleQuantityChange(id, product.stock + 1)
    }
  }

  const handledicrement = (id : string) => {
    const product = cartItems.find((item) => item._id === id)
    if(product && product.stock > 1) {
      handleQuantityChange(id, product.stock - 1)
    }
  }

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.stock, 0)
  }

  const handleCheckout = () => {
    Swal.fire({
      title: 'Checkout',
      text: "Are you sure you want to checkout?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, checkout!'

    }).then((result) => {
      if (result.isConfirmed) {
        // checkout logic here
        Swal.fire(
          'Success!',
          'Your order has been placed.',
         'success'
        )
        setcartItems([])
      }
    })
  }

  return (
    <div>
      <div>
        {cartItems.map((item) => (
          <div key={item._id}>
             <Image src={item.productImage} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Card

function removefromCart(id: string) {
  throw new Error('Function not implemented.')
}

