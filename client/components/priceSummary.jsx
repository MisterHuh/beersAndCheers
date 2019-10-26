import React from 'react';
import { Tooltip } from 'reactstrap';

export default class PriceSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shippingTooltipOpen: false,
      taxesTooltipOpen: false
    };
    this.shippingToggle = this.shippingToggle.bind(this);
    this.taxesToggle = this.taxesToggle.bind(this);
  }

  shippingToggle() {
    this.setState({
      shippingTooltipOpen: !this.state.shippingTooltipOpen
    });
  }
  taxesToggle() {
    this.setState({
      taxesTooltipOpen: !this.state.taxesTooltipOpen
    });
  }

  render() {
    let cart = this.props.cart;
    let subTotal = 0;
    let shipping;
    let shippingAmount = 0;
    let taxRate = 0.075;
    let taxes = 0;
    let totalAmount = 0;

    if (cart.length > 0) {
      for (let index = 0; index < cart.length; index++) {
        subTotal += (cart[index].count * cart[index].price);
      }
      if (subTotal >= 4000) {
        shipping = 'Free';
        shippingAmount = 0;
      } else {
        shipping = '$ 15.00';
        shippingAmount = 1500;
      }
      taxes = subTotal * taxRate;
      totalAmount = subTotal + taxes + shippingAmount;
    }

    return (
      <div id="pricingDetails" className="ml-4">
        <h2 className="border-bottom pb-2">Summary</h2>

        <div className="m-3">
          <h4 className=" d-inline">Subtotal
            <div className=" d-inline float-right">$ {(subTotal / 100).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</div>
          </h4>
        </div>

        <div className="m-3">
          <h4 className=" d-inline" >Shipping
            <i id="shipping" className="priceSummaryTooltip ml-2 d-inline fas fa-question-circle"></i>
            <div className=" d-inline float-right">{shipping}</div>
            <Tooltip placement="right" isOpen={this.state.shippingTooltipOpen} target="shipping" toggle={this.shippingToggle}>
              Free shipping on orders of <strong>$40</strong> or more <strong>before taxes</strong>
            </Tooltip>
          </h4>
        </div>

        <div className="m-3">
          <h4 id="taxes" className=" d-inline">Taxes
            <i id="taxes" className="priceSummaryTooltip ml-2 d-inline fas fa-question-circle"></i>
            <div className=" d-inline float-right">$ {(taxes / 100).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</div>
            <Tooltip placement="right" isOpen={this.state.taxesTooltipOpen} target="taxes" toggle={this.taxesToggle}>
              Tax rate of <strong>7.5%</strong>
            </Tooltip>
          </h4>
        </div>
        <hr />
        <div className="m-3">
          <h3 className=" d-inline">Total <div className=" d-inline float-right">$ {(totalAmount / 100).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</div> </h3>
        </div>
      </div>
    );
  }

}
