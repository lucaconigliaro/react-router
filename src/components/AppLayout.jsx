import { Outlet } from "react-router-dom";
import MainNav from "./MainNav";

function AppLayout() {
    return (
        <>
            <header>
                <MainNav />
            </header>

            <Outlet />
        </>
    );
}

export default AppLayout;