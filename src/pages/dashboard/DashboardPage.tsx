import { Card } from "../../shared/ui/card/Card";
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

      {stats.data.map((stat) => (
        <Card key={stat.id}>
          <div className="dashboard-stat">
            <h4 className="dashboard-stat__title">{stat.title}</h4>
            <p className="dashboard-stat__value">{stat.value}</p>
            <img
              className="dashboard-stat__icon"
              src={stat.icon}
              alt={stat.title}
            />
          </div>
        </Card>
      ))}
    </section>
  );
}

