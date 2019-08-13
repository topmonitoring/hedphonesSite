import React, { createContext, useState, useEffect } from 'react';
import {
  addItemToCart,
  removeItemFromCart,
  filterItemFromCart,
  getCartItemsCount,
  getTotalPrice,
} from './cart.utils';

export const CartContext = createContext({
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearItem: () => {},
  cartItemsCount: 0,
  cartItemsTotal: 0,
});

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartItemsTotal, setcartItemsTotal] = useState(0);

  const addItem = item => setCartItems(addItemToCart(cartItems, item));
  const removeItem = item => setCartItems(removeItemFromCart(cartItems, item));
  const clearItem = item => setCartItems(filterItemFromCart(cartItems, item));

  useEffect(
    () => {
      setCartItemsCount(getCartItemsCount(cartItems));
    },
    [cartItems]
  );

  useEffect(
    () => {
      setcartItemsTotal(getTotalPrice(cartItems));
    },
    [cartItems]
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        removeItem,
        cartItemsCount,
        cartItemsTotal,
        clearItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
