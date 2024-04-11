import React, { useContext, useState } from 'react';
import './Fooditem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const Fooditem = ({ id, name, price, description, img}) => {
    console.log("Image URL:", img); 
    const { cardItems, addToCart, removeFromCart } = useContext(StoreContext);
    // const [itemCount, setItemCount] = useState(0);

    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img className='food-item-img' src={img} alt="" />
                {!cardItems[id]
                ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt=''/>
                : <div className='food-item-counter'>
                    <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cardItems[id]}</p>
                    <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
                </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="food-item-des">
                    {description}
                </p>
                <p className="food-item-price">Rs{price}</p>
            </div>
        </div>
    );
}

export default Fooditem;
