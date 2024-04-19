import React from 'react'
import { Outlet } from 'react-router-dom'

export default function DefaultLayout() {
  return (
    <div>
        <h2>default</h2>
        <Outlet/>

    </div>
  )
}
