import React, { createRef } from 'react'
import Swal from 'sweetalert2';
import './login.css';
import FadeIn from 'react-fade-in';
import axiosClinet from '../axiosClient';
import { useStateContext } from '../context/ContextProvider';
import { toast } from 'react-toastify';

export default function Login() {

    const {setUser,setToken,setRole}=useStateContext();

    const emailRef=createRef()
    const passwordRef=createRef()

    const handleLogin=(ev)=>{
        ev.preventDefault();

        const payload={
            email:emailRef.current.value,
            password:passwordRef.current.value
        }
        console.log(payload)
        axiosClinet.post('/login',payload)
        .then(({data})=>{
            console.log(data)
            setUser(data.user)
            setToken(data.token)
            setRole(data.user.role)

            toast.success("success",
            {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                }
        )

        })
        .catch((err)=>{

            // console.log(err.response.data.message)
              if(err.response){
                toast.error(err.response.data.message,
                    {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        }
                )
              }



        })



    }

  return (
    <>
    <h2>login</h2>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        className="mx-auto h-10 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
     <FadeIn>
     <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign in to your account
      </h2>
     </FadeIn>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
     <FadeIn>
     <form className="space-y-6" action="#" method="POST" onSubmit={handleLogin}>


<div>
  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
    Email address
  </label>
  <FadeIn>
  <div className="mt-2">
    <input
      id="email"
      name="email"
      type="email"
      autoComplete="email"
      ref={emailRef}
      required
      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
  </div>
  </FadeIn>
</div>




<div>
  <div className="flex items-center justify-between">
    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
      Password
    </label>

    <div className="text-sm">
      <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
        Forgot password?
      </a>
    </div>
  </div>
  <div className="mt-2">
  <FadeIn>
    <input
      id="password"
      name="password"
      type="password"
      autoComplete="current-password"
      ref={passwordRef}
      required
      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
    </FadeIn>
  </div>
</div>




<div>
<FadeIn>
  <button
    type="submit"
    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  >
    Sign in
  </button>
  </FadeIn>
</div>

</form>
     </FadeIn>

    <FadeIn>
    <p className="mt-10 text-center text-sm text-gray-500">
        Not a member?{' '}
        <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
          Start a 14 day free trial
        </a>
      </p>
    </FadeIn>
    </div>
  </div>
</>



  )
}
