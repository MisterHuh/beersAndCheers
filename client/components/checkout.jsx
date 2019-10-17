import React from 'react';
import { ShippingForm, BillingForm } from './forms';
import { PriceCalculation } from './priceCalculation';
import CartSummaryItem from './cart-summary-item';

export default class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  render() {
    const containerSize = {
      width: '100wh'
    };

    return (
      <div className="d-flex flex-column border border-primary px-5" style={containerSize}>
        <h1 className="border-bottom my-3 text-center pb-2">Checkout</h1>
        <div className="d-flex flex-row mt-2">
          <div id="personalInfo" className="w-50 d-flex flex-column mr-4">  {/* make sure to use the correct props for id */}
            <h2 className="border-bottom pb-2 ">Shipping Info</h2>
            <div className="mt-2 mx-3 mb-4">
              <ShippingForm />
            </div>
            <h2 className="border-bottom pb-2">Payment Info</h2>
            <div className="mt-2 mx-3 mb-4">
              <BillingForm />
            </div>
          </div> {/* billingInfo container */}
          <div id="pricing" className="w-50 d-flex flex-column ml-4">
            <PriceCalculation
              setView={this.props.setView}
              view={this.props.view}
              cart={this.props.cart} />
            <div className="">
              {this.props.cart.map(item => {
                return (
                  <CartSummaryItem
                    setView={this.props.setView}
                    view={this.props.view}
                    key={item.product_Id}
                    item={item}
                    deleteCartItems={this.props.deleteCartItems}
                    updateCartItems={this.props.updateCartItems}
                    retrieveCart={this.props.retrieveCart} />
                );
              })}
            </div>
          </div>
        </div>  {/* FORM on left    calc & Cartsummary right */}
      </div>
    );
  }
}
