import React from 'react';

function ProductListItem(props) {

  return (

    <div className="d-inline">
      {props.product.map(item => {
        return (
          <div key={item.id}
            className="card my-3 mx-3 col-3"
            onClick={() => {
              props.setView('details', { 'id': item.id });
            }}>
            <img src={item.image} alt="img" className="img-fluid mt-3" />
            <div className="mt-3 font-weight-bold">{item.name}</div>
            <div className="mt-2">{'$' + ((item.price) / 100).toFixed(2)}</div>
            <div className="mt-2">{item.shortDescription}</div>
          </div>
        );
      })
      }

    </div>
  );

}

export default ProductListItem;
