import { Card } from "../../shared/ui/card/Card";
import { orders } from "../../entities/order/model/mock";
import "./DashboardPage.scss"

type DashboardStat = { 
    id: number;
    title: string;
    value: number;
    icon: string;
}; 

type DashboardStats = DashboardStat[];

interface ApiResponse<T> {
    data:T;
    success: boolean;
}

const stats: ApiResponse<DashboardStats> = {
    data:[
        { id: 1, title: "Products", value: 10, icon: ""},
        { id: 2, title: "Orders", value: 15, icon: ""},
        { id: 3, title: "Users", value: 20, icon: "" },
        { id: 4, title: "Revenue", value: 30, icon: ""},
    ],
    success: true
}

export function DashboardPage() {
  return (
    <section className="dashboard">
      <h3 className="dashboard__title">Dashboard</h3>
      <div className="dashboard__stats">
      {stats.data.map((stat) => (
        <Card key={stat.id}>
            <h4 className="dashboard-stat__title">{stat.title}</h4>
            <p className="dashboard-stat__value">{stat.value}</p>
            <img
              className="dashboard-stat__icon"
              src={stat.icon}
              alt={stat.title}
            />
        </Card>
      ))}
      </div>
      <div className="dashboard__orders">
        <h4 className="dashboard__orders-title">Recent Orders</h4>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>User Name</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.data.map((order) => (
              <tr key={order.id} className="dashboard-order">
                <td className="dashboard-order__id">{order.id}.</td>
                <td className="dashboard-order__name">{order.customerName}</td>
                <td className="dashboard-order__total">{order.total}</td>
                <td className="dashboard-order__status">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

