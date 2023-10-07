import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Pages/Root/Root";
import Error from "../Pages/Error/Error";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement:<Error></Error>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/details/:id',
                element: <ServiceDetails/>
            },
            {
                path: '/sign in',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router;