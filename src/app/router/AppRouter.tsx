import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { DashboardPage } from "../../pages/dashboard/DashboardPage";
import { ProductsListPage } from "../../pages/products/ProductsListPage";
import { OrderListPage } from "../../pages/orders/OrderListPage";
import { OrderPage } from "../../pages/orders/OrderPage";
import { ProductPage } from "../../pages/products/ProductPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="dashboard" element={<DashboardPage/>}/>
          <Route path="products" element={<ProductsListPage />}/>
          <Route path="orders" element={<OrderListPage/>}/>
          <Route path="orders/:id" element={<OrderPage/>}/>
          <Route path="products/:id" element={<ProductPage/>}/>
          {/* <Route path="users" element={<UserPage/>}/> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
