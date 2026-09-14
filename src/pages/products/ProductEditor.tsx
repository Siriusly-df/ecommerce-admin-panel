import { useState } from "react"; 
import type { FormEvent } from "react";
import type { Product } from "../../entities/product/model/types";

type ProductEditorProps = { 
    product: Product;
    onSave: (product: Product) => void;
};


export function ProductEditor({product, onSave }: ProductEditorProps) {

    const [title, setTitle] = useState(product.title);
    const [price, setPrice] = useState(product.price);
    const [stock, setStock] = useState(product.stock);
    const [image, setImage] = useState(product.image);
    

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
     event.preventDefault();

    const updatedProduct = {
       id: product.id, 
       title, 
       price, 
       stock, 
       image 
    }
      onSave(updatedProduct);
    }

    return(
    <div className="product-editor">
        <form className="product__form" onSubmit={handleSubmit}>
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
                    setPrice(Number(event.target.value))
                }}
            />
            <input         
                className="search-bar__input" 
                type="number" 
                placeholder="Product stock" 
                value={stock}
                onChange={(event) => {
                    setStock(Number(event.target.value))
                }}
            />
            <input         
                className="search-bar__input" 
                type="text" 
                placeholder="Product image" 
                value={image}
                onChange={(event) => {
                    setImage(event.target.value)
                }}
            />
            <button         
                className="product__form__button"
                aria-label="Editor"
                type="submit"
            >Save</button>
        </form>
    </div>
    )
}