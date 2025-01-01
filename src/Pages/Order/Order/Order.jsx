import { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FoodCard from '../../../Components/FoodCard';
import useMenu from '../../../Hooks/UseMenu';
import Cover from '../../Shared/Cover/Cover';
import orderCoverImg from '/assets/shop/banner2.jpg';

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();

    const desserts = menu.filter(item => item.category === 'dessert');
    const soups = menu.filter(item => item.category === 'soup');
    const salads = menu.filter(item => item.category === 'salad');
    const pizzas = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div>
            {/* Cover Section */}
            <Cover img={orderCoverImg} title="Order Food"></Cover>

            {/* Tabs Section */}
            <div className="my-8">
                <Tabs 
                    selectedIndex={tabIndex} 
                    onSelect={(index) => setTabIndex(index)} 
                    className="text-center"
                >
                    {/* Tab List */}
                    <TabList className="flex justify-center space-x-4">
                        <Tab
                            className={`cursor-pointer px-4 py-2 text-lg font-medium border-b-2 transition-all ${
                                tabIndex === 0 ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-500'
                            }`}
                        >
                            Salad
                        </Tab>
                        <Tab
                            className={`cursor-pointer px-4 py-2 text-lg font-medium border-b-2 transition-all ${
                                tabIndex === 1 ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-500'
                            }`}
                        >
                            Pizza
                        </Tab>
                        <Tab
                            className={`cursor-pointer px-4 py-2 text-lg font-medium border-b-2 transition-all ${
                                tabIndex === 2 ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-500'
                            }`}
                        >
                            Soup
                        </Tab>
                        <Tab
                            className={`cursor-pointer px-4 py-2 text-lg font-medium border-b-2 transition-all ${
                                tabIndex === 3 ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-500'
                            }`}
                        >
                            Dessert
                        </Tab>
                        <Tab
                            className={`cursor-pointer px-4 py-2 text-lg font-medium border-b-2 transition-all ${
                                tabIndex === 4 ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-500'
                            }`}
                        >
                            Drinks
                        </Tab>
                    </TabList>

                    {/* Tab Panels */}
                    <TabPanel>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
                            {salads.map(item => (
                                <FoodCard key={item._id} item={item} />
                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
                            {pizzas.map(item => (
                                <FoodCard key={item._id} item={item} />
                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
                            {soups.map(item => (
                                <FoodCard key={item._id} item={item} />
                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
                            {desserts.map(item => (
                                <FoodCard key={item._id} item={item} />
                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
                            {drinks.map(item => (
                                <FoodCard key={item._id} item={item} />
                            ))}
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;
