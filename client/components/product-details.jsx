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
    // this.retrieveProduct(this.props.id);
    console.log('componentDidMount()= ', this.props.id);
    this.retrieveProduct(this.props.id);
  }

  retrieveProduct(props) {
    // const id = parseInt(this.props.id)
    console.log('this.id = ', this.props.id);
    console.log('this.id.id = ', this.props.id.id);
    console.log('/api/products.php?id=' + this.props.id.id);
    // fetch(`/api/products.php?id=` + JSON.stringify(this.props.id.id))
    fetch(`/api/products.php?id=` + this.props.id.id)
      .then(res => res.json())
      .then(product => {
        console.log('this.state.product = ', product);
        this.setState({ product: product[0] });
      });
    console.log('end of retrieveProduct');

  }

  render() {
    const img = {
      width: '30vw',
      height: '55vh'
    };

    const shortDesc = {
      width: '300px'
    };

    const product = this.state.product;
    const testPic = 'beer1.png';

    if (this.state.product) {
      return (
        <div className="border border-dark d-flex flex-row">  {/* Main Container */}

          <div className="border border-primary">             {/* name || brewery */}
            <div>Name</div>
            <div>-------</div>
            <div>brewery</div>
          </div>

          <div className="border border-secondary">           {/* abv || ibu || stype || price */}
            <div className="border border-danger">            {/* button container */}
              <button>Continue Shopping</button>
              <button>Add To Cart</button>
            </div>
          </div>

          <div className="border border-danger">                                               {/* description */}
            <h1>Product Details</h1>
            <p>Product Description</p>
          </div>

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
