import React from 'react';
import { CartSummaryItem } from './cart-summary-item';
import { UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';

export const CartSummary = props => {
  const imgSrc = 'emptycart.png';

  const containerSize = {
    width: '100wh'
  };

  let cart = props.cart;
  let cartQuantity = props.cartQuantity;
  let itemsVerbiage;
  cartQuantity === 1 ? itemsVerbiage = 'item' : itemsVerbiage = 'items';

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

  if (props.cart.length === 0) {
    return (
      <React.Fragment>
        <div className="h1 text-center mb-3">Your Cart Is Empty!</div>
        <img src={imgSrc} alt="emptyCart" className="mx-auto d-block " />
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment> {/* is this React.Fragment necessary? */}
        <div className="d-flex flex-column border border-primary p-5" style={containerSize}>
          {/*  */}
          <div className="d-flex flex-row p-1">
            <h3 className="w-50 d-inline">Cart <div className="d-inline text-muted">({cartQuantity} {itemsVerbiage})</div></h3>
            <h3 className="w-50">Summary</h3>
          </div>

          <div className="d-flex flex-row">
            <div id="productDetails" className="border border-danger w-50 d-flex flex-column">  {/* make sure to use the correct props for id */}
              {props.cart.map(item => {
                return (
                  <CartSummaryItem setView={props.setView} key={item.product_Id} item={item} />
                );
              })}
            </div>

            <div id="pricingDetails" className="border border-secondary w-50">

              <div className="border border-danger mx-3 mt-3">
                <h4 className="border border-success d-inline">Price <div className="border broder-success d-inline float-right">${(price / 100).toFixed(2)}</div> </h4>
              </div>

              <div className="border border-danger mx-3 mt-3">
                <h4 id="shipping" className="border border-success d-inline">Shipping <div className="border broder-success d-inline float-right">Free</div> </h4>
                <UncontrolledPopover placement="left" target="shipping">
                  <PopoverHeader>Shipping Info</PopoverHeader>
                  <PopoverBody>Find a shipping icon, and set it to the right of the string <strong>Shipping</strong></PopoverBody>
                </UncontrolledPopover>
              </div>

              <div className="border border-danger mx-3 mt-3">
                <h4 id="taxes" className="border border-success d-inline">Taxes <div className="border broder-success d-inline float-right">${(taxes / 100).toFixed(2)}</div> </h4>
                <UncontrolledPopover placement="left" target="taxes">
                  <PopoverHeader>Tax Info</PopoverHeader>
                  <PopoverBody>Find a question mark icon, and set it to the right of the string <strong>Taxes</strong></PopoverBody>
                </UncontrolledPopover>
              </div>

              <hr/>

              <div className="border border-danger mx-3 mt-3">
                <h4 className="border border-success d-inline">Total <div className="border broder-success d-inline float-right">${(totalAmount / 100).toFixed(2)}</div> </h4>
              </div>

            </div>{ /* pricingDetails */}

          </div> {/* container for <CartSummaryItem /> and pricingDetails */}

        </div> {/* mainContainer */}
      </React.Fragment>
    );
  }

};
