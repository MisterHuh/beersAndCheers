import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null
    };
  }

  componentDidMount(props) {
    fetch(`/api/products.php?id=` + this.props.id)
      .then(res => res.json())
      .then(products => this.setState({ products }));
  }

  render() {
    return (
      <div className="details">
        <button>Back to catalog</button>
        <div>

        </div>
      </div>
    );
  }

}

export default ProductDetails;
