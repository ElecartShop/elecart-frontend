import React, { Component } from 'react';

class ProductImage extends Component {
  render() {console.log(this.props);
    return (
      <div>
        <div>
          {this.props.productImage.name}
        </div>
      </div>
    )
  }
}

export default ProductImage;
