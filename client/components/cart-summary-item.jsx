import React from 'react';

function CartSummaryItem(props) {
  let price = 0;
  props.cart.map(item => {
    price += item.price;
  });

  return (
    <React.Fragment>

      <div
        onClick={() => { props.setView('catalog', {}); }}
        className="mb-4 w-25 text-primary">{`< Back to Catalog`}
      </div>

      <div>Total: ${(price / 100).toFixed(2)} </div>

      <div className="border border-dark">
        {props.cart.map(item => {
          const img = {
            width: '200px'
          };

          return (
            <div key={item.id} className="border border-danger my-5 mx-5">
              <img src={item.image} alt="img" className="img-fluid mt-3" style={img}/>
              <div className="mt-3 font-weight-bold">{item.name}</div>
              <div className="mt-2">{'$' + ((item.price) / 100).toFixed(2)}</div>
              <div className="mt-2">{item.shortDescription}</div>
            </div>
          );
        })}

      </div>

    </React.Fragment>
  );
}

export default CartSummaryItem;
