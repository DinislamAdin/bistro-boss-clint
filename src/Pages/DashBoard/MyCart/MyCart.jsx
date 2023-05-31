import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../componets/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MyCart = () => {

    const [cart, refetch] = useCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0)
    
    const handelDelete= item =>{
        Swal.fire({
            title: "Are you sure?",
            text: `You want delete ${item.name}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/carts/${item._id}`, {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                })

            }
        })
    }

    return (
        <div className="w-full">
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <div>
                <div className="w-full">
                    <SectionTitle subHading={"My cart"} heading={"wanna add more?"}></SectionTitle>
                </div>
                <div className="uppercase font-bold flex justify-evenly">
                    <h3 className="text-3xl">Total Item {cart.length}</h3>
                    <h3 className="text-3xl">Total Item {total}</h3>
                    <button className="btn btn-sm btn-warning">button</button>
                </div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Food</th>
                                <th>Item Nme</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => <tr
                                    key={item._id}
                                >
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.name}</td>
                                    <td className="text-end">$ {item.price}</td>
                                    <th>
                                        <button onClick={()=>handelDelete(item)} className="btn btn-ghost text-2xl bg-red-300 hover:bg-red-600 text-white"><FaTrashAlt></FaTrashAlt></button>
                                    </th>
                                </tr>
                                )
                            }

                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCart;