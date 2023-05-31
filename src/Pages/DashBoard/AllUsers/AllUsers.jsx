import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(["users"], async () => {
        const res = await fetch('http://localhost:3000/users')
        return res.json();
    })

    const handelMakeAdmin = user => {
        fetch(`http://localhost:3000/users/admin/${user._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is Now an Admin!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handelDelete = user => {
        fetch(`http://localhost:3000/users/${user._id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <div className="w-full">
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <h1 className="text-3xl font-semibold">{users.length}</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>email</th>
                            <th>roll</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>{user?.role === "admin" ? "Admin" :
                                    <button onClick={() => handelMakeAdmin(user)} className="btn btn-ghost text-2xl bg-orange-400"><FaUserShield></FaUserShield></button>}
                                </td>
                                <td>
                                    <button onClick={() => handelDelete(user._id)} className="btn btn-ghost text-2xl bg-red-300 hover:bg-red-600 text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;