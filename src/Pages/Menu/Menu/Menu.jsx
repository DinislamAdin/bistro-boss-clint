import { Helmet } from 'react-helmet-async';
import Cover from '../../Sheard/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import SectionTitle from '../../../componets/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    // const popular = menu.filter(item => item.category === "popular")
    const desserts = menu.filter(item => item.category === "dessert")
    const pizzas = menu.filter(item => item.category === "pizza")
    const salads = menu.filter(item => item.category === "salad")
    const soups= menu.filter(item => item.category === "soup")
    const offered = menu.filter(item => item.category === "offered")

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title ="our menu"></Cover>
            {/* main cover */}
            <SectionTitle subHading="Don't miss" heading="Todays offer"></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items */}
            <MenuCategory items={desserts} title="dessert" img= {dessertImg} ></MenuCategory>
            {/* pizza menu items */}
            <MenuCategory items={pizzas} title="pizza" img= {pizzaImg} ></MenuCategory>
            {/* soup menu items */}
            <MenuCategory items={soups} title="soup" img= {soupImg} ></MenuCategory>
            {/* salads menu items */}
            <MenuCategory items={salads} title="salads" img= {saladImg} ></MenuCategory>
        </div>
    );
};

export default Menu;