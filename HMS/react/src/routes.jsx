import { Navigate, createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import User from "./views/user";
import Admin from "./views/admin";
import GuestLayout from "./components/GuestLayout";
import Login from "./views/login";
import Register from "./views/register";

const router=createBrowserRouter([
    {
        path:'/',
        element:<DefaultLayout/>,
        children:[
            {
                path: '/',
                element:<Navigate to="/user"/>
            },
            {
                path: '/user',
                element: <User/>
            },
            {
                path: '/admin',
                element: <Admin/>
            },
        ]

    },
    {
        path:'/',
        element:< GuestLayout/>,
        children:[
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },

        ]

    }
])
export default router;
