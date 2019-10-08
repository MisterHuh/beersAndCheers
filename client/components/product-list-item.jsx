import React from 'react';

function ProductListItem(props) {

  return (
    <div className="container d-flex row justify-content-center mb-5">
      {props.product.map(item => {
        return (
          <div key={item.id}
            className="card mt-5 mx-3 col-3 rounded"
            onClick={() => {
              console.log('item id = ', item.id);
              props.setView('details', {
                'id': item.id });
            }}>
            <img src={item.images[0]} alt="img" className="img-fluid mt-3" />
            <div className="mt-4 font-weight-bold">{item.name}</div>
            <div className="mt-3">{'$' + ((item.price) / 100).toFixed(2)}</div>
            <div className="mt-3">{item.shortDescription}</div>
          </div>
        );
      })
      }

    </div>
  );

}

export default ProductListItem;
