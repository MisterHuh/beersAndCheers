import React from 'react';

function CartSummaryItem(props) {

  const imgSize = {
    height: '200px',
    width: '200px'
  };

  return (
    <React.Fragment>

      <div className="container">

        <div className="d-flex border border-dark rounded my-3 mx-5">
          <img src={props.indivItem.image} alt="img" className="img-fluid" style={imgSize}/>

          <div className="float-right my-3 mx-3">
            <div className="mt-4 font-weight-bold">{props.indivItem.name}</div>
            <div className="mt-3 text-muted">{'$' + ((props.indivItem.price) / 100).toFixed(2)}</div>
            <div className="mt-3">{props.indivItem.shortDescription}</div>
          </div>

        </div>
      </div>
    </React.Fragment>
  );
}

export default CartSummaryItem;
