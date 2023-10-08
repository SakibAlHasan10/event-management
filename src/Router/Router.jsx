import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Pages/Root/Root";
import Error from "../Pages/Error/Error";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ContactUs from "../Pages/COntactUs/ContactUs";
import Media from "../Pages/Media/Media";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement:<Error></Error>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/services.json'),
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
                loader: () => fetch('/services.json'),
                element: <PrivateRoute><ServiceDetails/></PrivateRoute>
            },
            {
                path: '/media',
                loader: ()=>fetch("/ourMedia.json"),
                element: <PrivateRoute><Media/></PrivateRoute>
            },
            {
                path: '/contact-us',
                element: <PrivateRoute><ContactUs/></PrivateRoute>
            },

        ]
    }
])

export default router;