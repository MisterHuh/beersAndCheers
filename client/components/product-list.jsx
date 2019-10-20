import React from 'react';
import { Carousel } from './carousel';
import { ProductListItem } from './product-list-item';
// import { CardGroup } from 'reactstrap';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    fetch(`/api/products.php`)
      .then(res => res.json())
      .then(products => {
        // console.log(products);
        this.setState({ products });
      });
  }

  render() {
    return (
      <React.Fragment>
        <Carousel />
        <ProductListItem product={this.state.products} setView={this.props.setView}/>
      </React.Fragment>
    );
  }

}

export default ProductList;
