import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import UseCart from "../Hooks/UseCart";

/* eslint-disable react/prop-types */
const FoodCard = ({ item }) => {
    const { user } = useAuth(); // Retrieve user info
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure(); // Use the secure Axios instance
 const [,refetch]= UseCart()
    // Handle adding item to the cart
    const handleAddToCart = async (food) => {
        if (user && user.email) {
            const cartItem = {
                menuId: food._id, // Assuming `food._id` contains the menu ID
                email: user.email,
                name: food.name,
                image: food.image,
                price: food.price,
            };

            try {
                const response = await axiosSecure.post('/carts', cartItem); // Use axiosSecure
                if (response.status === 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Added to Cart',
                        text: 'Your item has been added to the cart!',
                        timer: 1500,
                        showConfirmButton: false,
                    });
                    //refetch the card
                    refetch()

                }
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: error.response?.data?.message || 'Failed to add item to the cart.',
                });
            }
        } else {
            // Prompt user to log in
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!",
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } }); // Redirect to login page
                }
            });
        }
    };

    const { name, recipe, image, price } = item || {};

    return (
        <div className="max-w-sm mx-auto bg-gray-100 shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105 hover:shadow-xl">
            <div className="relative">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-56 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
                    <h2 className="text-lg font-semibold">{name}</h2>
                </div>
            </div>
            <div className="p-6">
                <p className="text-gray-700 text-sm mb-4 line-clamp-3">{recipe}</p>
                <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-900">${price}</span>
                    <button
                        onClick={() => handleAddToCart(item)}
                        className="px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium rounded-full shadow-md hover:from-blue-600 hover:to-purple-600"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
