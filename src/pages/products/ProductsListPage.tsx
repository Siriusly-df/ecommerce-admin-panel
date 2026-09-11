import { Link } from "react-router-dom";
import { products } from "../../entities/product/model/mock";
import "./ProductsListPage.scss";


export function ProductsListPage() {
  return (
    <section className="products">
      <h3 className="products__title">Products</h3>

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
            {products.data.map((product) => (
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