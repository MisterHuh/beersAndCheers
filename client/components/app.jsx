import React from 'react';
import { Header } from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import { CartSummary } from './cart-summary';
// import CheckoutForm from './checkout-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'cart',
        id: ''
      },
      cart: [],
      cartQuantity: 0
    };
    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
    this.getCartQuantity = this.getCartQuantity.bind(this);
    this.deleteCartItems = this.deleteCartItems.bind(this);
  }

  componentDidMount() {
    this.getCartItems();
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

  getCartItems() {
    fetch(`/api/cart.php`)
      .then(response => response.json())
      .then(cart => {
        console.log('cart is: ', cart);
        this.setState({ cart }, this.getCartQuantity(cart));
      })
      .catch(error => {
        console.error('delete error: ', error);
      });
  }

  addToCart(product, quantity) {
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: parseInt(product.id),
        count: quantity
      })
    };

    fetch(`/api/cart.php`, req)
      .then(response => response.json())
      .catch(error => {
        console.error('delete error: ', error);
      });

    /* updates the cart once the fetch is completed */
    /* is this necessary?? */
    this.getCartItems();
  }

  deleteCartItems(product) {
    console.log('deleteCartItems fired');
    console.log('deleteCart id is: ', product.product_id);

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
        console.error('delete error: ', error);
      });
    // this.getCartItems();
  }

  setView(name, id) {
    this.setState({
      view: { name, id }
    });
  }

  render() {
    let currentView = this.state.view.name;
    let displayView = null;

    if (currentView === 'catalog') {
      displayView = <ProductList setView={this.setView} />;
    } else if (currentView === 'details') {
      displayView = <ProductDetails setView={this.setView} id={this.state.view.id} addToCart={this.addToCart} />;
    } else if (currentView === 'cart') {
      displayView = <CartSummary setView={this.setView} cart={this.state.cart} cartQuantity={this.state.cartQuantity} deleteCartItems={this.deleteCartItems}/>;
    }
    return (
      <div className="border border-dark">
        <Header setView={this.setView} view={this.state.view.name} cart={this.state.cart} cartQuantity={this.state.cartQuantity}/>
        {displayView}
      </div>
    );
  }

}

// constructor(props) {
//   super(props);
//   this.state = {
//     view: {
//       name: 'catalog',
//       params: {}
//     },
//     cart: []
//   };
//   this.price = 0;
//   this.setView = this.setView.bind(this);
//   this.getCartItems = this.getCartItems.bind(this);
//   this.addToCart = this.addToCart.bind(this);
//   this.placeOrder = this.placeOrder.bind(this);
// }

// setView(name, params) {
//   this.setState({
//     view: {
//       name: name,
//       params: params
//     }
//   });
// }

// getCartItems() {
//   fetch(`/api/cart.php`)
//     .then(res => res.json())
//     .then(cart => this.setState({ cart }));
// }

// addToCart(product) {
//   const req = {
//     method: 'POST',
//     header: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(product)
//   };
//   fetch(`/api/cart.php`, req)
//     .then(res => res.json())
//     .then(cart => {
//       const newCart = this.state.cart.concat(cart);
//       this.setState({ cart: newCart });
//     });
// }

// placeOrder(incomingOrder) {
//   const req = {
//     method: 'POST',
//     header: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(incomingOrder)
//   };

//   fetch(`/api/orders.php`, req)
//     .then(res => res.json())
//     .then(() => {
//       this.setState({ cart: [] });
//       this.setState({ view: { name: 'catalog', params: {} } });
//     });
// }

// componentDidMount() {
//   this.getCartItems();
// }

// render() {
//   let currentView = this.state.view.name;
//   let displayView = null;

//   if (currentView === 'catalog') {
//     displayView = <ProductList setView={this.setView} />;
//   } else if (currentView === 'details') {
//     displayView = <ProductDetails view={this.state.view.params} setView={this.setView} addToCart={this.addToCart} />;
//   } else if (currentView === 'cart') {
//     displayView = <CartSummary cart={this.state.cart} setView={this.setView} />;
//   } else if (currentView === 'checkout') {
//     displayView = <CheckoutForm setView={this.setView} placeOrder={this.placeOrder} cart={this.state.cart} />;
//   }
//   return (
//     <div className="container border border-dark">
//       <Header cartItemCount={this.state.cart.length} setView={this.setView} />
//       {displayView}
//     </div>
//   );

// }
