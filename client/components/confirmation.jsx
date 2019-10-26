import React from 'react';
import CartSummaryItem from './cart-summary-item';

export const Confirmation = props => {
  let product = props.productReceipt;
  let receipt = props.receipt;

  let shipping = receipt[0];
  let billing = receipt[1];
  let order = receipt[2];

  let itemsVerbiage;
  if (order.count === 1) {
    itemsVerbiage = 'item';
  } else {
    itemsVerbiage = 'items';
  }

  let orderNumber = billing.fullName[0] + billing.cvv[0] + billing.creditCardNumber[0] + billing.monthYear[0] + shipping.city[0] + shipping.lastName[0];
  let creditCardDisplay = billing.creditCardNumber[12] + billing.creditCardNumber[13] + billing.creditCardNumber[14] + billing.creditCardNumber[15];

  return (
    <div className="d-flex flex-column px-5 pb-5">
      <h1 className="border-bottom my-3 text-center pb-2">Order Confirmation #{orderNumber}</h1>

      <div id="productSummary" className="d-flex flex-row mt-2">
        <div id="cartDetails" className="w-50 d-flex flex-column mr-4">
          <h2 className="d-inline border-bottom pb-2">
            Purchase Summary
            <div className="cartQtyText d-inline text-muted ml-1">({order.count} {itemsVerbiage})</div>
          </h2>
          {product.map(item => {
            return (
              <CartSummaryItem
                setView={props.setView}
                view={props.view}
                key={item.product_Id}
                item={item}
              />
            );
          })}
        </div>

        <div id="orderSummary" className="w-50 d-flex flex-column ml-4 ">

          <div id="shipping" className="ml-4">
            <h2 className="border-bottom pb-2">Shipping To:</h2>

            <div className="m-3">
              <h5>{shipping.firstName} {shipping.lastName}</h5>
            </div>

            <div className="m-3">
              <h5 id="shipping">{shipping.streetAddress}</h5>
            </div>

            <div className="m-3">
              <h5>{shipping.city}, {shipping.state}, {shipping.zipCode}</h5>
            </div>
          </div>

          <div id="billing" className="ml-4 mt-2">
            <h2 className="border-bottom pb-2">Billing To:</h2>

            <div className="m-3">
              <h5>{billing.fullName}  </h5>
            </div>

            <div className="m-3">
              <h5 id="shipping">cc ending in <strong>{creditCardDisplay}</strong></h5>
            </div>

            <div className="m-3">
              <h5 id="taxes">exp : <strong>{billing.monthYear}</strong> cvv : <strong>{billing.cvv}</strong> </h5>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
