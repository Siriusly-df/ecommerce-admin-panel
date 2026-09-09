import type { ProductList } from "./types";
import type { ApiResponse } from "../../../shared/types/api";

export const products: ApiResponse<ProductList> = {
  data: [
    {
        id: 1,
        title: "Nike Air Max 270",
        price: 149.99,
        stock: 25,
        image: "/images/nike-air-max-270.jpg",
    },
    {
        id: 2,
        title: "Adidas Ultraboost 5",
        price: 179.99,
        stock: 18,
        image: "/images/adidas-ultraboost-5.jpg",
    },
    {
        id: 3,
        title: "New Balance 574",
        price: 119.99,
        stock: 32,
        image: "/images/new-balance-574.jpg",
    },
    {
        id: 4,
        title: "Puma RS-X",
        price: 109.99,
        stock: 14,
        image: "/images/puma-rs-x.jpg",
    },
    {
        id: 5,
        title: "Vans Old Skool",
        price: 84.99,
        stock: 40,
        image: "/images/vans-old-skool.jpg",
    },
  ],
  success: true
};
