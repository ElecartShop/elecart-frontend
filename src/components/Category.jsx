import React from 'react';
import PropTypes from 'prop-types';
import ProductList from 'components/ProductList';

const Category = ({ category }) => {
  return (
    <div>
      <div>{category.name}</div>
      <div>
        <ProductList products={category.products} />
      </div>
    </div>
  );
};

Category.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string,
    products: PropTypes.array,
  }),
};

Category.defaultProps = {
  category: {},
};

export default Category;
