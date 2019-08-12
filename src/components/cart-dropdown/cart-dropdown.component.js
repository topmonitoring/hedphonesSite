import React, { useContext } from 'react';
import PopUp from '../ModalPopUp/ModalPopUp';
import { CartContext } from '../../providers/cart.provider';
import CartItem from '../cart-item/cart-item.component';
import CheckoutPage from '../checkout/checkout.component';

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
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <PopUp content={<CheckoutPage />}>
        <CartDropdownButton>GO TO CHECKOUT</CartDropdownButton>
      </PopUp>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
