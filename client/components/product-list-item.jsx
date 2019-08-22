import React from 'react';

function ProductListItem(props) {
  return (
    <div className="card my-3 mx-3 col-3">
      <img src={props.img} alt="img" className="img-fluid mt-3" />
      <div className="mt-3 font-weight-bold">{props.name}</div>
      <div className="mt-2">{'$' + ((props.price) / 100).toFixed(2)}</div>
      <div className="mt-2">{props.shortDesc}</div>
    </div>
  );
}

export default ProductListItem;
