// types/product.ts
export type Product = {
    formatPrice: ReactI18NextChildren | Iterable<ReactI18NextChildren>;
  
    quantity: number;
    name: string;
    _id: string;
    title: string;
    description: string;
    price: number;
    stock: number;
    categories: string[];
    productImage: string;
    imageUrl: string;
 
  
 
  };