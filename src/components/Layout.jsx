import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import { defaultUrlTransform } from "react-markdown";

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
};

export default Layout;