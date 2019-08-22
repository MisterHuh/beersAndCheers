import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null
    };
  }

  componentDidMount() {
    fetch(`/api/products.php?id` + this.props.id)
      .then(res => res.json())
      .then(products => this.setState({ products }));
  }

  render() {
    return (
      <div className="details">this.state.products</div>
    );
  }

}

export default ProductDetails;
