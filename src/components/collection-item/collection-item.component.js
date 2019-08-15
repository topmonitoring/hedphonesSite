import React, { useContext } from 'react';
import { CartContext } from '../../providers/cart.provider';

import {
  CollectionFooterContainer,
  CollectionItemContainer,
} from './collection-item.styles.js';

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const { addItem } = useContext(CartContext);
  return (
    <CollectionItemContainer>
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <CollectionFooterContainer>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </CollectionFooterContainer>
      <button className="button" onClick={() => addItem(item)}>
        Добави в количка
      </button>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
