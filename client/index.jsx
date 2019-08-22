import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
// import ProductDetail from './components/product-details'; // remove

ReactDOM.render(
  <App/>,
  // <ProductDetail/>, // remove
  document.querySelector('#root')
);
