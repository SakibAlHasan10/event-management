import { Outlet } from "react-router-dom";
import Navbar from "../../Section/Navbar/Navbar";
import Footer from "../../Section/Footer/Footer";
const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;