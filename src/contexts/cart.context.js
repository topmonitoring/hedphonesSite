import { createContext } from 'react';

const SHOP_DATA = {
  items: [
    {
      id: 11,
      name: 'T7 tws white',
      imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
      price: 25,
    },
    {
      id: 22,
      name: 'T7 tws black',
      imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
      price: 25,
    },
  ],
};

const CartColectionsContext = createContext(SHOP_DATA);

export default CartColectionsContext;
