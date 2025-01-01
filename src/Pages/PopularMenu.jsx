 

import SectionTitle from "../Components/SectionTitle";
import useMenu from "../Hooks/UseMenu";
import MenuItem from "./MenuItem";

const PopularMenu = () => {

    const [menu] =useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    

    return (
        <section>
            <SectionTitle subHeading={"Check It Out"} heading={"From Our Menu"} />
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
           <div className="flex justify-center">
           <button className="btn  btn-ghost border-b-orange-600 border-4 text-gray-700 mt-4 mb-3">
            VIEW FULL MENU
          </button>
           </div>
        </section>
    );
};

export default PopularMenu;
