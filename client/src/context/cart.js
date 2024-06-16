import { useState,useContext, createContext ,useEffect} from "react";


const CartContext=createContext();

const CartProvider=({children})=>{
    const[cart,setCart]=useState([]);

    //fetching the data from local storage sp that after refreshing
    // the page the cart item data will not get empty rather get stored in localstorage

    useEffect(()=>{
        let existingCartItem=localStorage.getItem('cart');
        if(existingCartItem) setCart(JSON.parse(existingCartItem));

    },[])


    return (
        <CartContext.Provider value={[cart,setCart]}>
            {children}

        </CartContext.Provider>
    )
    
}

// custom hook

const useCart=()=>useContext(CartContext);

export {useCart,CartProvider}