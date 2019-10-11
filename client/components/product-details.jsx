import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      modal: false
    };
    this.retrieveProduct = this.retrieveProduct.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.retrieveProduct(this.props.id);
  }

  toggle() {
    this.setState({ modal: !this.state.modal });
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
      height: '100vh'
    };

    const subSubContainer = {
      height: '50%',
      width: '100%'
    };

    const imgContainer = {
      height: '60%',
      width: '40%',
      display: 'inline-block'
    };

    // const imgSize = {
    //   width: '100%',
    //   height: '100%'
    //   backgroundSize: 'contain',
    //   backgroundRepeat: 'no-repeat'
    // };

    const infoContainer = {
      width: '60%'
    };

    const headerSize = {
      height: '30%',
      width: '100%'
    };

    const statsSize = {
      height: '70%'
    };

    if (this.state.product) {
      return (
        <div id="mainContainer" className="py-5 px-5 border border-dark">

          <div id="subContainer" className="border border-success">

            <div id="subSubContainer" className="border border-danger d-flex flex-row" style={subSubContainer}>

              <div id="imgContainer" className="border border-warning" style={imgContainer}>
                <img src={product.image} alt="img" className="img-fluid w-100"/>
              </div>

              <div id="infoContainer" className="border border-danger d-flex flex-column" style={infoContainer}>

                <div id="titleBrewery" className="border border-secondary" style={headerSize}>
                  <header>{product.name}</header>
                  <header>{product.brewery}</header>
                </div>

                <div id="restInfo" className="border border-success" style={statsSize}>
                  <div>{product.abv}</div>
                  <div>{product.ibu}</div>
                  <div>500ml bottle</div>
                  <Button onClick={() => { this.props.setView('catalog'); }}>Back To Catalog</Button>
                </div>
              </div>

            </div>

            <div id="productDesc" className="border border-info">
              <p>product description goes here blah blah</p>
            </div>

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
