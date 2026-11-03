import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

const NavBar = () => {
    const { cart, wishlist } = useSelector((state) => state);
    return (
        <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto px-4">
            <NavLink to="/">
                <div>
                    <img src="../logo.jpeg" className="h-14" alt="logo" />
                </div>
            </NavLink>
            <div className="flex items-center font-medium text-slate-100 space-x-6">
                <NavLink to="/">
                    <p>Home</p>
                </NavLink>

                {/* Wishlist Link */}
                <NavLink to="/wishlist">
                    <div className="relative">
                        <FaHeart className="text-2xl text-red-500" />
                        {wishlist.length > 0 && (
                            <span className="absolute -top-1 -right-2 bg-red-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                                {wishlist.length}
                            </span>
                        )}
                    </div>
                </NavLink>

                {/* Cart Link */}
                <NavLink to="/cart">
                    <div className="relative">
                        <FaShoppingCart className="text-2xl" />
                        {cart.length > 0 && (
                            <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                                {cart.length}
                            </span>
                        )}
                    </div>
                </NavLink>
            </div>
        </nav>
    );
};
export default NavBar;