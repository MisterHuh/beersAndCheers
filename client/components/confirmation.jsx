import React from 'react';
import CartSummaryItem from './cart-summary-item';

export const Confirmation = props => {
  let product = props.productReceipt;
  let receipt = props.receipt;

  console.log('product is: ', product);
  console.log('receipt is: ', receipt);

  let shipping = receipt[0];
  let billing = receipt[1];
  let order = receipt[2];

  console.log('shipping is: ', shipping);
  console.log('shipping name is ', shipping.firstName);

  console.log('billing is: ', billing);
  console.log('billing number is: ', billing.creditCardNumber);

  console.log('order is: ', order);
  console.log('order count is: ', order.count);

  const containerSize = {
    width: '100wh'
  };

  const fontSize = {
    fontSize: '60%'
  };

  let itemsVerbiage;
  order.count === 1 ? itemsVerbiage = 'item' : itemsVerbiage = 'items';

  let orderNumber = billing.fullName[0] + billing.cvc[0] + billing.creditCardNumber[0] + billing.monthYear[0] + shipping.city[0] + shipping.lastName[0];

  return (
    <div className="d-flex flex-column px-5 pb-5" style={containerSize}>
      <h1 className="border-bottom my-3 text-center pb-2">Order Confirmation #{orderNumber}</h1>

      <div id="productSummary" className="d-flex flex-row mt-2">
        <div id="cartDetails" className="w-50 d-flex flex-column mr-4">  {/* make sure to use the correct props for id */}
          <h2 className="d-inline border-bottom pb-2">Purchase Summary <div className="d-inline text-muted ml-1" style={fontSize}>({order.count} {itemsVerbiage})</div>
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
            <h2 className="border-bottom pb-2">Billed To:</h2>

            <div className="m-3">
              <h5>{billing.fullName}  </h5>
            </div>

            <div className="m-3">
              <h5 id="shipping">cc ending with 2000</h5>
            </div>

            <div className="m-3">
              <h5 id="taxes">exp: <strong>{billing.monthYear}</strong> cvc: <strong>{billing.cvc}</strong> </h5>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
