import React from 'react';
import CartSummaryItem from './cart-summary-item';

export const CartSummary = props => {
  return (
    <React.Fragment>
      <h1>CartSummary View</h1>
    </React.Fragment>
  );
};

// function CartSummary(props) {
//   let imgSrc = 'emptycart.png';
//   let indivItem = props.cart;
//   let price = 0;

//   function getPrice() {
//     for (let index = 0; index < indivItem.length; index++) {
//       price += indivItem[index]['price'];
//     }
//     return (price / 100).toFixed(2);
//   }

//   if (props.cart.length === 0) {
//     return (
//       <div className="container mb-3">
//         <div
//           onClick={() => { props.setView('catalog', {}); }}
//           className="w-25 text-primary my-3">{`< Back to Catalog`}
//         </div>

//         <div className="h1 text-center mb-3">Your Cart Is Empty!</div>
//         <img src={imgSrc} alt="emptyCart" className="mx-auto d-block "/>

//       </div>
//     );
//   } else {
//     return (
//       <div className="container">

//         <div
//           onClick={() => { props.setView('catalog', {}); }}
//           className="w-25 text-primary my-3">{`< Back to Catalog`}
//         </div>

//         <div className="container d-flex justify-content-between ">

//           <div className="font-italic h5 text-muted">Item Total: ${getPrice()}</div>

//           <div className="h5">My Cart</div>

//           <button className="font-italic h5 rounded bg-primary text-light px-2"
//             onClick={() => { props.setView('checkout', {}); }}>Check Out</button>
//         </div>
//         {props.cart.map(cart => {
//           return (
//             <CartSummaryItem setView={props.setView} key={cart.id} indivItem={cart} />
//           );
//         })}
//       </div>
//     );
//   }

// }

// export default CartSummary;
