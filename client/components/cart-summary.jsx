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
    <React.Fragment>
      <div
        onClick={() => { props.setView('catalog', {}); }}
        className="w-25 text-primary">{`< Back to Catalog`}
      </div>

      <div className="mt-3">Item Total: ${getPrice()}</div>

      {props.cart.map(cart => {
        return (
          <CartSummaryItem setView={props.setView} key={cart.id} indivItem={cart} />
        );
      })}
    </React.Fragment>
  );
}

export default CartSummary;
