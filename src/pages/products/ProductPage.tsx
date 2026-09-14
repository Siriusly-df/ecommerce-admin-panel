import { useParams } from "react-router-dom";
import { findProductById } from "../../entities/product/model/findProductById"; 
import { ProductEditor } from "./ProductEditor";
import type { Product } from "../../entities/product/model/types";
import { products } from "../../entities/product/model/mock";
import "./ProductPage.scss"

export function ProductPage() {
    const { id } = useParams();
    const product = findProductById(Number(id));

    if(product === undefined){
       return <p>Product not found</p>
    }

    function updateProduct(
        products: Product[],
        updatedProduct: Product
    ) {
        return products.map((product) => {
            if(product.id === updatedProduct.id){
                return updatedProduct
            }
        return product;
       })
    }

    const handleSave = (updatedProduct: Product) => {
       const updatedProducts = updateProduct(products.data, updatedProduct)
       const json = JSON.stringify(updatedProducts);
       localStorage.setItem("products", json)
    }

   return(
    <section className="product-page">
        <h3 className="product-page__title">{product.title}</h3>
        <p className="product-page__id">ID: {product.id}</p>
        <p className="product-page__price">Price: ${product.price}</p>
        <p className="product-page__stock">Stock: {product.stock}</p>
        <img  className="product-page__image" src={product.image} alt={product.title}/>
        <ProductEditor 
           product={product}
           onSave={handleSave}
        />
    </section>
  )
}