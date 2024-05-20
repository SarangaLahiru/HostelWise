import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ContextProvider } from './context/ContextProvider.jsx'
import './index.css'
import router from './routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ContextProvider>
            <RouterProvider router={router} />
            <ToastContainer />
        </ContextProvider>

    </React.StrictMode>
)
