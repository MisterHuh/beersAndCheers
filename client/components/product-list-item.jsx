import React from 'react';

function ProductListItem(props) {

  return (
    <div className="container d-flex row justify-content-center mr-0 border border-primary">
      {props.product.map(item => {
        return (
          <div key={item.id}
            className="card col-3 rounded"
            onClick={() => {
              console.log('item id = ', item.id);
              props.setView('details', {
                'id': item.id });
            }}>
            {/* <img src={item.abv} alt="img" className="img-fluid mt-3" /> */}
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
