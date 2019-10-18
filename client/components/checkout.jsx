import React from 'react';
// import { ShippingForm, BillingForm } from './forms';
import { PriceCalculation } from './priceCalculation';
import CartSummaryItem from './cart-summary-item';
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';

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
              <Form>

                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label>First Name</Label>
                      <Input placeholder="First Name" />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label>Last Name</Label>
                      <Input placeholder="Last Name" />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Label>E-mail</Label>
                  <Input placeholder="E-mail" />
                </FormGroup>
                <FormGroup>
                  <Label>Phone Number</Label>
                  <Input placeholder="Phone Number" />
                </FormGroup>
                <FormGroup>
                  <Label >Street Address</Label>
                  <Input placeholder="Street Address" />
                </FormGroup>

                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label >City</Label>
                      <Input placeholder="City" />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label >State</Label>
                      <Input id="exampleState" placeholder="State" />
                    </FormGroup>
                  </Col>
                  <Col md={2}>
                    <FormGroup>
                      <Label >Zip</Label>
                      <Input id="exampleZip" placeholder="Zipcode" />
                    </FormGroup>
                  </Col>
                </Row>
              </Form>            </div>
            <h2 className="border-bottom pb-2">Payment Info</h2>
            <div className="mt-2 mx-3 mb-4">
              <Form>
                <FormGroup>
                  <Label >Credit Card Number</Label>
                  <Input placeholder="Card Number" />
                </FormGroup>
                <FormGroup>
                  <Label >Full Name</Label>
                  <Input placeholder="Full Name" />
                </FormGroup>

                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label>MM/YY</Label>
                      <Input placeholder="MM/YY" />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label>CVC</Label>
                      <Input placeholder="CVC" />
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </div>
          </div> {/* END billingInfo container */}

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
