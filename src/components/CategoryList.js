import React, { Component } from 'react';
import Category from './Category';

class CategoryList extends Component {
  render() {
    return (
      <div>
        {this.props.categories.map(category => <Category key={category._id} category={category} />)}
      </div>
    );
  }
}

export default CategoryList;
