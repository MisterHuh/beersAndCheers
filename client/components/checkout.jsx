import React from 'react';
import { CheckoutForm } from './checkout-form';
import { Col, Row, Form, FormGroup, Label, Input, UncontrolledPopover, PopoverHeader, PopoverBody, Button } from 'reactstrap';
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

    let cart = this.props.cart;
    let price = 0;
    let taxRate = 0.075;
    let taxes = 0;
    let totalAmount = 0;

    if (cart.length > 0) {
      for (let index = 0; index < cart.length; index++) {
        price += (cart[index].count * cart[index].price);
      }
      taxes = price * taxRate;
      totalAmount = price + taxes;
    }

    return (

      <div className="d-flex flex-column border border-primary px-5" style={containerSize}>

        <h1 className="border-bottom my-3 text-center pb-2">Checkout</h1>

        <div className="d-flex flex-row mt-2">

          <div id="billingInfo" className="border border-danger w-50 d-flex flex-column mr-4">  {/* make sure to use the correct props for id */}
            <h2 className="border-bottom">Shipping Info</h2>
            <div className="mx-3">
              <CheckoutForm />
            </div>
            <h2 className="border border-dark">Payment Info</h2>
            {/* <CheckoutForm /> */}
          </div> {/* billingInfo container */}

          <div id="pricingDetails" className="w-50 ml-4">

            <h2 className="border-bottom pb-2">Summary</h2>

            <div className="m-3">
              <h3 className=" d-inline">Price <div className=" d-inline float-right">${(price / 100).toFixed(2)}</div> </h3>
            </div>

            <div className="m-3">
              <h3 id="shipping" className=" d-inline">Shipping <div className=" d-inline float-right">Free</div> </h3>
              <UncontrolledPopover placement="left" target="shipping">
                <PopoverHeader>Shipping Info</PopoverHeader>
                <PopoverBody>Free shipping on orders of $40 or more <strong>before taxes</strong></PopoverBody>
              </UncontrolledPopover>
            </div>

            <div className="m-3">
              <h3 id="taxes" className=" d-inline">Taxes <div className=" d-inline float-right">${(taxes / 100).toFixed(2)}</div> </h3>
            </div>

            <hr />

            <div className="m-3">
              <h3 className=" d-inline">Total <div className=" d-inline float-right">${(totalAmount / 100).toFixed(2)}</div> </h3>
            </div>

            <div className="text-center pt-1">
              <div className="m-3">
                <Button outline color="primary" onClick={() => this.props.setView('cart', '')} className="w-50">Back To Cart</Button>
              </div>
              <div className="mx-3 mt-3 mb-5">
                <Button outline color="secondary" onClick={() => this.props.setView('catalog', '')} className="w-50">Place Order</Button>
              </div>
            </div>

            <div>
              {this.props.cart.map(item => {
                return (
                  <CartSummaryItem setView={this.props.setView} view={this.props.view} key={item.product_Id} item={item} deleteCartItems={this.props.deleteCartItems} updateCartItems={this.props.updateCartItems} retrieveCart={this.props.retrieveCart} />
                );
              })}
            </div>

          </div>  {/* pricingDetails table */}
        </div>

      </div>

    );
  }
}

// class Checkout extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       creditCard: null,
//       shippingAddress: ''
//     };
//     this.inputHeight = {
//       height: '250px'
//     };
//     this.handleChangeName = this.handleChangeName.bind(this);
//     this.handleCC = this.handleCC.bind(this);
//     this.handleAddress = this.handleAddress.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.getPrice = this.getPrice.bind(this);
//     this.indivItem = this.props.cart;
//   }

//   getPrice() {
//     let price = 0;
//     for (let index = 0; index < this.indivItem.length; index++) {
//       price += this.indivItem[index]['price'];
//     }
//     return (price / 100).toFixed(2);
//   }
//   handleChangeName(event) {
//     this.setState({ name: event.target.value });
//   }

//   handleCC(event) {
//     this.setState({ creditCard: event.target.value });
//   }

//   handleAddress(event) {
//     this.setState({ shippingAddress: event.target.value });
//   }

//   handleSubmit() {
//     event.preventDefault();
//     event.target.reset();
//     const incomingOrder = {
//       name: this.state.name,
//       creditCard: this.state.creditCard,
//       shippingAddress: this.state.shippingAddress,
//       cart: this.props.cart
//     };
//     this.props.placeOrder(incomingOrder);
//     this.setState({
//       name: '',
//       creditCard: null,
//       shippingAddress: ''
//     });
//   }

//   render() {

//     return (
//       <form onSubmit={this.handleSubmit} className="container">

//         <div
//           onClick={() => { this.props.setView('catalog', {}); }}
//           className="w-25 text-primary my-3">{`< Continue Shopping`}
//         </div>

//         <div className="container d-flex justify-content-between">
//           <div className="font-italic h5 text-muted">Order Total: ${this.getPrice()}</div>
//           <div className="h5">Checkout</div>
//           <button className="font-italic h5 rounded bg-primary text-light px-2" type="submit">Place Order</button>
//         </div>

//         <div className="container">

//           <div className="my-4 mx-4 text-center">
//             <div className="h5">Name</div>
//             <input className="w-50 mt-1 form-control my-auto mx-auto" onChange={this.handleChangeName}type="text" />
//           </div>

//           <div className="my-4 mx-4 text-center">
//             <div className="h5">Credit Card</div>
//             <input className="w-50 mt-1 form-control my-auto mx-auto" onChange={this.handleCC} type="text"/>
//           </div>

//           <div className="my-4 mx-4 text-center">
//             <div className="h5">Address</div>
//             <textarea className="w-50 my-auto mx-auto form-control" onChange={this.handleAddress} rows="4" type="text" />
//           </div>

//         </div>

//       </form>
//     );
//   }
// }

// export default Checkout;
