import React from 'react';
import { FormBody } from './formBody';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import CartSummaryItem from './cart-summary-item';

export default class CheckoutForm extends React.Component {
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

      <div className="d-flex flex-column border border-primary p-5" style={containerSize}>

        <h3 className="border border-dark">Checkout</h3>

        <div className="d-flex flex-row">

          <div id="billingInfo" className="border border-danger w-50 d-flex flex-column">  {/* make sure to use the correct props for id */}
            <h3 className="border border-dark">Shipping Info</h3>
            <div className="mx-3">
              <FormBody />
            </div>
            <h3 className="border border-dark">Payment Info</h3>
            {/* <FormBody /> */}
          </div> {/* billingInfo container */}

          <div id="pricingDetails" className="border border-secondary w-50">
            <h3 className="border border-dark">Summary</h3>

            <div className="border border-danger mx-3 mt-3">
              <h4 className="border border-success d-inline">Price <div className="border broder-success d-inline float-right">${(price / 100).toFixed(2)}</div> </h4>
            </div>

            <div className="border border-danger mx-3 mt-3">
              <h4 id="shipping" className="border border-success d-inline">Shipping <div className="border broder-success d-inline float-right">Free</div> </h4>
            </div>

            <div className="border border-danger mx-3 mt-3">
              <h4 id="taxes" className="border border-success d-inline">Taxes <div className="border broder-success d-inline float-right">${(taxes / 100).toFixed(2)}</div> </h4>
            </div>

            <hr />

            <div className="border border-danger mx-3 my-3">
              <h4 className="border border-success d-inline">Total <div className="border broder-success d-inline float-right">${(totalAmount / 100).toFixed(2)}</div> </h4>
            </div>

            <div>
              <div className="border border-success">
                <Button onClick={() => this.props.setView('cart', '')} className="w-100 border border-dark mb-3 bg-info">Go Back To Cart</Button>
              </div>
              <div className="border border-success">
                <Button onClick={() => this.props.setView('catalog', '')} className="w-100 border border-danger bg-success">Place Order</Button>
              </div>
            </div>

            <div>
              {this.props.cart.map(item => {
                return (
                  <CartSummaryItem setView={this.props.setView} view={this.props.view} key={item.product_Id} item={item} deleteCartItems={this.props.deleteCartItems} updateCartItems={this.props.updateCartItems} retrieveCart={this.props.retrieveCart} />
                );
              })}
            </div>

          </div> {/* pricingDetails table */}
        </div>

      </div>

    );
  }
}

// class CheckoutForm extends React.Component {
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

// export default CheckoutForm;
