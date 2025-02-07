import { NextResponse } from "next/server";

// Dummy Data for Testing
const products = [
  { _id: "1", name: "Luxury Sofa", price: 25000, description: "A premium luxury sofa." },
  { _id: "2", name: "Modern Table", price: 15000, description: "Stylish wooden table." },
];

// GET Product by ID
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  
  if (!id) {
    return NextResponse.json({ error: "Missing product ID" }, { status: 400 });
  }

  const product = products.find((p) => p._id === id);
  
  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}
