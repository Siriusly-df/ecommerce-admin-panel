import { useParams } from "react-router-dom";
import { useState } from "react";
import { findProductById } from "../../entities/product/model/findProductById"; 
import "./ProductPage.scss"

export function ProductPage() {
    const { id } = useParams()

    const product = findProductById(Number(id))
    
    const [title, setTitle] = useState(product.title);
    const [price, setPrice] = useState(product.price);
    const [stock, setStock] = useState(product.stock);
    const [image, setImage] = useState(product.image);

    if(product === undefined){
       return <p>Product not found</p>
    }
    
   return(
    <section className="product-page">
        <h3 className="product-page__title">{product.title}</h3>
        <p className="product-page__id">ID: {product.id}</p>
        <p className="product-page__price">Price: ${product.price}</p>
        <p className="product-page__stock">Stock: {product.stock}</p>
        <img  className="product-page__image" src={product.image} alt={product.title}/>

        <div className="product-editor">
            <form className="product__form" action="" >
                <input         
                    className="form__input-title" 
                    type="text" 
                    placeholder="Product title" 
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value)
                    }}
                />
                <input         
                    className="search-bar__input" 
                    type="number" 
                    placeholder="Product price" 
                    value={price}
                    onChange={(event) => {
                        setPrice(event.target.value)
                    }}
                />
                <input         
                    className="search-bar__input" 
                    type="number" 
                    placeholder="Product stock" 
                    value={stock}
                />
                <input         
                    className="search-bar__input" 
                    type="text" 
                    placeholder="Product image" 
                    value={image}
                />
                <button         
                    className="product__form__button"
                    aria-label="Editor"
                    >
                        
                </button>
            </form>

        </div>
    </section>
  )
}