import React, { useContext } from 'react';
import { CartContext } from '../../providers/cart.provider';
import CheckoutPage from '../checkout/checkout.component';
import PopUp from '../ModalPopUp/ModalPopUp';
import {
  CartIconContainer,
  ItemCountContainer,
  ShoppingIconContainer,
} from './cart-icon.styles';

const CartIcon = () => {
  const { cartItemsCount } = useContext(CartContext);

  return (
    <PopUp content={<CheckoutPage />}>
      <CartIconContainer>
        <ShoppingIconContainer />
        <ItemCountContainer>{cartItemsCount}</ItemCountContainer>
      </CartIconContainer>
    </PopUp>
  );
};

export default CartIcon;
