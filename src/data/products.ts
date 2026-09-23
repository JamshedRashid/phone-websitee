export type ProductVariant = {
    id: string;
    color: string;
    storage: string;
    priceBdt: number;
    available: boolean;
  };
  
  export type Product = {
    id: string;
    name: string;
    category: string;
    imageSrc: string;
    imageAlt: string;
    description: string;
  
    // Full product price, not booking money.
    priceBdt: number;
    available: boolean;
  
    // Add these only when the client confirms the options.
    variants?: ProductVariant[];
    bookingAmountBdt?: number;
  };
  
  export const products: Product[] = [];