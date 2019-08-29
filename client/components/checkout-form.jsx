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

  render() {

    let indivItem = this.props.cart;
    let price = 0;

    function getPrice() {
      for (let index = 0; index < indivItem.length; index++) {
        price += indivItem[index]['price'];
      }
      return (price / 100).toFixed(2);
    }

    return (
      <form onSubmit={() => { this.props.placeOrder(this.state); }} className="container">

        <div
          onClick={() => { this.props.setView('catalog', {}); }}
          className="w-25 text-primary my-3">{`< Continue Shopping`}
        </div>

        <div className="container d-flex justify-content-between">
          <div className="font-italic h5 text-muted">Order Total: ${getPrice()}</div>
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
