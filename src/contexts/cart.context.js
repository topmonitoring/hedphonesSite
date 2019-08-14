import { createContext } from 'react';

const SHOP_DATA = {
  items: [
    {
      id: 11,
      name: 'T7 tws white',
      imageUrl: 'https://i.ibb.co/D9Q8Krf/fast.jpg',
      price: 25,
    },
    {
      id: 22,
      name: 'T7 tws black',
      imageUrl: 'https://i.ibb.co/9YMGZnx/black.jpg',
      price: 25,
    },
  ],
};

const CartColectionsContext = createContext(SHOP_DATA);

export default CartColectionsContext;
