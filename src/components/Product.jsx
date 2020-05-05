import React from 'react';
import PropTypes from 'prop-types';
import ProductImage from './ProductImage';

const Product = ({ product }) => {
  return (
    <div>
      <div>
        {product.productImages.length ? (
          product.productImages.map((image) => (
            <ProductImage key={image._id} productImage={image} />
          ))
        ) : (
          <div>No Image</div>
        )}

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
