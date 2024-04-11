import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);
const StoreContextProvider=(props)=>{

    const [cardItems,setCartItems]=useState({});

    const addToCart=(itemId)=>{
        if(!cardItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }
    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    useEffect(()=>{
        console.log(cardItems);

    },[cardItems])

    const getTotalCartAmount = () => {
      let totalAmount = 0;
      for (const item in cardItems) {
        if (cardItems[item] > 0) {
          let itemInfo = food_list.find((product) => product._id === item);
          totalAmount += itemInfo.price * cardItems[item];
        }
      }
      return totalAmount;
    };
    


    const contextValue={
        food_list,
        cardItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount


    }
    return (
    <StoreContext.Provider value={contextValue}>
        {props.children}
    </StoreContext.Provider>
    )
}

export default StoreContextProvider;