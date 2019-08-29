import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: null,
      shippingAddress: ''
    };
    this.inputHeight = {
      height: '250px'
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleCC = this.handleCC.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getPrice = this.getPrice.bind(this);
    this.indivItem = this.props.cart;
  }

  getPrice() {
    let price = 0;
    for (let index = 0; index < this.indivItem.length; index++) {
      price += this.indivItem[index]['price'];
    }
    return (price / 100).toFixed(2);
  }
  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }

  handleCC(event) {
    this.setState({ creditCard: event.target.value });
  }

  handleAddress(event) {
    this.setState({ shippingAddress: event.target.value });
  }

  handleSubmit() {
    event.preventDefault();
    event.target.reset();
    const incomingOrder = {
      name: this.state.name,
      creditCard: this.state.creditCard,
      shippingAddress: this.state.shippingAddress,
      cart: this.props.cart
    };
    this.props.placeOrder(incomingOrder);
    this.setState({
      name: '',
      creditCard: null,
      shippingAddress: ''
    });
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit} className="container">

        <div
          onClick={() => { this.props.setView('catalog', {}); }}
          className="w-25 text-primary my-3">{`< Continue Shopping`}
        </div>

        <div className="container d-flex justify-content-between">
          <div className="font-italic h5 text-muted">Order Total: ${this.getPrice()}</div>
          <div className="h5">Checkout</div>
          <button className="font-italic h5 rounded bg-primary text-light px-2" type="submit">Place Order</button>
        </div>

        <div className="container">

          <div className="my-4 mx-4 text-center">
            <div className="h5">Name</div>
            <input className="w-50 mt-1 form-control my-auto mx-auto" onChange={this.handleChangeName}type="text" />
          </div>

          <div className="my-4 mx-4 text-center">
            <div className="h5">Credit Card</div>
            <input className="w-50 mt-1 form-control my-auto mx-auto" onChange={this.handleCC} type="text"/>
          </div>

          <div className="my-4 mx-4 text-center">
            <div className="h5">Address</div>
            <textarea className="w-50 my-auto mx-auto form-control" onChange={this.handleAddress} rows="4" type="text" />
          </div>

        </div>

      </form>
    );
  }
}

export default CheckoutForm;
