import React, { useContext } from 'react';

import { CartContext } from '../../providers/cart.context';

import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer,
} from './cart-dropdown.styles';

const CartDropdown = () => {
  const { cartItems, toogleHidden } = useContext(CartContext);
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
      </CartItemsContainer>
      <CartDropdownButton
        onClick={() => {
          toogleHidden();
        }}
      >
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
