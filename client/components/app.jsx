import React from 'react';
import { Header } from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import { CartSummary } from './cart-summary';
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
      cart: [
        {
          id: 1,
          productId: 1,
          count: 2,
          price: 999,
          cartID: 2,
          img: 'http://barleyforge.com/wp-content/uploads/2018/10/hero_the_patsy-can-393x1024.png',
          name: 'The Patsy',
          brewery: 'Barley Forge Brewing Co.'
        },
        {
          id: 2,
          productId: 2,
          count: 1,
          price: 999,
          cartID: 3,
          img: 'http://barleyforge.com/wp-content/uploads/2018/10/hero_the-orange-curtain-can-393x1024.png',
          name: 'The Orange Curtain',
          brewery: 'Barley Forge Brewing Co.'
        }
      ]
    };
    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(product) {
    const req = {
      method: 'POST',
      header: { 'Content-Type': 'applicaiton/json' },
      body: JSON.stringify(product)
    };
    fetch(`/api/cart.php`, req)
      .then(res => res.json())
      .then(product => {
        console.log('addToCart Product is: ', product);
        const cart = this.state.cart.concat(product);
        this.setState({ cart });
      });
  }

  setView(name, id) {
    this.setState({
      view: { name, id }
    });
  }

  render() {
    let currentView = this.state.view.name;
    let displayView = null;
    // const sizing = {
    //   width: '100vw',
    //   height: '100vh',
    //   maxWidth: '100%'
    // };
    // style = { sizing }

    if (currentView === 'catalog') {
      displayView = <ProductList setView={this.setView} />;
    } else if (currentView === 'details') {
      displayView = <ProductDetails setView={this.setView} id={this.state.view.id} addToCart={this.addToCart} />;
    } else if (currentView === 'cart') {
      displayView = <CartSummary setView={this.setView} cart={this.cart}/>;
    }
    return (
      <div className="border border-dark">
        <Header setView={this.setView} view={this.state.view.name} />
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
