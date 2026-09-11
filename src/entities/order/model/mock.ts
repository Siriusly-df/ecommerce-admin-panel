import type { OrderList } from "./types";
import type { ApiResponse } from "../../../shared/types/api";

export const orders: ApiResponse<OrderList> = {
  data: [
    { id: 1, customerName: "Evgen", total: 2, status: "pending" },
    { id: 2, customerName: "Evgen", total: 2, status: "pending" },
    { id: 3, customerName: "Evgen", total: 2, status: "pending" },
    { id: 4, customerName: "Evgen", total: 2, status: "pending" },
    { id: 5, customerName: "Evgen", total: 2, status: "pending" }
  ],
  success: true
};


