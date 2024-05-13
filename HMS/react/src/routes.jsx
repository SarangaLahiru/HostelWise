import { Navigate, createBrowserRouter } from "react-router-dom";
import AdminLayout from "./components/AdminLayout";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Home from "./views/Home";
import Login from "./views/login";
import Register from "./views/register";
import Rooms from "./views/rooms";
import StudentList from "./views/studentList";
import Students from "./views/students";
import User from "./views/user";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/user" />
            },
            {
                path: '/user',
                element: <User />
            },



        ]

    },
    {
        path: '/',
        element: < GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            }


        ]

    },
    {
        path: '/',
        element: <AdminLayout />,
        children: [
            {
                path: '/admin',
                element: < Home />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/students',
                element: <Students />
            },
            {
                path: '/rooms',
                element: <Rooms />
            },
            {
                path: '/studentList',
                element: <StudentList />
            },

        ]

    },

])
export default router;
