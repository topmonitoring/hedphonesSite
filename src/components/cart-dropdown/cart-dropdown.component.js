import React, { useContext } from 'react';
import PopUp from '../ModalPopUp/ModalPopUp';
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
      <PopUp content={<h1>ALabala content</h1>}>
        <CartDropdownButton>GO TO CHECKOUT</CartDropdownButton>
      </PopUp>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
