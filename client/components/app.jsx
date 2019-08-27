import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      },
      cart: []
    };
    this.setView = this.setView.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: params
      }
    });
  }

  getCartItems() {
    fetch(`/api/cart.php`)
      .then(res => res.json())
      .then(cart => this.setState({ cart }));
  }

  addToCart(product) {
    const req = {
      method: 'POST',
      header: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    };
    fetch(`/api/cart.php`, req)
      .then(res => res.json())
      .then(cart => {
        const newCart = this.state.cart.concat(cart);
        this.setState({ cart: newCart });
      });
  }

  componentDidMount() {
    this.getCartItems();
  }

  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <div className="container border border-dark">
          <Header cartItemCount={this.state.cart.length} setView={this.setView} />
          <ProductList setView={this.setView} />
        </div>
      );
    } else if (this.state.view.name === 'details') {
      return (
        <div className="container border border-dark">
          <Header cartItemCount={this.state.cart.length} setView={this.setView} />
          <ProductDetails view={this.state.view.params} setView={this.setView} addToCart={this.addToCart} />
        </div>
      );
    } else if (this.state.view.name === 'cart') {
      return (
        <div className="container border border-dark">
          <Header cartItemCount={this.state.cart.length} setView={this.setView} />
          <CartSummary cart={this.state.cart} setView={this.setView} />
        </div>
      );
    }
  }
}
