import React, { Component } from 'react'

class Category extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.category.name}
        </div>
      </div>
    )
  }
}

export default Category;
