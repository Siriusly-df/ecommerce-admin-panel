import { Outlet } from "react-router-dom";
import { Header } from "../../widgets/header/Header";
import { Sidebar } from "../../widgets/sidebar/Sidebar";
import "./MainLayout.scss"

export function MainLayout(){
    return(
    <>
    <Header />
    <div className="layout">
        <Sidebar />
        <main className="main">
        <Outlet />
        </main>
    </div>
    </>
    );
}