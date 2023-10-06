import { Outlet } from "react-router-dom";
import Navbar from "../../Section/Navbar/Navbar";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            hello
            <Outlet></Outlet>
        </div>
    );
};

export default Root;