import React from 'react';
import CartSummaryItem from './cart-summary-item';

function CartSummary(props) {

  let indivItem = props.cart;

  let price = 0;
  function getPrice() {
    for (let index = 0; index < indivItem.length; index++) {
      price += indivItem[index]['price'];
    }
    return (price / 100).toFixed(2);
  }

  return (
    <div className="container">
      <div
        onClick={() => { props.setView('catalog', {}); }}
        className="w-25 text-primary mt-3">{`< Back to Catalog`}
      </div>

      <div className="my-3 text-right font-italic h5">Item Total: ${getPrice()}</div>

      {props.cart.map(cart => {
        return (
          <CartSummaryItem setView={props.setView} key={cart.id} indivItem={cart} />
        );
      })}
    </div>
  );
}

export default CartSummary;
