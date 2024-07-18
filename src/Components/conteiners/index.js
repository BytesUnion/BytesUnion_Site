
import {Outlet} from "react-router-dom";
import Header from "../header";

const Layout = () => {
    return (
        <>
            <Header/>
            <div className="container">
                <Outlet/>
            </div>
        </>
    )
}
export default Layout;