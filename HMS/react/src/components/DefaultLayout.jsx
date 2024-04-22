import React from 'react'
import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider'


export default function DefaultLayout() {

  const navigate=useNavigate();

    const {token,role}=useStateContext();
    console.log(role === 1)

    if (!token) {
        return <Navigate to='/login' />;
    } else if (role === '1') {
        return <Navigate to='/admin' />;
    }


  return (
    <div>
        <h2>default</h2>
        <Outlet/>

    </div>
  )
}
