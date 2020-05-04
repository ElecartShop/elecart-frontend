import React from 'react';
import PropTypes from 'prop-types';
import ProductImage from './ProductImage';

const Product = ({ product }) => {
  /*
  if (!product.productImages[0]) {
    product.productImages[0] = {
      name: 'No Image',
    };
  }
  */
  return (
    <div>
      <div>
        <ProductImage key={product.productImages[0]._id} productImage={product.productImages[0]} />
        {product.name}
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    productImages: PropTypes.array,
  }),
};

Product.defaultProps = {
  product: {},
};

export default Product;
