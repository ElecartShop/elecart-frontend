import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const QUERY = gql`
  {
    shopById(_id: "5eaca956943bfa4faab04d3d") {
      _id
      name
    }
  }
`;

class Shop extends Component {
  render() {
    return (
      <Query query={QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>

          const shop = data.shopById;

          return (
            <div>
              {shop.name}
            </div>
          );
        }}
      </Query>
    )
  }
}

export default Shop;
