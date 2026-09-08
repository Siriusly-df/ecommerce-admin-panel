import { Card } from "../../shared/ui/card/Card";
import "./OrderListPage.scss"

type OrderStatus =  "pending" | "processing" | "shipped" | "delivered";

type Order = {
   id: number;
   customerName: string;
   total: number;
   status: OrderStatus;
}

type OrderList = Order[];

interface ApiResponse<T> {
    data: T;
    success: boolean;
}

const orders: ApiResponse<OrderList> = {
    data:[
        { id: 1, customerName: "Evgen", total: 2, status: "pending"}
    ],
    success: true
}

export function OrderListPage() {
    return(
     <section className="orders">
        <h3 className="orders__title">Orders</h3>
        {orders.data.map((order) => (
        <Card key={order.id}>
            <div className="order">
                <h4 className="order__title">{order.customerName}</h4>
                <p className="order__total">{order.total}</p>
                <p className="order__status">{order.status}</p>
            </div>
        </Card>
        ))}
     </section>
    )
}