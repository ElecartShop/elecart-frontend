import React from 'react';
import PropTypes from 'prop-types';
import Product from 'components/Product';

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
    }),
  ),
};

ProductList.defaultProps = {
  products: [],
};

export default ProductList;
