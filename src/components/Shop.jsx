import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import CategoryList from 'components/CategoryList';
import ProductList from 'components/ProductList';

// TODO: Only pull in top most parent categories
// TODO: For some reason shop.categories.products requires shop.categories.prudct_ids
const QUERY = gql`
  {
    shopById(_id: "5eaca956943bfa4faab04d3d") {
      _id
      name
      categories {
        _id
        name
        product_ids
        products {
          _id
          name
          productImages {
            _id
            name
          }
        }
      }
      products {
        _id
        name
        productImages {
          _id
          name
        }
      }
    }
  }
`;

const Shop = () => {
  return (
    <Query query={QUERY}>
      {({ data, error, loading }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error</div>;

        const shop = data.shopById;

        return (
          <div>
            {shop.name}
            <div>
              <CategoryList categories={shop.categories} />
            </div>
            <div>
              <ProductList products={shop.products} />
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default Shop;
