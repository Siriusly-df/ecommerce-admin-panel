import { useParams } from "react-router-dom";
import { findProductById } from "../../entities/product/model/findProductById"; 
import "./ProductPage.scss"

export function ProductPage() {
    const { id } = useParams()

    const prodcut = findProductById(Number(id))

    if(prodcut === undefined){
       return <p>Order not found</p>
    }
    
    return(
    <section>
        <h3>{prodcut.title}</h3>
        <p>{prodcut.price}</p>
        <p>{prodcut.stock}</p>
        <img src={prodcut.image}/>
    </section>
    )
}