import React from 'react';
import ProductListItem from './product-list-item';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  render() {
    return (
      <table className="table flex-column">
        <tr>
          <ProductListItem text="item#1" />
        </tr>
      </table>
    );
  }

}

export default ProductList;
