import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Pages/Root/Root";
import Error from "../Pages/Error/Error";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement:<Error></Error>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                // loader:()=>fetch('services.json'),
            },
            {
                path: '/details/:id',
                // loader:()=>fetch('services.json'),
                element: <ServiceDetails/>
            }
        ]
    }
])

export default router;