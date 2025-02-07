import React from "react"
import Link from "next/link"

const OrderConfirmation = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
      <p className="mb-8">
        Your order has been placed successfully. We&apos;ll send you an email with the order details and tracking information
        once your order ships.
      </p>
      <Link href="/" className="bg-yellow-600 text-white px-6 py-2 rounded-md hover:bg-yellow-700 transition-colors">
        Continue Shopping
      </Link>
    </div>
  )
}

export default OrderConfirmation

