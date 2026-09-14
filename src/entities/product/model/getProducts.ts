import type { Product } from "./types";
import { products } from "./mock";


export function getProducts(): Product[] {
    const productsParse = localStorage.getItem("products")
    if(productsParse === null) {
     return products.data
    } 

    return JSON.parse(productsParse) as Product[]
}