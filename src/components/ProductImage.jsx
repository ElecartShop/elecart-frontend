import React from 'react';
import PropTypes from 'prop-types';

const ProductImage = ({ productImage }) => {
  return (
    <div>
      <div>{productImage.name}</div>
    </div>
  );
};

ProductImage.propTypes = {
  productImage: PropTypes.shape({
    name: PropTypes.string,
  }),
};

ProductImage.defaultProps = {
  productImage: {},
};

export default ProductImage;
