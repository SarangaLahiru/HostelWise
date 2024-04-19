import React from 'react'
import { Outlet } from 'react-router-dom'

export default function GuestLayout() {
  return (
    <div>
        <h2>Guest</h2>
        <Outlet/>

    </div>
  )
}
