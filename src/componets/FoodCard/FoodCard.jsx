/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
    const { name, price, recipe, image, _id } = item || {};
    const { user } = useContext(AuthContext);
    const[, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();


    const handelAddToCart = (item) => {
        if (user && user.email) {
            const cartItem = { menuItemId: _id, name, image, price, email: user.email }
            fetch("http://localhost:3000/carts", {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            icon: 'success',
                            title: 'add to cart',
                            text: 'your food is add in cart',
                            footer: '<a href="">Why do I have this issue?</a>'
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'please login to order the food?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'login first!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } })
                }
            })
        }
    }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className="absolute right-0 px-4 py-1 rounded mt-4 mr-4 bg-slate-900 text-white">${price}</p>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                        <button onClick={() => handelAddToCart(item)} className='btn btn-outline border-yellow-500 hover:border-yellow-500 bg-slate-100  border-b-4 border-x-0 border-t-0'>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;