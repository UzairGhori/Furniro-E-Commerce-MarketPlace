"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import type { Product } from "../types/product"
import Link from "next/link"

interface CompareButtonProps {
  product: Product
}

const CompareButton: React.FC<CompareButtonProps> = ({ product }) => {
  const [isComparing, setIsComparing] = useState(false)
  const router = useRouter()

  const handleCompare = () => {
    setIsComparing(true)
    // Get current comparison list from localStorage
    const currentComparison = JSON.parse(localStorage.getItem("comparison") || "[]")

    // Add the current product if it's not already in the list
    if (!currentComparison.some((item: Product) => item._id === product._id)) {
      currentComparison.push(product)
      localStorage.setItem("comparison", JSON.stringify(currentComparison))
    }

    // Redirect to comparison page
    router.push("/compare")
    setIsComparing(false)
  }

  return (
    <Link href="/ProductComparison"> 
    <button
      onClick={handleCompare}
      disabled={isComparing}
      className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors disabled:opacity-50"
    >
      {isComparing ? "Adding..." : "Compare"}
    </button>
    </Link>
  )
}

export default CompareButton

