import { Card } from "../../shared/ui/card/Card"; 
import "./ProductsListPage.scss";

type Product = {
   id: number;
   title: string;
   price: number;
   stock: number;
   image: string;
}

type ProductList = Product[];

interface ApiResponse<T> {
    data:T;
    success: boolean;
}

const products: ApiResponse<ProductList> = {
    data:[
    {  
        id: 1,
        title: "Nike Air Max",
        price: 149.99,
        stock: 25,
        image: "/images/nike-air-max.jpg"
    }
    ],
    success: true
}

export function ProductsListPage() {
  return (
    <section className="products">
      <h3 className="products__title">Products</h3>
      {products.data.map((product) => (
        <Card key={product.id}>
          <div className="product">
            <h4 className="product__title">{product.title}</h4>
            <p className="product__price">{product.price}</p>
            <p className="product__stock">{product.stock}</p>
            <img
              className="product__img"
              src={product.image}
              alt={product.title}
            />
          </div>
        </Card>
      ))}
    </section>
  );
}