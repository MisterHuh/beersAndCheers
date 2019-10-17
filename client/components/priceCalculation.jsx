import React from 'react';
import { UncontrolledPopover, PopoverHeader, PopoverBody, Button } from 'reactstrap';

export const PriceCalculation = props => {

  let cart = props.cart;
  let price = 0;
  let taxRate = 0.075;
  let taxes = 0;
  let totalAmount = 0;

  if (cart.length > 0) {
    for (let index = 0; index < cart.length; index++) {
      price += (cart[index].count * cart[index].price);
    }
    taxes = price * taxRate;
    totalAmount = price + taxes;
  }

  let view = props.view;
  let topButton;
  let bottomButton;
  // let topButtonOnClick;
  // let bottomButtonOnClick;
  // let topButtonCatalogView = props.setView("catalog", "");
  // let bottomButtonCheckoutView = props.setView("checkout", "");
  // let topButtonCartViewView = props.setView("cart", "");
  // let bottomButtonOrderPlacedView = props.setView("orderPlaced", "");

  if (view === 'cart') { // You are at cart
    topButton = 'Continue Shopping'; // setview("catalog")
    bottomButton = 'Checkout'; // setView("checkout")
    // topButtonOnClick = props.setView('catalog', '');
    // bottomButtonOnClick = props.setView('checkout', '');

  } else if (view === 'checkout') { // You are at checkout
    topButton = 'Go Back To Cart'; // setView("cart")
    bottomButton = 'Placeorder'; // setView("orderPlaced")
    // topButtonOnClick = props.setView('cart', '');
    // bottomButtonOnClick = props.setView('orderPlaced', '');

  }

  return (
    <div id="pricingDetails" className="ml-4">

      <h2 className="border-bottom pb-2">Summary</h2>

      <div className="m-3">
        <h3 className=" d-inline">Price <div className=" d-inline float-right">${(price / 100).toFixed(2)}</div> </h3>
      </div>

      <div className="m-3">
        <h3 id="shipping" className=" d-inline">Shipping <div className=" d-inline float-right">Free</div> </h3>
        <UncontrolledPopover placement="left" target="shipping">
          <PopoverHeader>Shipping Info</PopoverHeader>
          <PopoverBody>Free shipping on orders of $40 or more <strong>before taxes</strong></PopoverBody>
        </UncontrolledPopover>
      </div>

      <div className="m-3">
        <h3 id="taxes" className=" d-inline">Taxes <div className=" d-inline float-right">${(taxes / 100).toFixed(2)}</div> </h3>
      </div>
      <hr />
      <div className="m-3">
        <h3 className=" d-inline">Total <div className=" d-inline float-right">${(totalAmount / 100).toFixed(2)}</div> </h3>
      </div>

      <div className="text-center pt-1">
        <div className="m-3">
          <Button outline color="primary" onClick={() => props.setView('cart', '')} className="w-50">{topButton}</Button>
        </div>
        <div className="mx-3 mt-3 mb-5">
          <Button outline color="secondary" onClick={() => props.setView('checkout', '')} className="w-50">{bottomButton}</Button>
        </div>
      </div>
    </div>

  );
};
