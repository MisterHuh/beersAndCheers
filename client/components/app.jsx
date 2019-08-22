import React from 'react';
import Header from './header';
import ProductListItem from './product-list-item';

export default class App extends React.Component {
  render() {
    return (
      <div className="container border border-dark">
        <Header />
        <ProductListItem />
      </div>
    );
  }
}
