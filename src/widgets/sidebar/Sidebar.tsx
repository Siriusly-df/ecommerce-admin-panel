import { NavLink } from "react-router-dom";
import "./Sidebar.scss";

export function Sidebar() {
    return(
    <aside className="sidebar">
        <h2 className="sidebar__title">Sidebar</h2>
        <nav className="sidebar__nav">
            <ul>
                <li><NavLink className="sidebar__link" to="/dashboard">Dashboard</NavLink></li>
                <li><NavLink className="sidebar__link" to="/products">Products</NavLink></li>
                <li><NavLink className="sidebar__link" to="/orders">Orders</NavLink></li>
                <li><NavLink className="sidebar__link" to="/users">Users</NavLink></li>
            </ul>
        </nav>
    </aside>
    );
}