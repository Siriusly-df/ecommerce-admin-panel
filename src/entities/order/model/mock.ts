import type { OrderList } from "./types";
import type { ApiResponse } from "../../../shared/types/api";

export const orders: ApiResponse<OrderList> = {
  data: [
    { id: 1, customerName: "Evgen", total: 2, status: "pending" }
  ],
  success: true
};


