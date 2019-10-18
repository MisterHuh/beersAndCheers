import React from 'react';
// import { ShippingForm, BillingForm } from './forms';
import { PriceCalculation } from './priceCalculation';
import CartSummaryItem from './cart-summary-item';
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      eMail: '',
      phoneNumber: '',
      streetAddress: '',
      city: '',
      state: '',
      zipCode: '',
      creditCardNumber: '',
      fullName: '',
      monthYear: '',
      cvc: ''
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    console.log('event is: ', e);
    this.setState({ [e.target.name]: e.target.value });
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
                      <Input onClick={this.handleInput} name="firstName" placeholder="First Name" />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label>Last Name</Label>
                      <Input onClick={this.handleInput} name="lastName" placeholder="Last Name" />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Label>E-mail</Label>
                  <Input onClick={this.handleInput} name="eMail" placeholder="E-mail" />
                </FormGroup>
                <FormGroup>
                  <Label>Phone Number</Label>
                  <Input onClick={this.handleInput} name="phoneNumber" placeholder="Phone Number" />
                </FormGroup>
                <FormGroup>
                  <Label >Street Address</Label>
                  <Input onClick={this.handleInput} name="streetAddress" placeholder="Street Address" />
                </FormGroup>

                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label >City</Label>
                      <Input onClick={this.handleInput} name="city" placeholder="City" />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label >State</Label>
                      <Input onClick={this.handleInput} name="state" id="exampleState" placeholder="State" />
                    </FormGroup>
                  </Col>
                  <Col md={2}>
                    <FormGroup>
                      <Label >Zip</Label>
                      <Input onClick={this.handleInput} name="zipCode" id="exampleZip" placeholder="Zipcode" />
                    </FormGroup>
                  </Col>
                </Row>
              </Form>            </div>
            <h2 className="border-bottom pb-2">Payment Info</h2>
            <div className="mt-2 mx-3 mb-4">
              <Form>
                <FormGroup>
                  <Label >Credit Card Number</Label>
                  <Input onClick={this.handleInput} name="creditCardNumber" placeholder="Card Number" />
                </FormGroup>
                <FormGroup>
                  <Label >Full Name</Label>
                  <Input onClick={this.handleInput} name="fullName" placeholder="Full Name" />
                </FormGroup>

                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label>MM/YY</Label>
                      <Input onClick={this.handleInput} name="monthYear" placeholder="MM/YY" />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label>CVC</Label>
                      <Input onClick={this.handleInput} name="cvc" placeholder="CVC" />
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
              cart={this.props.cart}
              placeOrder={this.props.placeOrder} />
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
