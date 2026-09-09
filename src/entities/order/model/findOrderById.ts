import { orders } from "./mock"

export const findOrderById = (orderId: number) => {
  return orders.data.find((order) => {
    return order.id === orderId
  })
}