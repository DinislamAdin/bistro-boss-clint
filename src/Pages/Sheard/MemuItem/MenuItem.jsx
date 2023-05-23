
const MenuItem = ({item}) => {

    const { name, price, recipe, image } = item || {};

    return (
        <div className="flex space-x-2">
            <img 
            style={{ borderRadius: "0 200px 200px 200px"}} 
            className="w-[100px] bg-black" src={image} alt="" />
            <div>
                <p className="uppercase">{name}-----------</p>
                <p>{recipe}</p>
            </div>
            <div>
                <p className="text-yellow-500">${price}</p>
            </div>
        </div>
    );
};

export default MenuItem;