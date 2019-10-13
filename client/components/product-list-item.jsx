import React from 'react';
import { Card } from 'reactstrap';

// import { Card, CardImg, CardTitle, CardSubtitle, CardBody } from 'reactstrap';

function ProductListItem(props) {

  const containerSize = {
    width: '100%',
    height: '100%'
  };
  const cardSize = {
    height: '100%',
    backgroundColor: 'rgba(245, 245, 245, 0.6)'
  };
  const test = {
    // width: '100%',
    height: '70vh'
  };
  const imgSize = {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover'
    // backgroundRepeat: 'no-repeat'
  };

  return (
    <div className="d-flex flex-row flex-wrap justify-content-center border border-primary text-center border border-dark" style={containerSize}>
      {props.product.map(item => {
        return (
          <Card key={item.id}
            className="col-2 rounded m-3"
            style = {cardSize}
            onClick={() => {
              props.setView('details', item.id);
            }}>
            <div style={test}>
              <img src={item.image} alt="img" className="m-1 img-fluid" style={imgSize} />
            </div>
            <div className="mx-1 mb-1 mt-2 font-weight-bold">{item.name}</div>
            <div className="m-1">{item.brewery}</div>
            <div className="m-1">{item.type}</div>
            <div className="m-1 text-muted">{'$' + ((item.price) / 100).toFixed(2)}</div>
          </Card>
        );
      })
      }
    </div>

  // <Card>
  //   {props.product.map(item => {
  //     return (
  //       <React.Fragment key={item.id} onClick={() => props.setView('details', item.id)}>
  //         <CardImg top width="100%" src={item.image} alt="Card image cap" />
  //         <CardBody>
  //           <CardTitle>{item.name}</CardTitle>
  //           <CardSubtitle>{item.brewery}</CardSubtitle>
  //           <CardSubtitle>{item.type}</CardSubtitle>
  //           <CardSubtitle>{'$' + ((item.price) / 100).toFixed(2)}</CardSubtitle>
  //         </CardBody>
  //       </React.Fragment>
  //     );
  //   })}
  // </Card>

  );

}

export default ProductListItem;
