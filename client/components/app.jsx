import React from 'react';
import Header from './header';
import Carousel from './carousel';
import ProductList from './product-list';
import ProductDetails from './product-details';
// import CartSummary from './cart-summary';
// import CheckoutForm from './checkout-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        id: ''
      },
      cart: {}
    };
    this.setView = this.setView.bind(this);
  }

  setView(name, id) {
    console.log('setView name= ', name);
    console.log('setView id= ', id);
    this.setState({
      view: {
        name,
        id: id
      }
    });
  }

  render() {
    let currentView = this.state.view.name;
    // let displayView = null;

    if (currentView === 'catalog') {
      return (
        <div>
          <Header setView={this.setView} />
          <Carousel />
          <ProductList setView={this.setView} />
        </div>
      );
    } else if (currentView === 'details') {
      return (
        <div>
          <Header setView={this.setView} />
          <ProductDetails setView={this.setView} id={this.state.view.id}/>
        </div>
      );
    }
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
