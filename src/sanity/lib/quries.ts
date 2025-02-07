import { groq } from "next-sanity";

// sanity/lib/queries.ts
export const Allproducts = `*[_type == "product"]{
  _id,
  title,
  description,
  price,
  "productImage": productImage.asset->url,
}`;

// sanity/lib/quries.ts
export const SingleProduct = `
  *[_type == "product" && _id == $id][0] {
    _id,
    title,
    description,
    price,
    "productImage": productImage.asset->url,
    // Add other fields as needed
  }
`;

export const ProductsByCategory = groq`
  *[_type == "product" &&  _id == $id][0..7] {
    _id,
    title,
    description,
    price,
    "productImage": productImage.asset->url,
    categories[]->{
      _id,
      title
    }
  }
`;