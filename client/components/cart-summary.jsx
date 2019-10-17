import React from 'react';
import CartSummaryItem from './cart-summary-item';
import { UncontrolledPopover, PopoverHeader, PopoverBody, Button } from 'reactstrap';

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
        <div className="d-flex flex-column px-5" style={containerSize}>

          <h1 className="border-bottom my-3 text-center pb-2">Cart Summary</h1>

          <div className="d-flex flex-row mt-2">

            <div id="productDetails" className="w-50 d-flex flex-column mr-4">  {/* make sure to use the correct props for id */}
              <h2 className="d-inline border-bottom pb-2">Cart <div className="d-inline text-muted">({cartQuantity} {itemsVerbiage})</div></h2>

              {props.cart.map(item => {
                return (
                  <CartSummaryItem setView={props.setView} view={props.view} key={item.product_Id} item={item} deleteCartItems={props.deleteCartItems} updateCartItems={props.updateCartItems} retrieveCart={props.retrieveCart} />
                );
              })}
            </div>

            <div id="pricingDetails" className="w-50 ml-4">

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

              <hr/>

              <div className="m-3">
                <h3 className=" d-inline">Total <div className=" d-inline float-right">${(totalAmount / 100).toFixed(2)}</div> </h3>
              </div>

              <div className="text-center pt-1">
                <div className="m-3">
                  <Button outline color="primary" onClick={() => props.setView('catalog', '')} className="w-50">Continue Shopping</Button>
                </div>
                <div className="m-3">
                  <Button outline color="secondary" onClick={() => props.setView('checkout', '')} className="w-50">Checkout</Button>
                </div>
              </div>

            </div>{ /* pricingDetails */}

          </div> {/* container for <CartSummaryItem /> and pricingDetails */}

        </div> {/* mainContainer */}
      </React.Fragment>
    );
  }

};
