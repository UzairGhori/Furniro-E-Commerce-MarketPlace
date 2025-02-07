// types/product.ts
export type Product = {
  _id: string;
  title: string;
  description: string;
  price: number;
  stock: number;
  categories: string[];
  productImage: string;
  imageUrl: string;
  quantity?: number; // Optional, used for cart functionality
  name?: string; // Optional, used for cart functionality
};