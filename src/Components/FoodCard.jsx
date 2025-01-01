/* eslint-disable react/prop-types */
const FoodCard = ({ item }) => {
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
                    <button className="px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium rounded-full shadow-md hover:from-blue-600 hover:to-purple-600">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
