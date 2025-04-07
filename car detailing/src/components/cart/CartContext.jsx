import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  

  const addToCart = (productId,quantity) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.productId === productId);
      if (existingItem){
        return prevItems.map((item) =>
        item.productId === productId ?{...item,quantity:item.quantity+quantity} 
        : item
        );
      } else {
        return [...prevItems, {productId,quantity}]
      }
    })
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const index = prevItems.findIndex((item) => item.productId === productId);
      if (index !== -1) {
        const newItems = [...prevItems];
        newItems.splice(index, 1);
        return newItems;
      }
      return prevItems;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
