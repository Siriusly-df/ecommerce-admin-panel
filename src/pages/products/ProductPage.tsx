import { useNavigate, useParams } from "react-router-dom";
import { findProductById } from "../../entities/product/model/findProductById"; 
import { ProductEditor } from "./ProductEditor";
import type { Product } from "../../entities/product/model/types";
import { getProducts } from "../../entities/product/model/getProducts";
import { useState } from "react";
import "./ProductPage.scss"


export function ProductPage() {
    const { id } = useParams();
    const product = findProductById(Number(id));
    const [productState, setProductState] = useState<Product | undefined>(product);
    const navigate = useNavigate();
    
    if(productState === undefined){
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
       const updatedProducts = updateProduct(getProducts(), updatedProduct)
       const json = JSON.stringify(updatedProducts);
       localStorage.setItem("products", json)
       setProductState(updatedProduct);
    }

    const handleDelete = () => {
        const deleteProduct = getProducts()
        const updatedProducts = deleteProduct.filter((product) => product.id !== productState.id)
        const json = JSON.stringify(updatedProducts)
        localStorage.setItem("products", json)
        navigate("/products");
    }

   return(
    <section className="product-page">
        <h3 className="product-page__title">{productState.title}</h3>
        <p className="product-page__id">ID: {productState.id}</p>
        <p className="product-page__price">Price: ${productState.price}</p>
        <p className="product-page__stock">Stock: {productState.stock}</p>
        <img  className="product-page__image" src={productState.image} alt={productState.title}/>
        <ProductEditor 
           product={productState}
           onSave={handleSave}
        />
        <button
            className="product-page__delete-btn"
            onClick={handleDelete}
        >Delete Product</button>
    </section>
  )
}