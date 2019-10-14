import React from 'react';
import { Card, CardImg, CardTitle } from 'reactstrap';

export const CartSummaryItem = props => {

  const imgSize = {
    height: '200px',
    width: '200px'
  };

  return (
    <Card>
      <div className="d-flex border border-dark rounded m-3">

        <div className="w-25">
          <CardImg src={props.indivItem.image} alt="img" className="img-fluid border border-danger" style={imgSize}/>
        </div>

        <div className="w-75 border border-sucess">
          <div className="h-25 border border-dark">
            <div className="font-weight-bold border border-dark">{props.indivItem.name}</div>
            <div className="font-weight-bold border border-dark">{props.indivItem.brewery}</div>
          </div>

          <div className="h-25 border border-dark">
            <div className="border border-dark">{'$' + ((props.indivItem.price) / 100).toFixed(2)}</div>
            <div className=" border border-dark">- 1 + </div>
          </div>

          <div className="h-50 border border-dark">
            <div className="border border-dark">Details</div>
            <div className="border border-dark">Remove</div>
          </div>

        </div>

      </div>
    </Card>
  );

};

// return (
//   <React.Fragment>

//     <div className="container">

//       <div className="d-flex border border-dark rounded my-3 mx-5">
//         <img src={props.indivItem.image} alt="img" className="img-fluid" style={imgSize} />

//         <div className="float-right my-3 mx-3">
//           <div className="mt-4 ">{props.indivItem.name}</div>
//           <div className="mt-3 text-muted">{'$' + ((props.indivItem.price) / 100).toFixed(2)}</div>
//           <div className="mt-3">{props.indivItem.shortDescription}</div>
//         </div>

//       </div>
//     </div>
//   </React.Fragment>
// );
