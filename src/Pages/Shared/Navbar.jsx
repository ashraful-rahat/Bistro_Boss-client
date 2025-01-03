import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import UseCart from "../../Hooks/UseCart";

const NavBar = () => {

  const [cart]= UseCart()
  // State for user authentication
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    // Logic to log out the user
    setIsAuthenticated(false);
  };

  const navOptions = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/menu">Our Menu</Link></li>
      <li><Link to="/order">Order Food</Link></li>
      {isAuthenticated && <li><Link to="/secret">Secret</Link></li>}
      <li>
        <Link to="/dashboard/cart" className="relative">
          <FaShoppingCart className="text-xl" />
          <span className="badge badge-sm badge-secondary absolute top-0 right-0">
           {cart.length}
          </span>
        </Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-80 bg-black text-white max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="normal-case text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          {isAuthenticated ? (
            <button className="btn" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link to="/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
