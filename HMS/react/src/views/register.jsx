import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

export default function Register() {
    const notify=()=>toast.success("ok")
  return (
    <div>
        <h2>register</h2>
        <button onClick={notify}>ok</button>


    </div>
  )
}
