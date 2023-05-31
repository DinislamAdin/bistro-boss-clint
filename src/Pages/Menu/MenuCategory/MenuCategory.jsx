/* eslint-disable react/prop-types */
import MenuItem from '../../Sheard/MemuItem/MenuItem';
import Cover from '../../Sheard/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({items, title, img}) => {
    return (
        <div className='p-16'>
            {title && <Cover img={img} title={title}></Cover>}
            <div className='grid md:grid-cols-2 mt-16 gap-10'>
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='text-center'>
                <Link to={`/order/${title}`}>
                    <button className='btn btn-outline border-b-4 border-x-0 border-t-0'>View Full  Menu</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;