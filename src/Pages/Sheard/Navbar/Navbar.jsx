import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../hooks/useCart";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const [cart] = useCart();

    const handelLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: 'log Out successfully',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
            })
            .catch(error => console.log(error))

    }
    const navOption = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/order/salad">Order Food</Link></li>
        <li><Link to="/secret">secret</Link></li>
        <li className="p-0">
            <Link to="/dashboard/mycart">
                <button className="btn gap-2">
                    <FaShoppingCart></FaShoppingCart>
                    <div className="badge badge-secondary">+{cart.length || 0}</div>
                </button>
            </Link>
        </li>
        {
            user ? <>
                <button onClick={handelLogOut} className="btn btn-ghost p-0">log Out</button>
            </> : <>
                <li><Link to="/login">Login</Link></li>
            </>
        }
    </>

    return (
        <div>
            <div className="navbar fixed z-10 text-white bg-opacity-30 max-w-screen-xl bg-black ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOption}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOption}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;