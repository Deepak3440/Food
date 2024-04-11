import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import {useNavigate} from 'react-router-dom'

const Cart = () => {
  const { cardItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate=useNavigate();

  console.log("cardItems:", cardItems);

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          const quantity = cardItems[item._id] || 0; // Handling undefined values
          if (quantity > 0) {
            return (
              <div className='cart-items-item1' key={item._id}>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>Rs{item.price}</p>
                <p>{quantity}</p>
                <p>Rs{item.price * quantity}</p>
                <button onClick={() => removeFromCart(item._id)}>x</button>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-detail">
              <p>SubTotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className="cart-total-detail">
              <p> DeliveryFees</p>
              <p>{2}</p>
            </div>
            <hr/>
            <div className="cart-total-detail">
              <b>Total</b>
              <b>{getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>Proceed to checkOut</button>
        </div>
        <div className="cart-promocode">
          <p>If you have promocode, Enter it here</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder='promocode'/>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
