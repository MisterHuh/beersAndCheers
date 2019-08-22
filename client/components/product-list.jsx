import React from 'react';
import ProductListItem from './product-list-item';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.getProducts = this.getProducts.bind(this);
  }

  getProducts() {
    fetch(`/api/products.php`)
      .then(res => res.json())
      .then(products => this.setState({ products }));
  }

  render() {
    return (
      <table className="table flex-column">
        <tbody>
          <tr>
            <ProductListItem text="item#1" />
          </tr>
        </tbody>
      </table>
    );
  }

}

export default ProductList;
