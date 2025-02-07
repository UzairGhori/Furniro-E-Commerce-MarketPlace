// app/products/[id]/page.tsx
import ProductDetails from "@/app/Component/ProductDetails";
import { sanityFetch } from "@/sanity/lib/live";
import { SingleProduct } from "@/sanity/lib/quries";
import { Product } from "@/app/types/product";

interface Props {
  params: { id: string };
}

export default async function ProductDetailPage({ params }: Props) {
  const { id: productId } = params;

  console.log("Product ID from params:", productId); // Debug log

  const { data }: { data: Product } = await sanityFetch({
    query: SingleProduct,
    params: { id: productId },
  });

  console.log("Fetched Product Data:", data); // Debug log

  if (!data) {
    return <div className="text-center text-gray-500 py-10">Product not found.</div>;
  }

  return (
    <div className="py-10">
      <ProductDetails product={data} />
    </div>
  );
}