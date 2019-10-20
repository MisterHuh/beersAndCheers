import React from 'react';
import { UncontrolledPopover, PopoverHeader, PopoverBody, Button } from 'reactstrap';

export const PriceCalculation = props => {

  let cart = props.cart;
  let price = 0;
  let taxRate = 0.075;
  let taxes = 0;
  let totalAmount = 0;

  const cursor = {
    cursor: 'pointer'
  };

  if (cart.length > 0) {
    for (let index = 0; index < cart.length; index++) {
      price += (cart[index].count * cart[index].price);
    }
    taxes = price * taxRate;
    totalAmount = price + taxes;
  }

  return (
    <div id="pricingDetails" className="ml-4">
      <h2 className="border-bottom pb-2">Summary</h2>
      <div className="m-3">
        <h4 className=" d-inline">Subtotal <div className=" d-inline float-right">$ {(price / 100).toFixed(2)}</div> </h4>
      </div>
      <div className="m-3">
        <h4 className=" d-inline" >Shipping
          <i id="shipping" className="ml-2 d-inline fas fa-question-circle" style={cursor}></i>
          <div className=" d-inline float-right">Free</div>
          <UncontrolledPopover placement="left" target="shipping">
            {/* <PopoverHeader>Shipping Info</PopoverHeader> */}
            <PopoverBody>Free shipping on orders of <strong>$40</strong> or more <strong>before taxes</strong></PopoverBody>
          </UncontrolledPopover>
        </h4>
      </div>
      <div className="m-3">
        <h4 id="taxes" className=" d-inline">Taxes <div className=" d-inline float-right">$ {(taxes / 100).toFixed(2)}</div> </h4>
      </div>
      <hr />
      <div className="m-3">
        <h3 className=" d-inline">Total <div className=" d-inline float-right">$ {(totalAmount / 100).toFixed(2)}</div> </h3>
      </div>
      {/* <div className="text-center pt-1">
        <div className="m-3">
          <Button outline color="primary" onClick={() => props.setView(topView, '')} className="w-50">{topButtonMessage}</Button>
        </div>
        <div className="mx-3 mt-3 mb-5">
          <Button outline color="secondary" onClick={() => props.setView(bottomView, '')} className="w-50">{bottomButtonMessage}</Button>
        </div>
      </div> */}
    </div>
  );
};
