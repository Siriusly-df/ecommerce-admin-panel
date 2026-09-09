import { useParams } from "react-router-dom";
import "./OrderPage.scss";
import { findOrderById } from "../../entities/order/model/findOrderById";


export function OrderPage() {
    const { id } = useParams()

    const order = findOrderById(Number(id))

    if(order === undefined){
       return <p>Order not found</p>
    }
    
    return (
    <section>
        <h3>{order.customerName}</h3>
        <p>{order.total}</p>
        <p>{order.status}</p>
    </section>
    )
}