import SectionTitle from '../../../componets/SectionTitle/SectionTitle';
import MenuItem from '../../Sheard/MemuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === "popular")


    return (
        <div className='my-24'>
            <SectionTitle
                heading={"From our menu"}
                subHading={"popular items"}
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            
           <div className='text-center mt-10'>
                <button className='btn btn-outline border-b-4 border-x-0 border-t-0'>View Full  Menu</button>
           </div>
        </div>
    );
};

export default PopularMenu;