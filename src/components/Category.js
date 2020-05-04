import React, { Component } from 'react'
import ProductList from './ProductList';

class Category extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.category.name}
        </div>
        <div>
          <ProductList products={this.props.category.products} />
        </div>
      </div>
    );
  }
}

export default Category;
