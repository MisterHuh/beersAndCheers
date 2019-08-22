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

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    fetch(`/api/products.php`)
      .then(res => res.json())
      .then(products => this.setState({ products }));
  }

  render() {
    return (
      <div className="row border border-danger justify-content-center ">
        {this.state.products.map(item => {
          return (
            <ProductListItem
              key={item.id}
              img={item.image}
              name={item.name}
              price={item.price}
              shortDesc={item.shortDescription} />
          );
        })};
      </div>

    );
  }

}

export default ProductList;
