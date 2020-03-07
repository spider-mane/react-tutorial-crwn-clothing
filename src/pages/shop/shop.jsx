import React from "react";
import { COLLECTIONS } from "./data";
import CollectionPreview from "../../components/collection-preview/collection-preview";

class ShopPage extends React.Component {
  state = {
    collections: COLLECTIONS
  };

  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...props }) => (
          <CollectionPreview key={id} {...props} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
