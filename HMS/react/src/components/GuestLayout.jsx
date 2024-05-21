import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useStateContext } from '../context/ContextProvider';

export default function GuestLayout() {
    const { token, role } = useStateContext();


    if (token) {
        return <Navigate to='/user' />
    }

    return (
        <div>
            <h2>Guest</h2>
            <Outlet />

        </div>
    )
}
