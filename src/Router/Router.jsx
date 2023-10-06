import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Pages/Root/Root";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        // errorElement:,
        children:[
            {
                path: '/',
                element: <Home></Home>,
            },
        ]
    }
])

export default router;