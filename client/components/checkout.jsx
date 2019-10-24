import React from 'react';
import PriceSummary from './priceSummary';
import CartSummaryItem from './cart-summary-item';
import { Button, Col, Row, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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
      cvv: '',
      formErrors: {
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
        cvv: ''
      },
      modal: false,
      orderConfirmation: false
    };

    this.toggle = this.toggle.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.orderConfirmation = this.orderConfirmation.bind(this);
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
      cvv: this.state.cvv
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

    this.props.setView('confirmation', '');
    this.props.placeOrder(productReceipt, receipt);
    this.toggle();
  }

  toggle() {
    this.setState({ modal: !this.state.modal });
  }

  orderConfirmation() {
    if (!this.state.orderConfirmation) {
      this.setState({ orderConfirmation: !this.state.orderConfirmation });
    }
  }

  closeModal() {
    this.props.setView('checkout', '');
    this.toggle();
  }

  handleInput(e) {
    e.preventDefault();
    const emailRegex = RegExp(/[^@]+@[^\.]+\..+/);

    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case 'firstName':
        formErrors.firstName = value.length < 1
          ? 'enter your first name'
          : '';
        break;

      case 'lastName':
        formErrors.lastName = value.length < 1
          ? 'enter your last name'
          : '';
        break;

      case 'eMail':
        formErrors.eMail = emailRegex.test(value)
          ? ''
          : 'invalid email address';
        break;

      case 'phoneNumber':
        formErrors.phoneNumber = value.length !== 10
          ? 'enter a valid 10-digit phone number'
          : '';
        break;

      case 'streetAddress':
        formErrors.streetAddress = value.length < 1
          ? 'enter a valid street address'
          : '';
        break;

      case 'city':
        formErrors.city = value.length < 1
          ? 'enter a valid city'
          : '';
        break;

      case 'state':
        formErrors.state = value.length !== 2
          ? 'invalid state'
          : '';
        break;

      case 'zipCode':
        formErrors.zipCode = value.length !== 5
          ? 'invalid zipcode'
          : '';
        break;

      case 'creditCardNumber':
        formErrors.creditCardNumber = value.length !== 16
          ? 'enter a valid 16-digit credit card number'
          : '';
        break;

      case 'fullName':
        formErrors.fullName = value.length < 1
          ? 'enter your full name'
          : '';
        break;

      case 'monthYear':
        formErrors.monthYear = value.length !== 5
          ? 'invalid mm/yy'
          : '';
        break;

      case 'cvv':
        formErrors.cvv = value.length !== 3 && value.length !== 4
          ? 'invalid cvv'
          : '';
        break;

      default:
        break;
    }
    this.setState({ formErrors, [name]: value });
  }

  componentDidMount() {
    this.setState({ orderConfirmation: false });
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

    const { formErrors } = this.state;

    const emailRegex = RegExp(/[^@]+@[^\.]+\..+/);
    let buttonDisplay;
    this.state.firstName.length >= 1 &&
    this.state.lastName.length >= 1 &&
    emailRegex.test(this.state.eMail) &&
    this.state.phoneNumber.length === 10 &&
    this.state.streetAddress.length >= 1 &&
    this.state.city.length >= 1 &&
    this.state.state.length === 2 &&
    this.state.zipCode.length === 5 &&
    this.state.creditCardNumber.length === 16 &&
    this.state.fullName.length >= 1 &&
    this.state.monthYear.length === 5 &&
    this.state.cvv.length >= 3
      ? buttonDisplay = <Button outline color="success" onClick={this.toggle} className="w-50 bg-success text-white font-weight-bold">Place Order</Button>
      : buttonDisplay = <Button outline color="secondary" className="w-50 bg-secondary text-white font-weight-bold">Fill In Form</Button>;

    let modalButtonDisplay;
    this.state.orderConfirmation
      ? modalButtonDisplay = <Button color="success" className="bg-success text-white font-weight-bold" onClick={() => this.placeOrder()}>Place Order</Button>
      : modalButtonDisplay = <Button color="secondary" className="bg-secondary text-white font-weight-bold">Check the Box!</Button>;

    // if (this.state.monthYear.length === 2) {
    //   let currentMonthYear = this.state.montheYear;
    //   let newMonthYear = currentMonthYear += '/';
    //   this.setState({ monthYear: newMonthYear });
    // }

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
                      <Input
                        className={formErrors.firstName.length > 0 ? 'border border-danger' : null}
                        // className={formErrors.firstName.length > 0 ? 'has-danger' : null}
                        onChange={this.handleInput}
                        name="firstName"
                        placeholder="First Name"
                      />
                      {formErrors.firstName.length > 0 && (
                        <small className="text-danger">{formErrors.firstName}</small>
                      )}
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Input
                        className={formErrors.lastName.length > 0 ? 'border border-danger' : null}
                        onChange={this.handleInput}
                        name="lastName"
                        placeholder="Last Name"
                      />
                      {formErrors.lastName.length > 0 && (
                        <small className="text-danger">{formErrors.lastName}</small>
                      )}
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Input
                    className={formErrors.eMail.length > 0 ? 'border border-danger' : null}
                    onChange={this.handleInput}
                    name="eMail"
                    placeholder="E-mail"
                  />
                  {formErrors.eMail.length > 0 && (
                    <small className="text-danger">{formErrors.eMail}</small>
                  )}
                </FormGroup>
                <FormGroup>
                  <Input
                    maxLength="10"
                    className={formErrors.phoneNumber.length > 0 ? 'border border-danger' : null}
                    onChange={this.handleInput}
                    name="phoneNumber"
                    placeholder="Phone Number"
                  />
                  {formErrors.phoneNumber.length > 0 && (
                    <small className="text-danger">{formErrors.phoneNumber}</small>
                  )}
                </FormGroup>
                <FormGroup>
                  <Input
                    className={formErrors.streetAddress.length > 0 ? 'border border-danger' : null}
                    onChange={this.handleInput}
                    name="streetAddress"
                    placeholder="Street Address"
                  />
                  {formErrors.streetAddress.length > 0 && (
                    <small className="text-danger">{formErrors.streetAddress}</small>
                  )}
                </FormGroup>

                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Input
                        className={formErrors.city.length > 0 ? 'border border-danger' : null}
                        onChange={this.handleInput}
                        name="city"
                        placeholder="City"
                      />
                      {formErrors.city.length > 0 && (
                        <small className="text-danger">{formErrors.city}</small>
                      )}
                    </FormGroup>
                  </Col>
                  <Col md={2}>
                    <FormGroup>
                      <Input
                        maxLength="2"
                        className={formErrors.state.length > 0 ? 'border border-danger' : null}
                        onChange={this.handleInput}
                        name="state"
                        placeholder="State"
                      />
                      {formErrors.state.length > 0 && (
                        <small className="text-danger">{formErrors.state}</small>
                      )}
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Input
                        maxLength="5"
                        className={formErrors.zipCode.length > 0 ? 'border border-danger' : null}
                        onChange={this.handleInput}
                        name="zipCode"
                        placeholder="Zipcode"
                      />
                      {formErrors.zipCode.length > 0 && (
                        <small className="text-danger">{formErrors.zipCode}</small>
                      )}
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </div>

            <h2 className="border-bottom pb-2">Payment Info</h2>

            <div className="mt-2 mx-3 mb-4">
              <Form>
                <FormGroup>
                  <Input
                    maxLength="16"
                    className={formErrors.creditCardNumber.length > 0 ? 'border border-danger' : null}
                    onChange={this.handleInput}
                    name="creditCardNumber"
                    placeholder="Card Number"
                  />
                  {formErrors.creditCardNumber.length > 0 && (
                    <small className="text-danger">{formErrors.creditCardNumber}</small>
                  )}
                </FormGroup>
                <FormGroup>
                  <Input
                    className={formErrors.fullName.length > 0 ? 'border border-danger' : null}
                    onChange={this.handleInput}
                    name="fullName"
                    placeholder="Full Name"
                  />
                  {formErrors.fullName.length > 0 && (
                    <small className="text-danger">{formErrors.fullName}</small>
                  )}
                </FormGroup>

                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Input
                        maxLength="5"
                        className={formErrors.monthYear.length > 0 ? 'border border-danger' : null}
                        onChange={this.handleInput}
                        name="monthYear"
                        placeholder="MM/YY"
                      />
                      {formErrors.monthYear.length > 0 && (
                        <small className="text-danger">{formErrors.monthYear}</small>
                      )}
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Input
                        maxLength="4"
                        className={formErrors.cvv.length > 0 ? 'border border-danger' : null}
                        onChange={this.handleInput}
                        name="cvv"
                        placeholder="cvv"
                      />
                      {formErrors.cvv.length > 0 && (
                        <small className="text-danger">{formErrors.cvv}</small>
                      )}
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </div>

          </div> {/* END billingInfo container */}

          <div id="pricing" className="w-50 d-flex flex-column ml-4">
            <PriceSummary
              setView={this.props.setView}
              view={this.props.view}
              cart={this.props.cart} />

            <div className="text-center pt-1 border-bottom rounded py-4">
              <div className="m-3">
                <Button outline color="primary" onClick={() => this.props.setView('cart', '')} className="w-50 bg-primary text-white font-weight-bold">Go Back To Cart</Button>
              </div>
              <div className="mx-3 mt-3 mb-5">
                {buttonDisplay}
                {/* <Button outline color="success" onClick={this.toggle} className="w-50 bg-success text-white font-weight-bold">Place Order</Button> */}

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalHeader toggle={this.toggle}>Order Summary</ModalHeader>
                  <ModalBody style={modalBodyWrapper}>
                    <div className=" d-flex flex-column px-4 text-center" style={modalWrapper}>

                      <div className="d-flex flex-row ">
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
                          <div>EXP: {this.state.monthYear} <span className="px-1"></span> cvv: {this.state.cvv}</div>
                        </div>

                      </div> {/* end of billing & shipping */}

                      <div className="">
                        <div className="mt-4">
                          <h6 className="border-top pt-2">Order Summary</h6>
                          <div>Total Amount: <strong>$ {(totalAmount / 100).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</strong></div>
                          <div>Total Items: <strong>{count}</strong></div>

                        </div>{/* end of total amount & count */}

                        <div className="mt-4">
                          <h6 className="border-top pt-2">Disclaimer</h6>
                          <Label check>
                            <Input id="disclaimer" type="checkbox" onClick={this.orderConfirmation}/>
                          I agree that this was not a real purchase
                          </Label>
                        </div>
                      </div>

                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" className="bg-primary text-white font-weight-bold" onClick={() => this.closeModal()}>Return To Checkout</Button>
                    {modalButtonDisplay}
                    {/* <Button color="success" className="bg-success text-white font-weight-bold" onClick={() => this.placeOrder()}>Place Order</Button> */}
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
