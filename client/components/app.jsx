import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      },
      cart: [9999]
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
      .then(res => res.json());
  }

  addToCart(product) {
    const req = {
      metod: 'POST',
      header: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    };
    fetch(`/api/cart.php`, req)
      .then(res => res.json())
      .then(cart => this.setState({ cart }));
  }

  componentDidMount() {
    this.getCartItems();
  }

  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <div className="container border border-dark">
          <Header />
          <ProductList setView={this.setView} />
        </div>
      );
    } else {
      return (
        <div className="container border border-dark">
          <Header cartItemCount={this.state.cart} />
          <ProductDetails view={this.state.view.params} setView={this.setView}/>
        </div>
      );
    }
  }
}
