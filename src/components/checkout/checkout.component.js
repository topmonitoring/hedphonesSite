import React, { useContext } from 'react';
import CheckoutItem from '../checkout-item/checkout-item.component';
import { CartContext } from '../../providers/cart.provider';

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer,
} from './checkout.styles.js';

const CheckoutPage = () => {
  const { cartItems, cartItemsTotal } = useContext(CartContext);

  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <TotalContainer>TOTAL: ${cartItemsTotal}</TotalContainer>
      <WarningContainer>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </WarningContainer>
      <p>Изберете начин на плащане:</p>

      <div>
        <input type="radio" name="payment" value="Наложен платеж" />
        Наложен платеж
      </div>
      <div>
        <input type="radio" name="payment" value="Кредитна карта" />
        Кредитна карта
      </div>
      <button className="button">CLICK HERE TO BUY</button>
    </CheckoutPageContainer>
  );
};

export default CheckoutPage;
