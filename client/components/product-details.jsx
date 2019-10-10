import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
    this.retrieveProduct = this.retrieveProduct.bind(this);
  }

  componentDidMount() {
    this.retrieveProduct(this.props.id);
  }

  retrieveProduct(props) {
    fetch(`/api/products.php?id=` + this.props.id)
      .then(res => res.json())
      .then(product => { this.setState({ product }); });
  }

  render() {
    const img = {
      width: '10vw',
      height: '30vh'
    };

    const shortDesc = {
      width: '300px'
    };

    const product = this.state.product;
    const testPic = 'beer1.png';

    const mainContainer = {
      width: '100vw',
      height: '80vh'
    };

    if (this.state.product) {

      /* scrap this design and come up with a new one */
      // return (
      //   <div className="border border-dark d-flex flex-column px-4 py-4" style={mainContainer}>  {/* Main Container */}

      //     <div className="w-100 h-25 text-center">
      //       <h4 className="">{product.name}</h4>
      //       <h4 className="">-------</h4>
      //       <h4 className="">{product.brewery}</h4>
      //     </div>

      //     <div className=" d-flex flex-row h-50"> {/* img | abv | ibu | type | price | quantity??? */}
      //       <div className=" w-50">
      //         <img src={product.images} alt="img" style={img}/>
      //       </div>
      //       <div className="w-50">
      //         <div className="">ABV: {product.abv}</div>
      //         <div className="">IBU: {product.ibu}</div>
      //         <div className="">TYPE: {product.type}</div>
      //         {/* <div className="">Quantity: 1</div> */}
      //         <div className="">
      //           <button className="">Back to Catalog</button>
      //           <button className="">Add to Cart</button>
      //         </div>
      //       </div>
      //     </div>

      //     <div className=" h-25">
      //       <h4 className="">Product Descriptoin</h4>
      //       <p className="">{product.description}</p>
      //     </div>

      //   </div>
      // );

      return (
        <div className="container mb-4 border border-danger">

          {/* <div
            onClick={() => { this.props.setView('catalog', ''); }}
            className="my-3 w-25 text-primary border border-secondary">{`< Back to Catalog`}
          </div> */}

          <div className="d-flex px-o border border-secondary">

            <div className="mr-4 border border-dark" style={img} >
              <img src={product.image} alt="img" className="img-fluid mt-3" />
            </div>

            <div className="float-right" style={shortDesc}>
              <div className="my-4 font-weight-bold h3">{product.name}</div>
              <div className="my-4">{product.brewery}</div>
              <div className="my-4">abv : {product.abv}</div>
              <div className="my-4">ibu : {product.ibu}</div>
              <div className="my-4">type: {product.type}</div>
              <div className="my-4 text-muted">{'$' + ((product.price) / 100).toFixed(2)}</div>
              <div className=" border border-dark px-2 py-2 w-50 text-center bg-primary"
                onClick={
                  () => this.props.setView('catalog', '')}
              >Back to Catalog</div>
              <div className=" border border-dark px-2 py-2 w-50 text-center bg-warning"
                onClick={
                  () => this.props.addToCart(this.state.product)}
              >Add to Cart</div>
            </div>

          </div>

          <div className="my-4">
            <div className="border border-dark">{product.description}</div>
          </div>

          {/* <fieldset className="my-4">
            <legend className="border border-dark">Product Details</legend>
            <p>{product.description}</p>
          </fieldset> */}

        </div>
      );

    } else {
      return (null);
    }
  }

}

export default ProductDetails;

// return (
//   <div className="container mb-4 border border-danger">

//     <div
//             onClick={() => { this.props.setView('catalog', {}); }}
//             className="my-3 w-25 text-primary border border-secondary">{`< Back to Catalog`}
//           </div>

//     <div className="d-flex px-o border border-secondary">

//       <div className="mr-4 border border-dark" style={img} >
//         <img src={testPic} alt="img" className="img-fluid mt-3" />
//       </div>

//       <div className="float-right" style={shortDesc}>
//         <div className="my-4 font-weight-bold h3">{product.name}</div>
//         <div className="my-4">{product.brewery}</div>
//         <div className="my-4">{product.abv}</div>
//         <div className="my-4">{product.ibu}</div>
//         <div className="my-4">{product.type}</div>
//         <div className="my-4 text-muted">{'$' + ((product.price) / 100).toFixed(2)}</div>
//         <div className=" border border-dark px-2 py-2 w-50 text-center bg-light"
//           onClick={
//             () => this.props.addToCart(this.state.product)}
//         >Add to Cart</div>
//       </div>
//     </div>

//     <div className="my-4">
//       <div className="border border-dark">{product.description}</div>
//     </div>

//   </div>
// );
