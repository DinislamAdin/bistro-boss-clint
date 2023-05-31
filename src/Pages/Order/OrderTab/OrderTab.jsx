/* eslint-disable react/prop-types */
import FoodCard from '../../../componets/FoodCard/FoodCard';

const OrderTab = ({items}) => {
    return (
        <div>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-3 gap-y-3'>
                {
                    items.map(item => <FoodCard
                        key={item._id}
                        item={item}
                    ></FoodCard>)
                }
            </div>
        </div>
    );
};

export default OrderTab;