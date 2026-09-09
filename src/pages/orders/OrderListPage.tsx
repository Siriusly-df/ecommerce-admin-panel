import { useState } from "react";
import { Card } from "../../shared/ui/card/Card";
import { orders } from "../../entities/order/model/mock";
import type { Order, OrderStatus } from "../../entities/order/model/types";
import "./OrderListPage.scss";
import { Link } from "react-router-dom";

function updateOrderStatus(order: Order, status: OrderStatus) {
    return{ ...order, status };
}

function updateOrderInList(
    order: Order[], 
    orderId: number, 
    status: OrderStatus
) {
  return order.map((order) => {
    return order.id === orderId
      ? updateOrderStatus(order, status)
      : order
  })
}

export function OrderListPage() {
    const [orderState, setOrderState] = useState<Order[]>(orders.data);

    const handleStatusChange = (orderId: number, status: OrderStatus) => {
     setOrderState((prev) =>
        updateOrderInList(prev, orderId, status)
     )
    }

    const statuses: OrderStatus[] = [
        "pending", 
        "processing",
        "shipped",
        "delivered",
    ];

    return(
     <section className="orders">
        <h3 className="orders__title">Orders</h3>
        {orderState.map((order) => (
        <Card key={order.id}>
            <div className="order">
                <h4 className="order__title">{order.customerName}</h4>
                <p className="order__total">{order.total}</p>
                <p className="order__status">{order.status}</p>
                <select 
                value={order.status}
                onChange={(event) => 
                    handleStatusChange(order.id, event.target.value as OrderStatus)
                } >
                {statuses.map((status) => (
                    <option key={status} value={status}>
                        {status}
                    </option>
                ))}
                </select>
                <Link to={`/orders/${order.id}`}>Order</Link>
            </div>
        </Card>
        ))}
     </section>
    )
}