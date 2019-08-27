import React from 'react';
import CartSummaryItem from './cart-summary-item';

function CartSummary(props) {
  return (

    <CartSummaryItem setView={props.setView} cart={props.cart}/>
  );
}

export default CartSummary;
