import React from 'react';
import PriceSummary from './priceSummary';
import CartSummaryItem from './cart-summary-item';
import { Col, Row, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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

    // const whiteSpaceTrim = RegExp(/\s/g, '');
    const firstLastWhiteSpace = RegExp(/\s+$/, '');
    const emailRegex = RegExp(/[^@]+@[^\.]+\..+/);
    // const numberChecker = RegExp(/^[0-9]*$/);
    // const numberChecker = RegExp(/[2-9]{2}\d{8}/);
    const numberChecker = RegExp(/[^0-9.,]+/);
    // const ccExpDate = RegExp(/^(?:0?[1-9]|1[0-2]) *\/ *[1-9][0-9]$/);

    const { name, value } = e.target;

    let formErrors = this.state.formErrors;

    switch (name) {
      case 'firstName':
        formErrors.firstName = value.length < 1 || firstLastWhiteSpace.test(value)
          ? 'enter your first name'
          : '';
        break;

      case 'lastName':
        formErrors.lastName = value.length < 1 || firstLastWhiteSpace.test(value)
          ? 'enter your last name'
          : '';
        break;

      case 'eMail':
        formErrors.eMail = emailRegex.test(value) || firstLastWhiteSpace.test(value)
          ? ''
          : 'invalid email address';
        break;

      case 'phoneNumber':
        formErrors.phoneNumber = value.length !== 10 || firstLastWhiteSpace.test(value) || numberChecker.test(value)
          ? 'enter a valid 10-digit phone number'
          : '';
        break;

      case 'streetAddress':
        formErrors.streetAddress = value.length < 1 || firstLastWhiteSpace.test(value)
          ? 'enter a valid street address'
          : '';
        break;

      case 'city':
        formErrors.city = value.length < 1 || firstLastWhiteSpace.test(value)
          ? 'enter a valid city'
          : '';
        break;

      case 'state':
        formErrors.state = value.length !== 2 || firstLastWhiteSpace.test(value)
          ? 'invalid state'
          : '';
        break;

      case 'zipCode':
        formErrors.zipCode = value.length !== 5 || firstLastWhiteSpace.test(value) || numberChecker.test(value)
          ? 'invalid zipcode'
          : '';
        break;

      case 'creditCardNumber':
        formErrors.creditCardNumber = value.length !== 16 || firstLastWhiteSpace.test(value) || numberChecker.test(value)
          ? 'enter a valid 16-digit credit card number'
          : '';
        break;

      case 'fullName':
        formErrors.fullName = value.length < 1 || firstLastWhiteSpace.test(value)
          ? 'enter your full name'
          : '';
        break;

      case 'monthYear':
        formErrors.monthYear = value.length !== 5 || firstLastWhiteSpace.test(value)
          ? 'invalid mm/yy'
          : '';
        break;

      case 'cvv':
        formErrors.cvv = (value.length !== 3 && value.length !== 4) || numberChecker.test(value)
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

    const { formErrors } = this.state;

    const emailRegex = RegExp(/[^@]+@[^\.]+\..+/);
    let buttonDisplay;

    if (this.state.firstName.length >= 1 &&
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
        this.state.cvv.length >= 3) {
      buttonDisplay = <div onClick={this.toggle} className="rounded m-auto px-2 py-1 w-50 bg-success text-white font-weight-bold">Place Order</div>;
    } else {
      buttonDisplay = <div className="rounded m-auto px-2 py-1 w-50 bg-secondary text-white font-weight-bold">Fill In Form</div>;
    }

    let modalButtonDisplay;
    if (this.state.orderConfirmation) {
      modalButtonDisplay = <div
        className="rounded px-2 py-1 bg-success text-white font-weight-bold"
        onClick={() => this.placeOrder()}
      >Place Order</div>;
    } else {
      modalButtonDisplay = <div
        className="rounded px-2 py-1 bg-secondary text-white font-weight-bold">Check the Box!</div>;
    }

    let ccLastFourDigits;
    if (this.state.creditCardNumber.length === 16) {
      ccLastFourDigits = this.state.creditCardNumber[12] + this.state.creditCardNumber[13] + this.state.creditCardNumber[14] + this.state.creditCardNumber[14];
    }

    let amexColor, disColor, mcColor, visaColor;
    if (this.state.creditCardNumber.length === 16) {
      if (this.state.creditCardNumber[15] >= 8) {
        amexColor = {
          color: '#007bc1'
        };
      } else if (this.state.creditCardNumber[15] >= 6) {
        disColor = {
          color: '#f68121'
        };
      } else if (this.state.creditCardNumber[15] >= 3) {
        mcColor = {
          color: '#CC0000'
        };
      } else {
        visaColor = {
          color: '#0157a2'
        };
      }
    }

    return (
      <div className="d-flex flex-column px-5">
        <h1 className="border-bottom my-3 text-center pb-2">Checkout</h1>
        <div className="responsiveWrapper mt-2">

          <div id="personalInfo" className="responsiveDivider d-flex flex-column mr-4">
            <h2 className="border-bottom pb-2 ">Shipping Info</h2>
            <div className="mt-2 mx-3 mb-4">
              <Form>

                <Row form>
                  <Col md={5}>
                    <FormGroup>
                      <Input
                        className={formErrors.firstName.length > 0 ? 'border border-danger' : null}
                        onChange={this.handleInput}
                        name="firstName"
                        placeholder="First Name"
                        value={this.state.firstName}
                      />
                      {formErrors.firstName.length > 0 && (
                        <small className="text-danger">{formErrors.firstName}</small>
                      )}
                    </FormGroup>
                  </Col>

                  <Col md={5}>
                    <FormGroup>
                      <Input
                        className={formErrors.lastName.length > 0 ? 'border border-danger' : null}
                        onChange={this.handleInput}
                        name="lastName"
                        placeholder="Last Name"
                        value={this.state.lastName}
                      />
                      {formErrors.lastName.length > 0 && (
                        <small className="text-danger">{formErrors.lastName}</small>
                      )}
                    </FormGroup>
                  </Col>
                </Row>

                <Row form>
                  <Col md={5}>
                    <FormGroup>
                      <Input
                        className={formErrors.eMail.length > 0 ? 'border border-danger' : null}
                        onChange={this.handleInput}
                        name="eMail"
                        placeholder="E-mail"
                        value={this.state.eMail}
                      />
                      {formErrors.eMail.length > 0 && (
                        <small className="text-danger">{formErrors.eMail}</small>
                      )}
                    </FormGroup>
                  </Col>

                  <Col md={5}>
                    <FormGroup>
                      <Input
                        maxLength="10"
                        className={formErrors.phoneNumber.length > 0 ? 'border border-danger' : null}
                        onChange={this.handleInput}
                        name="phoneNumber"
                        placeholder="Phone Number"
                        value={this.state.phoneNumber}
                      />
                      {formErrors.phoneNumber.length > 0 && (
                        <small className="text-danger">{formErrors.phoneNumber}</small>
                      )}
                    </FormGroup>
                  </Col>
                </Row>

                <Row form>
                  <Col md={5}>
                    <FormGroup>
                      <Input
                        className={formErrors.streetAddress.length > 0 ? 'border border-danger' : null}
                        onChange={this.handleInput}
                        name="streetAddress"
                        placeholder="Street Address"
                        value={this.state.streetAddress}
                      />
                      {formErrors.streetAddress.length > 0 && (
                        <small className="text-danger">{formErrors.streetAddress}</small>
                      )}
                    </FormGroup>
                  </Col>
                  <Col md={5}>
                    <FormGroup>
                      <Input
                        className={formErrors.city.length > 0 ? 'border border-danger' : null}
                        onChange={this.handleInput}
                        name="city"
                        placeholder="City"
                        value={this.state.city}
                      />
                      {formErrors.city.length > 0 && (
                        <small className="text-danger">{formErrors.city}</small>
                      )}
                    </FormGroup>
                  </Col>
                </Row>

                <Row form>
                  <Col md={3}>
                    <FormGroup>
                      <Input
                        maxLength="2"
                        className={formErrors.state.length > 0 ? 'border border-danger' : null}
                        onChange={this.handleInput}
                        name="state"
                        placeholder="State"
                        value={this.state.state}
                      />
                      {formErrors.state.length > 0 && (
                        <small className="text-danger">{formErrors.state}</small>
                      )}
                    </FormGroup>
                  </Col>
                  <Col md={3}>
                    <FormGroup>
                      <Input
                        maxLength="5"
                        className={formErrors.zipCode.length > 0 ? 'border border-danger' : null}
                        onChange={this.handleInput}
                        name="zipCode"
                        placeholder="Zipcode"
                        value={this.state.zipCode}
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

                <Row form>
                  <Col md={7}>
                    <FormGroup>
                      <Input
                        className={formErrors.fullName.length > 0 ? 'border border-danger' : null}
                        onChange={this.handleInput}
                        name="fullName"
                        placeholder="Full Name"
                        value={this.state.fullName}
                      />
                      {formErrors.fullName.length > 0 && (
                        <small className="text-danger">{formErrors.fullName}</small>
                      )}
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <div className="ccLogoWrapper d-flex text-align-center mb-3">
                    <i className="ml-3 mr-2 fab fa-cc-amex d-inline vertical-align-middle" style={amexColor}></i>
                    <i className="mx-2 fab fa-cc-discover d-inline vertical-align-middle" style={disColor}></i>
                    <i className="mx-2 fab fa-cc-mastercard d-inline vertical-align-middle" style={mcColor}></i>
                    <i className="mx-2 fab fa-cc-visa d-inline vertical-align-middle" style={visaColor}></i>
                  </div>
                </Row>

                <Row form>
                  <Col md={7}>
                    <FormGroup>
                      <Input
                        maxLength="16"
                        className={formErrors.creditCardNumber.length > 0 ? 'border border-danger' : null}
                        onChange={this.handleInput}
                        name="creditCardNumber"
                        placeholder="Card Number"
                        value={this.state.creditCardNumber}
                      />
                      {formErrors.creditCardNumber.length > 0 && (
                        <small className="text-danger">{formErrors.creditCardNumber}</small>
                      )}
                    </FormGroup>
                  </Col>

                </Row>

                <Row form>
                  <Col md={3}>
                    <FormGroup>
                      <Input
                        maxLength="5"
                        className={formErrors.monthYear.length > 0 ? 'border border-danger' : null}
                        onChange={this.handleInput}
                        name="monthYear"
                        placeholder="MM/YY"
                        value-={this.state.monthYear}
                        value={this.state.monthYear}
                      />
                      {formErrors.monthYear.length > 0 && (
                        <small className="text-danger">{formErrors.monthYear}</small>
                      )}
                    </FormGroup>
                  </Col>
                  <Col md={3}>
                    <FormGroup>
                      <Input
                        maxLength="4"
                        className={formErrors.cvv.length > 0 ? 'border border-danger' : null}
                        onChange={this.handleInput}
                        name="cvv"
                        placeholder="CVV"
                        value={this.state.cvv}
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

          <div id="pricing" className="responsiveDivider d-flex flex-column">
            <PriceSummary
              setView={this.props.setView}
              view={this.props.view}
              cart={this.props.cart} />

            <div className="text-center pt-1 border-bottom rounded py-4">
              <div className="m-3">
                <div
                  onClick={() => this.props.setView('cart', '')}
                  className="rounded w-50 m-auto px-2 py-1 w-50 bg-primary text-white font-weight-bold">Go Back To Cart</div>
              </div>
              <div className="mx-3 mt-3 mb-5">
                {buttonDisplay}

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalHeader toggle={this.toggle}>Order Summary</ModalHeader>
                  <ModalBody className="checkoutConfirmationModal py-3">
                    <div className=" d-flex flex-column text-center">

                      <div className="d-flex flex-row pb-3">
                        <div className="border-right w-50">
                          <h4 className="">Shipping Info</h4>
                          <div className=""><strong>{this.state.firstName} {this.state.lastName}</strong></div>
                          <div className="">{this.state.streetAddress}</div>
                          <div>{this.state.city}, {this.state.state}, {this.state.zipCode}</div>
                        </div>

                        <div className="w-50">
                          <h4 className="">Billing Info</h4>
                          <div className=""><strong>{this.state.fullName}</strong></div>
                          <div className="">cc ending in <strong>{ccLastFourDigits}</strong></div>
                          <div className="">
                            exp: <strong>{this.state.monthYear}</strong>
                            <span className="px-1"></span>
                            cvv: <strong>{this.state.cvv}</strong>
                          </div>
                        </div>

                      </div> {/* end of billing & shipping */}

                      <div className="">
                        <div className="border-top pb-3">
                          <h4 className="pt-3">Order Summary</h4>
                          <div>Total Amount: <strong>$ {(totalAmount / 100).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</strong></div>
                          <div>Total Items: <strong>{count}</strong></div>

                        </div>{/* end of total amount & count */}

                        <div className="border-top">
                          <h4 className="pt-3">Disclaimer</h4>
                          <Label check>
                            <Input id="disclaimer" type="checkbox" onClick={this.orderConfirmation}/>
                            I agree that this was not a <strong>real</strong> purchase
                          </Label>
                        </div>
                      </div>

                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <div
                      onClick={() => this.closeModal()}
                      className="rounded px-2 py-1 bg-primary text-white font-weight-bold">Return To Checkout</div>
                    {modalButtonDisplay}
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
