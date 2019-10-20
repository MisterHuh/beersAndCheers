import React from 'react';
// import { ShippingForm, BillingForm } from './forms';
import { PriceCalculation } from './priceCalculation';
import CartSummaryItem from './cart-summary-item';
import { Button, Col, Row, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'Jae',
      lastName: 'Huh',
      eMail: '',
      phoneNumber: '',
      streetAddress: '1234 Johnson Street',
      city: 'La Habra',
      state: 'CA',
      zipCode: '92683',
      creditCardNumber: '1234567890123456',
      fullName: 'Jaehyuk Huh',
      monthYear: '08/12',
      cvc: '142',
      modal: false
    };

    this.toggle = this.toggle.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
  }

  placeOrder() {

    let cart = this.props.cart;
    let price = 0;
    let count = 0;
    let taxRate = 0.075;
    let taxes = 0;
    let totalAmount = 0;

    if (cart.length > 0) {
      for (let index = 0; index < cart.length; index++) {
        price += (cart[index].count * cart[index].price);
        count += parseInt(cart[index].count);
      }
      taxes = price * taxRate;
      totalAmount = price + taxes;
    }

    let productReceipt = this.props.cart;

    let shippingReceipt = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      eMail: this.state.eMail,
      phoneNumber: this.state.phoneNumber,
      streetAddress: this.state.streetAddress,
      city: this.state.city,
      state: this.state.state,
      zipCode: this.state.zipCode
    };

    let billingReceipt = {
      creditCardNumber: this.state.creditCardNumber,
      fullName: this.state.fullName,
      monthYear: this.state.monthYear,
      cvc: this.state.cvc
    };

    let orderReceipt = {
      totalAmount,
      count
    };

    const receipt = [
      shippingReceipt,
      billingReceipt,
      orderReceipt
    ];

    console.log('CHECKOUT receipt is: ', receipt);

    // console.log('placeOrder cartID is: ', this.props.cart[0].cart_id);
    this.props.setView('confirmation', '');
    // this.props.placeOrder(productReceipt, shippingReceipt, billingReceipt, orderReceipt);
    this.props.placeOrder(productReceipt, receipt);
    this.toggle();
  }

  toggle() {
    this.setState({ modal: !this.state.modal });
  }

  closeModal() {
    this.props.setView('checkout', '');
    this.toggle();
  }

  handleInput(e) {
    console.log('event is: ', e);
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {

    let cart = this.props.cart;
    let price = 0;
    let count = 0;
    let taxRate = 0.075;
    let taxes = 0;
    let totalAmount = 0;

    if (cart.length > 0) {
      for (let index = 0; index < cart.length; index++) {
        price += (cart[index].count * cart[index].price);
        count += parseInt(cart[index].count);
      }
      taxes = price * taxRate;
      totalAmount = price + taxes;
    }

    const containerSize = {
      width: '100wh'
    };
    const modalBodyWrapper = {
      height: '50vh'
    };
    const modalWrapper = {
      height: '100%'
    };
    const modalContainer = {
      height: '100%'
    };
    const modalImgContainer = {
      height: '100%'
    };

    console.log('cart is: ', this.props.cart);

    return (
      <div className="d-flex flex-column px-5 pb-5" style={containerSize}>
        <h1 className="border-bottom my-3 text-center pb-2">Checkout</h1>
        <div className="d-flex flex-row mt-2">
          <div id="personalInfo" className="w-50 d-flex flex-column mr-4">  {/* make sure to use the correct props for id */}
            <h2 className="border-bottom pb-2 ">Shipping Info</h2>
            <div className="mt-2 mx-3 mb-4">
              <Form>

                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      {/* <Label>First Name</Label> */}
                      <Input onClick={this.handleInput} name="firstName" placeholder="First Name" />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      {/* <Label>Last Name</Label> */}
                      <Input onClick={this.handleInput} name="lastName" placeholder="Last Name" />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  {/* <Label>E-mail</Label> */}
                  <Input onClick={this.handleInput} name="eMail" placeholder="E-mail" />
                </FormGroup>
                <FormGroup>
                  {/* <Label>Phone Number</Label> */}
                  <Input onClick={this.handleInput} name="phoneNumber" placeholder="Phone Number" />
                </FormGroup>
                <FormGroup>
                  {/* <Label>Street Address</Label> */}
                  <Input onClick={this.handleInput} name="streetAddress" placeholder="Street Address" />
                </FormGroup>

                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      {/* <Label>City</Label> */}
                      <Input onClick={this.handleInput} name="city" placeholder="City" />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      {/* <Label>State</Label> */}
                      <Input onClick={this.handleInput} name="state" id="exampleState" placeholder="State" />
                    </FormGroup>
                  </Col>
                  <Col md={2}>
                    <FormGroup>
                      {/* <Label>Zip</Label> */}
                      <Input onClick={this.handleInput} name="zipCode" id="exampleZip" placeholder="Zipcode" />
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </div>

            <h2 className="border-bottom pb-2">Payment Info</h2>

            <div className="mt-2 mx-3 mb-4">
              <Form>
                <FormGroup>
                  {/* <Label>Credit Card Number</Label> */}
                  <Input onClick={this.handleInput} name="creditCardNumber" placeholder="Card Number" />
                </FormGroup>
                <FormGroup>
                  {/* <Label>Full Name</Label> */}
                  <Input onClick={this.handleInput} name="fullName" placeholder="Full Name" />
                </FormGroup>

                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      {/* <Label>MM/YY</Label> */}
                      <Input onClick={this.handleInput} name="monthYear" placeholder="MM/YY" />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      {/* <Label>CVC</Label> */}
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
              cart={this.props.cart} />

            <div className="text-center pt-1 border-bottom rounded py-4">
              <div className="m-3">
                <Button outline color="primary" onClick={() => this.props.setView('cart', '')} className="w-50 bg-primary text-white font-weight-bold">Go Back To Cart</Button>
              </div>
              <div className="mx-3 mt-3 mb-5">
                <Button outline color="success" onClick={this.toggle} className="w-50 bg-success text-white font-weight-bold">Place Order</Button>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalHeader toggle={this.toggle}>Order Confirmation</ModalHeader>
                  {/* <ModalHeader toggle={this.toggle} onClick={this.props.addToCart(product, quantity)}>Added To Cart!</ModalHeader> */}
                  <ModalBody style={modalBodyWrapper}>
                    <div className=" d-flex flex-column px-3 text-center" style={modalWrapper}>

                      {/* <div className=" -secondary "> */}
                      {/* <h5>Please Review Your Order</h5> */}

                      <div className="d-flex flex-row">
                        <div className="w-50">
                          <h6 className="">Shipping Info</h6>
                          <div>{this.state.firstName} {this.state.lastName}</div>
                          <div>{this.state.streetAddress}</div>
                          <div>{this.state.city}, {this.state.state}, {this.state.zipCode}</div>

                        </div>
                        <div className=" w-50">
                          <h6 className="">Billing Info</h6>
                          <div>{this.state.fullName}</div>
                          <div>{this.state.creditCardNumber}</div>
                          <div>EXP: {this.state.monthYear} <span className="px-2"></span> CVC: {this.state.cvc}</div>
                        </div>

                        {/* </div> */}
                      </div> {/* end of billing & shipping */}

                      <div className="mt-3 ">
                        <h6 className="border-top pt-3">Order Summary</h6>
                        <div>Total Amount: <strong>$ {(totalAmount / 100).toFixed(2)}</strong></div>
                        <div>Total Items: <strong>{count}</strong></div>

                      </div>{/* end of total amount & count */}

                      <div className="mt-3 ">
                        <h6 className="border-top pt-3">Disclaimer</h6>
                        <Label check>
                          <Input type="checkbox" />{' '}
                          I agree that this was not a real purchase
                        </Label>
                      </div>

                      {/* <div>
                        {this.props.cart.map(item => {
                          return (
                            <CartSummaryItem
                              modalStatus={this.state.modal}
                              setView={this.props.setView}
                              view={this.props.view}
                              key={item.product_Id}
                              item={item}
                              deleteCartItems={this.props.deleteCartItems}
                              updateCartItems={this.props.updateCartItems}
                              retrieveCart={this.props.retrieveCart} />
                          );
                        })}
                      </div> */}

                      {/* <div className="border border-dark w-50 text-center" style={modalContainer}>
                        <img src={product.image} alt="beerImg" className="border border-dark" style={modalImgContainer} />
                      </div>
                      <div className="border border-dark w-50 text-center">
                        <div className="border border-dark h-25" >{product.name}</div>
                        <div className="border border-dark h-25">{product.brewery}</div>
                        <div className="border border-dark h-25">{'$' + ((product.price) / 100).toFixed(2)}</div>
                        <div className="border border-dark h-25">Quantity: {quantity}</div>
                      </div> */}
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" className="bg-primary text-white font-weight-bold" onClick={() => this.closeModal()}>Return To Checkout</Button>
                    <Button color="success" className="bg-success text-white font-weight-bold" onClick={() => this.placeOrder()}>Place Order</Button>
                  </ModalFooter>
                </Modal>

              </div>
            </div>

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
