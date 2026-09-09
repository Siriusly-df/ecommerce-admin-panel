export type OrderStatus =  "pending" | "processing" | "shipped" | "delivered";

export type Order = {
   id: number;
   customerName: string;
   total: number;
   status: OrderStatus;
}

export type OrderList = Order[];