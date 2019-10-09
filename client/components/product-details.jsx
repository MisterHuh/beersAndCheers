import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null
    };
  }

  componentDidMount(props) {
    fetch(`/api/products.php?id=` + this.props.view.id)
      .then(res => res.json())
      .then(products => {
        console.log('this.state.products = ', products);
        this.setState({ products });
      }
      );
  }

  render() {
    const img = {
      width: '400px'
    };

    const shortDesc = {
      width: '300px'
    };

    if (this.state.products) {
      return (
        <div className="container mb-4">
          <div className="mt-3"></div>
          <div
            onClick={() => { this.props.setView('catalog', {}); }}
            className="my-3 w-25 text-primary">{`< Back to Catalog`}
          </div>

          <div className="d-flex px-o">

            <div className="mr-4 " style={img} >
              <img src={this.state.products[0]['images'][0]} alt="img" className="img-fluid mt-3" style={img} />
            </div>

            <div className="float-right" style={shortDesc}>
              <div className="my-3 font-weight-bold h3">{this.state.products[0]['name']}</div>
              <div className="my-4 text-muted">${(this.state.products[0]['price'] / 100).toFixed(2)}</div>
              <div className="my-4">{this.state.products[0]['shortDescription']}</div>
              <div className=" border border-dark px-2 py-2 w-50 text-center bg-light"
                onClick={
                  () => this.props.addToCart(this.state.products)}
              >Add to Cart</div>
            </div>
          </div>

          <div className="my-4">
            <div className="mt-2">{this.state.products[0]['longDescription']}</div>
          </div>

        </div>
      );
    } else {
      return (null);
    }
  }

}

export default ProductDetails;
