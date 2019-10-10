import React from 'react';

function ProductListItem(props) {

  // const productListItemSize = {
  //   width: '100vw'
  // };
  // style = { productListItemSize }

  return (
    <div className="container d-flex row justify-content-center border border-primary">
      {props.product.map(item => {
        return (
          <div key={item.id}
            className="card col-3 rounded"
            onClick={() => {
              props.setView('details', item.id);
            }}>
            <img src={item.image} alt="img" className="img-fluid mt-3" />
            <div className="mt-4 font-weight-bold">{item.name}</div>
            <div className="mt-3">{item.brewery}</div>
            <div className="mt-3">{item.type}</div>
            <div className="mt-3">{'$' + ((item.price) / 100).toFixed(2)}</div>
          </div>
        );
      })
      }

    </div>
  );

}

export default ProductListItem;
