import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import axiosClient from '../axiosClient';

export default function StudentList() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = () => {
        axiosClient.get('/users')
            .then(({ data }) => {
                console.log(data)
                setUsers(data.users)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const onDeleteClick = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then(result => {
            if (result.isConfirmed) {
                axiosClient.delete(`/users/${user.id}`)
                    .then(() => {
                        toast.success("successfully deleted",
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
                        getUsers();
                    })
                    .catch(error => {
                        console.error("Error deleting user:", error);
                        // Handle error
                    });
            }
        });
    };
    return (
        <div>
            <table className=" text-red-50 divide-y m-10  divide-gray-200" width="500px" style={{ width: "1200px", margin: "auto", position: "relative", top: "140px", boxShadow: "0px 0px 10px white", borderRadius: "14px" }}>
                <thead className="bg-gray-50" style={{ backgroundColor: "#202020" }}>
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-50 uppercase tracking-wider">ID</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-50 uppercase tracking-wider">Name</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-50 uppercase tracking-wider">Email</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-50 uppercase tracking-wider">Create Date</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-50 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 " style={{ backgroundColor: "#111111" }}>
                    {users.map(u => (
                        <tr key={u.id}>
                            <td className="px-6 py-4 whitespace-nowrap">{u.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{u.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{u.email}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{u.created_at}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <Link to={'/user/' + u.id} className="text-indigo-50 rounded-lg bg-green-600 p-2 hover:text-green-900 mr-4">Edit</Link>
                                <button className="text-red-50 bg-red-600 p-2 rounded-lg hover:text-red-50" onClick={ev => onDeleteClick(u)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>


        </div>
    )
}
