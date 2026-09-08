import { Outlet } from "react-router-dom";
import { Header } from "../../widgets/header/Header";
import { Sidebar } from "../../widgets/sidebar/Sidebar";

export function MainLayout(){
    return(
    <>
     <Sidebar />
     <Header/>   
     <main className="main">
        <Outlet />
     </main>
    </>
    );
}