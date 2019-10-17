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
        <div className="d-flex flex-column border border-primary p-5" style={containerSize}>

          <h3 className="border border-dark">Cart Summary</h3>

          <div className="d-flex flex-row">

            <div id="productDetails" className="border border-danger w-50 d-flex flex-column">  {/* make sure to use the correct props for id */}
              <h3 className="w-50 d-inline border border-dark">Cart <div className="d-inline text-muted">({cartQuantity} {itemsVerbiage})</div></h3>

              {props.cart.map(item => {
                return (
                  <CartSummaryItem setView={props.setView} view={props.view} key={item.product_Id} item={item} deleteCartItems={props.deleteCartItems} updateCartItems={props.updateCartItems} retrieveCart={props.retrieveCart} />
                );
              })}
            </div>

            <div id="pricingDetails" className="border border-secondary w-50">

              <h3 className="border border-dark">Summary</h3>

              <div className="border border-danger mx-3 mt-3">
                <h4 className="border border-success d-inline">Price <div className="border broder-success d-inline float-right">${(price / 100).toFixed(2)}</div> </h4>
              </div>

              <div className="border border-danger mx-3 mt-3">
                <h4 id="shipping" className="border border-success d-inline">Shipping <div className="border broder-success d-inline float-right">Free</div> </h4>
                <UncontrolledPopover placement="left" target="shipping">
                  <PopoverHeader>Shipping Info</PopoverHeader>
                  <PopoverBody>Free shipping on orders of $40 or more <strong>before taxes</strong></PopoverBody>
                </UncontrolledPopover>
              </div>

              <div className="border border-danger mx-3 mt-3">
                <h4 id="taxes" className="border border-success d-inline">Taxes <div className="border broder-success d-inline float-right">${(taxes / 100).toFixed(2)}</div> </h4>
                <UncontrolledPopover placement="left" target="taxes">
                  {/* <PopoverHeader>Tax Info</PopoverHeader> */}
                  <PopoverBody>The sales tax rate from the city of Irvine (<strong>7.75%</strong>) was applied for this demo application</PopoverBody>
                </UncontrolledPopover>
              </div>

              <hr/>

              <div className="border border-danger mx-3 my-3">
                <h4 className="border border-success d-inline">Total <div className="border broder-success d-inline float-right">${(totalAmount / 100).toFixed(2)}</div> </h4>
              </div>

              <div>
                <div className="border border-success">
                  <Button onClick={() => props.setView('catalog', '')} className="w-100 border border-dark mb-3 bg-info">Continue Shopping</Button>
                </div>
                <div className="border border-success">
                  <Button onClick={() => props.setView('checkout', '')} className="w-100 border border-danger bg-success">Checkout</Button>
                </div>
              </div>

            </div>{ /* pricingDetails */}

          </div> {/* container for <CartSummaryItem /> and pricingDetails */}

        </div> {/* mainContainer */}
      </React.Fragment>
    );
  }

};
