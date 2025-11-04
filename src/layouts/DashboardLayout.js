import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

function DashboardLayout(){
    return (
        <>
        <Nav />
        <Outlet/>
        </>
    )
}

export default DashboardLayout;