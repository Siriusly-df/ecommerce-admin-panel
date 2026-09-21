import { Link } from "react-router-dom";
import { getProducts } from "../../entities/product/model/getProducts";
import type { Product } from "../../entities/product/model/types";
import type { StockFilter } from "../../entities/product/model/stockFilter";
import { StockFilterSelect } from "../../shared/ui/stock-filter/StockFilter";
import type { FormEvent } from "react";
import { useEffect, useState } from "react";
import "./ProductsListPage.scss";

export function ProductsListPage() {
  const [productsState, setProductsState] = useState<Product[]>(getProducts());
  const [isProducts, setIsProducts] = useState<boolean>(false);
  const [stockFilter, setStockFilter] = useState<StockFilter>("all");
  
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [image, setImage] = useState("");
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");


  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const productBigId = productsState.map((product) => product.id)
    const newId = productBigId.length === 0
      ? 1
      : Math.max(...productBigId) + 1;

    const addProduct = {
      id: newId,
      title, 
      price, 
      stock, 
      image 
    }

    const updatedProducts = [...productsState, addProduct];
    setProductsState(updatedProducts)

    const json = JSON.stringify(updatedProducts)
    localStorage.setItem("products", json)
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setDebouncedSearch(search);
    }, 2000);
   return () => clearTimeout(delayDebounceFn);
  },[search]) 

  const filteredProducts = productsState.filter((product) => {
    const searchMatches = product.title
      .toLowerCase()
      .includes(debouncedSearch.toLowerCase())
    const stockMatches = 
      stockFilter === "all" 
        ? true
       : stockFilter === "in-stock"
        ? product.stock > 0
        : product.stock === 0

    return searchMatches && stockMatches;
  });

  return (
    <section className="products">
      <h3 className="products__title">Products</h3>
      <button 
        className="products__add-btn" 
        onClick={() => setIsProducts(!isProducts)}>
        {isProducts ? "- Hide Form" : "+ Add Product"}
      </button>
      {isProducts && 
      <form className="products__form"  onSubmit={handleSubmit}>
        <p className="products__form-text">Title</p>
        <input 
          className="products__form-input" 
          type="text" 
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <p className="products__form-text">Price</p>
        <input 
          className="products__form-input" 
          type="number" 
          placeholder="Price"
          value={price}
          onChange={(event) => setPrice(Number((event.target.value)))}
        />
        <p className="products__form-text">Stock</p>
        <input 
          className="products__form-input" 
          type="number" 
          placeholder="Stock"
          value={stock}
          onChange={(event) =>  setStock(Number((event.target.value)))}
        />
        <p className="products__form-text">Image</p>
        <input 
          className="products__form-input" 
          type="text" 
          placeholder="Image"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
        <button type="submit">Save</button>
      </form>
      }
      <div className="products__toolbar">
        <input 
          className="products__input-search"
          type="text"
          placeholder="Search product"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <StockFilterSelect 
          stockFilter={stockFilter}
          setStockFilter={setStockFilter}
        />
      </div>
      <div className="products__list">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id} className="product">
                <td className="product__id">{product.id}.</td>
                <td className="product__title">{product.title}</td>
                <td className="product__price">${product.price}</td>
                <td className="product__stock">{product.stock}</td>
                <td>
                  <Link
                    className="product__link"
                    to={`/products/${product.id}`}
                  >View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}