import { FaAd, FaBars, FaCalendar, FaHome, FaList, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                    <li>
                        <NavLink to='/dashboard/cart'>
                            <FaShoppingCart />
                            My Cart
                        </NavLink>  
                    </li>

                    <li>
                        <NavLink to='/dashboard/userHome'>
                            <FaHome />
                            User Home
                        </NavLink>  
                    </li>

                    <li>
                        <NavLink to='/dashboard/reservation'>
                            <FaCalendar />
                            Reservation
                        </NavLink>  
                    </li>

                    <li>
                        <NavLink to='/dashboard/userHome'>
                            <FaHome />
                            User Home
                        </NavLink>  
                    </li>

                    <li>
                        <NavLink to='/dashboard/review'>
                            <FaAd />
                            Add a Review
                        </NavLink>  
                    </li>

                    <li>
                        <NavLink to='/dashboard/bookings'>
                            <FaList />
                            Manage Bookings
                        </NavLink>  
                    </li>

                    <li>
                        <NavLink to='/dashboard/cart'>
                            <FaShoppingCart />
                            My Cart
                        </NavLink>  
                    </li>

                    <div className="divider"></div>

                    <li>
                        <NavLink to='/'>
                            <FaHome />
                            Home
                        </NavLink>  
                    </li>

                    <li>
                        <NavLink to='/menu'>
                            <FaBars /> 
                            Menu
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
};

export default DashBoard;
