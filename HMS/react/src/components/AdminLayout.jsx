import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider'

export default function AdminLayout() {
    const {token,role}=useStateContext();

    if(!token){
        return <Navigate to="/login"/>
    }
    else if(role==='0'){
        return <Navigate to='/user'/>
    }
  return (
    <div>

        <h2>Admin</h2>
        <Outlet/>

    </div>
  )
}
