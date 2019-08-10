import React, { useContext } from 'react';
import { CartContext } from '../../providers/cart.context';
import {
  CartIconContainer,
  ItemCountContainer,
  ShoppingIconContainer,
} from './cart-icon.styles';

const CartIcon = () => {
  const { toogleHidden, cartItemsCount } = useContext(CartContext);

  return (
    <CartIconContainer onClick={toogleHidden}>
      <ShoppingIconContainer />
      <ItemCountContainer>{cartItemsCount}</ItemCountContainer>
    </CartIconContainer>
  );
};

export default CartIcon;
