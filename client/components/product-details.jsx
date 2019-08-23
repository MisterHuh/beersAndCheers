import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null
    };
  }

  // retrieves the details of a specific product id from the server
  // this one retrives the product info w/ LONGdescription
  componentDidMount(props) {
    // fetch(`/api/products.php?id=` + 1) // hardcoded to pull Shakeweight
    fetch(`/api/products.php?id=` + this.props.view.id) // dynamic
      .then(res => res.json())
      .then(products => this.setState({ products }));
  }

  // will render a view of the product's detail
  render() {
    if (this.state.products) {
      return (
        <div className="container border border-primary">

          <div
            onClick={() => { this.props.setView('catalog', {}); }}
            className="border border-danger">{`< Back to Catalog`}
          </div>

          <div className="card container">

            <div className="border border-dark d-inline">
              <img src={this.state.products.image} alt="img" className="img-fluid mt-3" />
            </div>

            <div className="container border border-danger">
              <div className="mt-3 font-weight-bold">{this.state.products.name}</div>
              <div className="mt-2 text-muted">${(this.state.products.price / 100).toFixed(2)}</div>
              <div className="mt-2">{this.state.products.shortDescription}</div>
            </div>

            <div className="container border border-warning">
              <div className="mt-2">{this.state.products.longDescription}</div>
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
