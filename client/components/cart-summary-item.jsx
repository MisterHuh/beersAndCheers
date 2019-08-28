import React from 'react';

function CartSummaryItem(props) {

  const img = {
    width: '200px'
  };

  return (
    <React.Fragment>
      <div className="">
        <div className="border border-dark my-3 mx-5">
          <img src={props.indivItem.image} alt="img" className="img-fluid mt-3" style={img}/>
          <div className="mt-3 font-weight-bold">{props.indivItem.name}</div>
          <div className="mt-2">{'$' + ((props.indivItem.price) / 100).toFixed(2)}</div>
          <div className="mt-2">{props.indivItem.shortDescription}</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CartSummaryItem;
