import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {
  render() {
    return (
      <div>
        {this.props.products.map(product => <Product key={product._id} product={product} />)}
      </div>
    );
  }
}

export default ProductList;
