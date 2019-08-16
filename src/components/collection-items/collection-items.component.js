import React, { useContext } from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import CartColectionsContext from '../../contexts/cart.context';

import { CollectionContainer } from './collection-items.styles';

const CollectionItems = () => {
  const collection = useContext(CartColectionsContext);
  const { items } = collection;
  return (
    <CollectionContainer>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </CollectionContainer>
  );
};

export default CollectionItems;
