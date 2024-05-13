import React, { createRef } from 'react';
import FadeIn from 'react-fade-in';
import { toast } from 'react-toastify';
import axiosClient from '../axiosClient';

export default function Register() {

    const emailRef = createRef();
    const nameRef = createRef();
    const addressRef = createRef();
    const phoneRef = createRef();
    const passwordRef = createRef();
    const regRef = createRef();

    const handleRegister = (ev) => {
        ev.preventDefault();

        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            name: nameRef.current.value,
            phone: phoneRef.current.value,
            address: addressRef.current.value,
            regNo: regRef.current.value

        }
        console.log(payload)
        axiosClient.post('/register', payload)
            .then(({ data }) => {
                console.log(data)
                toast.success("successfully registered student",
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
            .catch((err) => {

                const error = err.response.data.message;
                console.log(error);

                toast.error(error,
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
    }

    return (
        <div className=' relative top-14'>


            <div className="box">
                <div className=" shadow-2xl shadow-zinc-600 flex min-h-full flex-1 flex-col justify-center mt-16 w-96 m-auto py-14 lg:px-8 rounded-2xl" style={{ width: "550px", backgroundColor: "#202020" }}>
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <div className=' w-4'>
                            <span style={{ width: "10px", height: "10px" }} className=' absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75 w-12 h-12 -mt-8 -ml-12'>
                                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75 ' style={{ width: "20px", height: "20px" }}></span>
                            </span>
                        </div>
                        <FadeIn>
                            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-50">
                                Student Registration
                            </h2>
                        </FadeIn>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <FadeIn>
                            <form className="space-y-6" action="#" method="POST" onSubmit={handleRegister} >
                                <div>
                                    <div className=' w-96'>
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-50">
                                            Enter full Name
                                        </label>
                                        <FadeIn>
                                            <div className="mt-2">
                                                <input

                                                    name="name"
                                                    type="text"
                                                    ref={nameRef}
                                                    required
                                                    className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </FadeIn>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-50">
                                            Enter registration number
                                        </label>
                                        <FadeIn>
                                            <div className="mt-2">
                                                <input

                                                    name="reg_no"
                                                    type="text"
                                                    ref={regRef}
                                                    required
                                                    className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </FadeIn>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-50">
                                            Enter Phone number
                                        </label>
                                        <FadeIn>
                                            <div className="mt-2">
                                                <input

                                                    name="Phone"
                                                    type="text"
                                                    ref={phoneRef}
                                                    required
                                                    className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </FadeIn>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-50">
                                            Enter Address
                                        </label>
                                        <FadeIn>
                                            <div className="mt-2">
                                                <input

                                                    name="address"
                                                    type="text"
                                                    ref={addressRef}
                                                    required
                                                    className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </FadeIn>
                                    </div>



                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-50">
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
                                                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </FadeIn>
                                    </div>




                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-50">
                                                Password
                                            </label>

                                            <div className="text-sm">
                                                <a href="#" className="font-semibold text-cyan-600 hover:text-indigo-500">
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
                                </div>




                                <div>
                                    <FadeIn>
                                        <button
                                            type="submit"
                                            style={{ backgroundColor: "#00868D" }}
                                            className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 hover:text-cyan-800 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
                                <a href="#" className="font-semibold leading-6 text-cyan-700 hover:text-cyan-800">
                                    Start a 14 day free trial
                                </a>
                            </p>
                        </FadeIn>
                    </div>
                </div>

            </div>


        </div>
    )
}
