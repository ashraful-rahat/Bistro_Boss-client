import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../Components/SectionTitle';
import useMenu from '../../../Hooks/UseMenu';
import Cover from '../../Shared/Cover/Cover';
import MenuCategory from './MenuCategory/MenuCategory';

import dessertImg from '/assets/menu/dessert-bg.jpeg';
import pizzaImg from '/assets/menu/pizza-bg.jpg';
import saladImg from '/assets/menu/salad-bg.jpg';
import soupImg from '/assets/menu/soup-bg.jpg';
const Menu = () => {
    const [menu]= useMenu()
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
          
          <Helmet>
        <title>Bistro boss | Menu</title>
       
      </Helmet>
      

      <Cover img="/assets/menu/banner3.jpg" title={'Our Menu'} />

      <SectionTitle subHeading={"From 11.00am to 10.00pm"} heading={"Order Online"} />
   <MenuCategory items={offered}></MenuCategory>

           {/* dessert menu */}
            <MenuCategory items={desserts} title="dessert" img={dessertImg}></MenuCategory>

          {/* pizza menu */}

            <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>

            {/* salad menu */}
            <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>

            {/* soup menu */}
            <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;
