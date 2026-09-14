import { getProducts } from "./getProducts"

export const findProductById = (productId: number) => {
  return getProducts().find((product) => {
    return product.id === productId
  })
}