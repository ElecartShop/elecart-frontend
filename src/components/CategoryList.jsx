import React from 'react';
import PropTypes from 'prop-types';
import Category from './Category';

const CategoryList = ({ categories }) => {
  return (
    <div>
      {categories.map((category) => (
        <Category key={category._id} category={category} />
      ))}
    </div>
  );
};

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({})),
};

CategoryList.defaultProps = {
  categories: [],
};

export default CategoryList;
