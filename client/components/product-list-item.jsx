import React from 'react';

function ProductListItem(props) {

  return (
    <div className="container d-flex row justify-content-center mb-5">
      {props.product.map(item => {
        return (
          <div key={item.id}
            className="card mt-5 mx-3 col-3"
            onClick={() => {
              props.setView('details', {
                'id': item.id,
                'name': item.name,
                'image': item.image,
                'price': item.price,
                'shortDescription': item.shortDescription });
            }}>
            <img src={item.image} alt="img" className="img-fluid mt-3" />
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
