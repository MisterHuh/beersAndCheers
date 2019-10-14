import React from 'react';
import { CartSummaryItem } from './cart-summary-item';
import { UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';

export const CartSummary = props => {
  let imgSrc = 'emptycart.png';

  const containerSize = {
    width: '100wh'
  };

  console.log('cartSummary component laoded');

  if (props.cart.length === 0) {
    return (
      <React.Fragment>
        <div className="h1 text-center mb-3">Your Cart Is Empty!</div>
        <img src={imgSrc} alt="emptyCart" className="mx-auto d-block " />
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div className="d-flex flex-column border border-primary p-4" style={containerSize}>

          <div className="d-flex flex-row p-1">
            <h3 className="w-50 d-inline">Cart <div className="d-inline text-muted">(3 items)</div></h3>
            <h3 className="w-50">Summary</h3>
          </div>

          <div className="d-flex flex-row">
            <div id="productDetails" className="border border-danger w-50 d-flex flex-column">  {/* make sure to use the correct props for id */}
              {props.cart.map(cart => {
                return (
                  <CartSummaryItem setView={props.setView} key={cart.productId} indivItem={cart} />
                );
              })}
            </div>
            <div id="pricingDetails" className="border border-secondary w-50">
              <h3 className="border border-success mx-3 mt-3">Price</h3>
              <h3 className="border border-success mx-3" id="shipping">Shipping</h3>
              <UncontrolledPopover placement="left" target="shipping">
                <PopoverHeader>Some Clever Title</PopoverHeader>
                <PopoverBody>Find a shipping icon, and set it to the right of the string <strong>Shipping</strong></PopoverBody>
              </UncontrolledPopover>
              <h3 className="border border-success mx-3" id="taxes">Taxes</h3>
              <UncontrolledPopover placement="left" target="taxes">
                <PopoverHeader>Some Clever Title</PopoverHeader>
                <PopoverBody>Find a question mark icon, and set it to the right of the string <strong>Taxes</strong></PopoverBody>
              </UncontrolledPopover>
              <h3 className="border border-success mx-3">Total</h3>
            </div>
          </div>

        </div> {/* mainContainer */}
      </React.Fragment>
    );
  }

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
