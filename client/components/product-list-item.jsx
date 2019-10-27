import React from 'react';

export const ProductListItem = props => {

  return (
    <div className="d-flex flex-row flex-wrap justify-content-center text-center pb-5">
      {props.product.map(item => {
        return (
          <div
            key={item.id}
            onClick={() => {
              props.setView('details', item.id);
            }}
            className="cardSize border rounded mx-auto my-2 p-2"
          >
            <div className="productListItemImgContainer h-75">
              <img src={item.image} alt={item.image} className="productListItemImg img-fluid pb-2" />
            </div>
            <div className="h-25 d-flex flex-column justify-content-space-evenly align-items-center">
              <div className="mb-auto font-weight-bold">{item.name}</div>
              <div className="my-auto">{item.brewery}</div>
              <div className="mt-auto pb-2 text-muted">{'$' + ((item.price) / 100).toFixed(2)}</div>
            </div>
          </div>
        );
      })
      }
    </div>
  );
};
