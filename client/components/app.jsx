import React from 'react';
import { Header } from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import { CartSummary } from './cart-summary';
import Checkout from './checkout';
import { Confirmation } from './confirmation';
import { About } from './about';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'checkout',
        id: ''
      },
      cart: [],
      cartQuantity: 0,
      productReceipt: [],
      receipt: []
    };
    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.retrieveCart = this.retrieveCart.bind(this);
    this.getCartQuantity = this.getCartQuantity.bind(this);
    this.deleteCartItems = this.deleteCartItems.bind(this);
    this.updateCartItems = this.updateCartItems.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
  }

  componentDidMount() {
    this.retrieveCart();
  }

  getCartQuantity(cart) {
    let cartQuantity = 0;
    if (cart.length > 0) {
      for (let index = 0; index < cart.length; index++) {
        cartQuantity += parseInt(cart[index].count);
      }
    }
    this.setState({ cartQuantity });
  }

  retrieveCart() {
    fetch(`/api/cart.php`)
      .then(response => response.json())
      .then(cart => {
        console.log('cart is: ', cart);
        this.setState({ cart }, this.getCartQuantity(cart));
      })
      .catch(error => {
        // console.error('delete error: ', error);
      });
  }

  addToCart(productId, quantity) {
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: parseInt(productId),
        count: quantity
      })
    };

    fetch(`/api/cart.php`, req)
      .then(response => response.json())
      .catch(error => {
        // console.error('delete error: ', error);
      });

    /* updates the cart once the fetch is completed */
    /* is this necessary?? */
    this.retrieveCart();
  }

  deleteCartItems(product) {
    const req = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: parseInt(product.product_id)
      })
    };
    fetch(`/api/cart.php`, req)
      .then(response => response.json())
      .catch(error => {
        // console.error('delete error: ', error);
      });
    this.retrieveCart();
  }

  updateCartItems(product, count) {
    const req = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: parseInt(product.product_id),
        count: count
      })
    };
    fetch(`/api/cart.php`, req)
      .then(response => response.json())
      .catch(error => {
        // console.error('delete error: ', error);
      });
    this.retrieveCart();
  }

  placeOrder(productReceipt, receipt) {
    this.setState({ productReceipt, receipt });

    const req = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        cartId: parseInt(productReceipt[0].cart_id)
      })
    };
    fetch(`/api/cart.php`, req)
      .then(response => response.json())
      .catch(error => {
        // console.error('placeOrder error: ', error);
      });
    this.retrieveCart();
  }

  setView(name, id) {
    this.setState({
      view: { name, id }
    });
  }

  render() {
    let currentView = this.state.view.name;
    let displayView = null;

    let beer1 = 'beerCurser1.cur';
    let beer2 = 'beerCurser2.cur';

    if (currentView === 'catalog') {
      displayView = <ProductList setView={this.setView} />;
    } else if (currentView === 'details') {
      displayView = <ProductDetails setView={this.setView} id={this.state.view.id} addToCart={this.addToCart} />;
    } else if (currentView === 'cart') {
      displayView = <CartSummary setView={this.setView} view={this.state.view.name} cart={this.state.cart} cartQuantity={this.state.cartQuantity} deleteCartItems={this.deleteCartItems} updateCartItems={this.updateCartItems} retrieveCart={this.retrieveCart} />;
    } else if (currentView === 'checkout') {
      displayView = <Checkout setView={this.setView} view={this.state.view.name} cart={this.state.cart} placeOrder={this.placeOrder}/>;
    } else if (currentView === 'confirmation') {
      displayView = <Confirmation productReceipt={this.state.productReceipt} receipt={this.state.receipt} />;
    } else if (currentView === 'about') {
      displayView = <About />;
    }
    return (
      <div className="border border-dark" >
        <Header setView={this.setView} view={this.state.view.name} cart={this.state.cart} cartQuantity={this.state.cartQuantity}/>
        {displayView}
      </div>
    );
  }

}
