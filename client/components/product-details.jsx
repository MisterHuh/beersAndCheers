import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
    this.retrieveProduct = this.retrieveProduct.bind(this);
  }

  componentDidMount(props) {
    this.retrieveProduct();
  }

  retrieveProduct(props) {
    // const id = parseInt(this.props.id)
    console.log('this.id = ', this.props.id);
    fetch(`/api/products.php?id=` + this.props.id)
      .then(res => res.json())
      .then(product => {
        console.log('this.state.product = ', product);
        this.setState({ product });
      });
    console.log('end of retrieveProduct');

  }

  render() {
    const img = {
      width: '400px'
    };

    const shortDesc = {
      width: '300px'
    };

    const product = this.state.product;

    if (this.state.product) {
      return (
        <div className="container mb-4">
          <div className="mt-3"></div>
          <div
            onClick={() => { this.props.setView('catalog', {}); }}
            className="my-3 w-25 text-primary">{`< Back to Catalog`}
          </div>

          <div className="d-flex px-o">

            <div className="mr-4 " style={img} >
              {/* <img src={products.image} alt="img" className="img-fluid mt-3" style={img} /> */}
            </div>

            <div className="float-right" style={shortDesc}>
              <div className="my-3 font-weight-bold h3">{product.name}</div>
              <div className="my-4 text-muted">${product.brewery}</div>
              <div className="my-4">{product.abv}</div>
              <div className="my-4">{product.ibu}</div>
              <div className="my-4">{product.type}</div>
              <div className="my-4">{product.price}</div>
              <div className=" border border-dark px-2 py-2 w-50 text-center bg-light"
                onClick={
                  () => this.props.addToCart(this.state.product)}
              >Add to Cart</div>
            </div>
          </div>

          <div className="my-4">
            <div className="mt-2">{product.description}</div>
          </div>

        </div>
      );
    } else {
      return (null);
    }
  }

}

export default ProductDetails;
