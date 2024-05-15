import React, { useEffect, useState } from 'react';
import FadeIn from 'react-fade-in';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosClient from '../axiosClient';

export default function UpdateUser() {
    let { id } = useParams();
    const [user, setUser] = useState({
        id: null,
        name: '',
        email: '',
        phone: '',
        RegNo: '',
        address: '',
    })
    if (id) {
        useEffect(() => {
            axiosClient.get(`/users/${id}`)
                .then(({ data }) => {
                    console.log(data.data)
                    setUser({
                        id: data.data.id,
                        name: data.data.name,
                        email: data.data.email,
                        phone: data.data.phone,
                        RegNo: data.data.registerNo,  // Use the correct key
                        address: data.data.address,
                    })

                    console.log(user)
                })
                .catch((err) => {
                    console.log(err)

                })
        }, [])
    }
    const handleUpdate = (ev) => {
        ev.preventDefault();

        axiosClient.put(`/users/${user.id}`, user)
            .then(() => {
                console.log("success")
                toast.success("successfully update user details",
                    {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    })
            })
            .catch(err => {
                console.log(err)
                toast.success(err.response,
                    {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    })
            })
    }
    return (
        <div className=' flex w-full justify-center'>

            <div className=" p-20 shadow-2xl shadow-zinc-600 flex box w-96 m-20 relative -left-20 top-10 p-10  rounded-2xl" style={{ width: "600px", backgroundColor: "#202020" }}>
                <div className=' w-40 h-40 overflow-hidden '>
                    <img className=' relative' src="https://img.freepik.com/premium-photo/young-student-person-isolated-background_1368-174554.jpg" alt="" />
                </div>
                <div className="dis ml-10 text-white mt-2">
                    <h2 className=' text-3xl'>Student : {user.name}</h2>
                    <h2 className=' text-xl m-3'>Name : {user.name}</h2>
                    <h2 className=' text-xl m-3'>Register No : {user.RegNo}</h2>
                    <h2 className=' text-xl m-3'>Phone : {user.phone}</h2>
                    <h2 className=' text-xl m-3'>Email : {user.email}</h2>
                    <h2 className=' text-xl m-3'>Address : {user.address}</h2>
                </div>

            </div>
            <div className="box relative top-0 -ml-14">
                <div className=" shadow-2xl shadow-zinc-600 flex min-h-full flex-1 flex-col justify-center mt-16 w-96 m-auto py-14 lg:px-8 rounded-2xl" style={{ width: "550px", height: "550px", backgroundColor: "#202020" }}>
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
                            <form className="space-y-6" action="#" method="POST" onSubmit={handleUpdate} >
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
                                                    required
                                                    value={user.name}
                                                    onChange={ev => setUser({ ...user, name: ev.target.value })}
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

                                                    name="regNo"
                                                    type="text"
                                                    required
                                                    value={user.RegNo}
                                                    onChange={ev => setUser({ ...user, RegNo: ev.target.value })}
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

                                                    name="phone"
                                                    type="text"
                                                    required
                                                    value={user.phone}
                                                    onChange={ev => setUser({ ...user, phone: ev.target.value })}
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
                                                    required
                                                    value={user.address}
                                                    onChange={ev => setUser({ ...user, address: ev.target.value })}
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
                                                    required
                                                    value={user.email}
                                                    onChange={ev => setUser({ ...user, email: ev.target.value })}
                                                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </FadeIn>
                                    </div>





                                </div>
                                <FadeIn>
                                    <button
                                        type="submit"
                                        style={{ backgroundColor: "#00868D" }}
                                        className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 hover:text-cyan-800 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Update user details
                                    </button>
                                </FadeIn>





                            </form>
                        </FadeIn>


                    </div>
                </div>

            </div>


        </div>
    )
}
