import React from 'react';
import { CartSummaryItem } from './cart-summary-item';
import { UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';

export const CartSummary = props => {
  let imgSrc = 'emptycart.png';

  const containerSize = {
    width: '100wh'
  };

  console.log('cart is: ', props.cart);

  if (props.cart.length === 0) {
    return (
      <React.Fragment>
        <div className="h1 text-center mb-3">Your Cart Is Empty!</div>
        <img src={imgSrc} alt="emptyCart" className="mx-auto d-block " />
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div className="d-flex flex-column border border-primary p-5" style={containerSize}>

          <div className="d-flex flex-row p-1">
            <h3 className="w-50 d-inline">Cart <div className="d-inline text-muted">(3 items)</div></h3>
            <h3 className="w-50">Summary</h3>
          </div>

          <div className="d-flex flex-row">
            <div id="productDetails" className="border border-danger w-50 d-flex flex-column">  {/* make sure to use the correct props for id */}
              {props.cart.map(cart => {
                // console.log('productID is: ', cart.product_id);
                return (
                  <CartSummaryItem setView={props.setView} key={cart.product_Id} item={cart} />
                );
              })}
            </div>

            <div id="pricingDetails" className="border border-secondary w-50">
              <h3 className="border border-success mx-3 mt-3">Price</h3>
              <h3 className="border border-success mx-3" id="shipping">Shipping</h3>
              <UncontrolledPopover placement="left" target="shipping">
                <PopoverHeader>Shipping Info</PopoverHeader>
                <PopoverBody>Find a shipping icon, and set it to the right of the string <strong>Shipping</strong></PopoverBody>
              </UncontrolledPopover>
              <h3 className="border border-success mx-3" id="taxes">Taxes</h3>
              <UncontrolledPopover placement="left" target="taxes">
                <PopoverHeader>Tax Info</PopoverHeader>
                <PopoverBody>Find a question mark icon, and set it to the right of the string <strong>Taxes</strong></PopoverBody>
              </UncontrolledPopover>
              <h3 className="border border-success mx-3">Total</h3>
            </div>
          </div>

        </div> {/* mainContainer */}
      </React.Fragment>
    );
  }

};
