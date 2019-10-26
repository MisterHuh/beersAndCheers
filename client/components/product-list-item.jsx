import React from 'react';
import { Card, CardImg, CardTitle } from 'reactstrap';

export const ProductListItem = props => {

  return (
    <div className="d-flex flex-row flex-wrap justify-content-center text-center pb-5">
      {props.product.map(item => {
        return (
          <Card key={item.id} className="productListItemCardSize col-2 rounded m-3"
            onClick={() => {
              props.setView('details', item.id);
            }}>
            <div className="productListItemImgContainer mt-2">
              <CardImg src={item.image} alt={item.image} className="productListItemImg m-1 img-fluid" />
            </div>
            <CardTitle className="mx-1 mb-1 mt-3 font-weight-bold">{item.name}</CardTitle>
            <CardTitle className="m-1">{item.brewery}</CardTitle>
            <CardTitle className="mx-1 mt-1 mb-2 text-muted">{'$' + ((item.price) / 100).toFixed(2)}</CardTitle>
          </Card>
        );
      })
      }
    </div>
  );
};
