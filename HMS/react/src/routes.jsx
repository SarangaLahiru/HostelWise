import { Navigate, createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import User from "./views/user";
import GuestLayout from "./components/GuestLayout";
import Login from "./views/login";
import Register from "./views/register";
import AdminLayout from "./components/AdminLayout";
import Admin from "./views/admin";
import Home from "./views/Home";
import Students from "./views/students";


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
                path: '/home',
                element: <Home/>
            },
            {
                path: '/students',
                element: <Students/>
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

    },
    {
        path:'/',
        element:<AdminLayout/>,
        children:[
            {
                path: '/admin',
                element: < Admin/>
            },
            {
                path: '/register',
                element: <Register/>
            },

        ]

    },

])
export default router;
