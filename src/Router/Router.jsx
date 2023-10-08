import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Pages/Root/Root";
import Error from "../Pages/Error/Error";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import OurMedia from "../Section/OurMedia/OurMedia";
import ContactUs from "../Pages/COntactUs/ContactUs";
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
                path: '/sign-in',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><ServiceDetails/></PrivateRoute>
            },
            {
                path: '/media',
                element: <PrivateRoute><OurMedia/></PrivateRoute>
            },
            {
                path: '/contact-us',
                element: <PrivateRoute><ContactUs/></PrivateRoute>
            },

        ]
    }
])

export default router;