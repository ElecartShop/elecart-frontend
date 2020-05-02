import React, { Component } from 'react'
import ProductImage from './ProductImage';

class Product extends Component {
  render() {
    if (!this.props.product.productImages[0]) {
      this.props.product.productImages[0] = {
        name: "No Image"
      };
    }
    return (
      <div>
        <div>
          <ProductImage
            key={this.props.product.productImages[0]._id}
            productImage={this.props.product.productImages[0]} />
          {this.props.product.name}
        </div>
      </div>
    )
  }
}

export default Product;
