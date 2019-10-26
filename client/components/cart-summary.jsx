import React from 'react';
import CartSummaryItem from './cart-summary-item';
import PriceSummary from './priceSummary';
import { Button } from 'reactstrap';

export const CartSummary = props => {
  const imgSrc = './images/general/emptyCart.png';

  let cartQuantity = props.cartQuantity;
  let itemsVerbiage;
  if (cartQuantity === 1) {
    itemsVerbiage = 'item';
  } else {
    itemsVerbiage = 'items';
  }

  if (props.cart.length === 0) {
    return (
      <div className="text-center" onClick={() => props.setView('catalog', '')}>
        <div className="h1 mt-5 mb-3">Your Cart Is Empty!</div>
        <img onClick={() => props.setView('catalog', '')} src={imgSrc} alt="emptyCart" className="mx-auto d-block mb-5"/>
        <div className="drinkResponsible">Please drink responsibly</div>
      </div>
    );
  } else {
    return (
      <div className="d-flex flex-column px-5">
        <h1 className="border-bottom my-3 text-center pb-2">Cart Summary</h1>
        <div className="d-flex flex-row mt-2">
          <div id="cartDetails" className="w-50 d-flex flex-column mr-4">
            <h2 className="d-inline border-bottom pb-2">
              Cart <div className="cartQtyText d-inline text-muted ml-1">({cartQuantity} {itemsVerbiage})</div>
            </h2>
            {props.cart.map(item => {
              return (
                <CartSummaryItem
                  setView={props.setView}
                  view={props.view}
                  key={item.product_Id}
                  item={item}
                  deleteCartItems={props.deleteCartItems}
                  updateCartItems={props.updateCartItems}
                  retrieveCart={props.retrieveCart} />
              );
            })}
          </div>
          <div id="pricing" className="w-50 d-flex flex-column ml-4">
            <PriceSummary
              setView={props.setView}
              view={props.view}
              cart={props.cart}/>

            <div className="text-center pt-4">
              <div className="m-3">
                <Button outline color="primary"
                  onClick={() => props.setView('catalog', '')}
                  className="w-50 bg-primary text-white font-weight-bold">Continue Shopping</Button>
              </div>
              <div className="mx-3 mt-3 mb-5">
                <Button outline color="success"
                  onClick={() => props.setView('checkout', '')}
                  className="w-50 bg-success text-white font-weight-bold">Checkout</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

};
