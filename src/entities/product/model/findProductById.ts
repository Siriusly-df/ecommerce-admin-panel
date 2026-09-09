import { products } from "./mock"

export const findProductById = (productId: number) => {
  return products.data.find((product) => {
    return product.id === productId
  })
}