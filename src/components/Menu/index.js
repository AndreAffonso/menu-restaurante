import React from 'react';

import { MenuWrapper, Item, Name, Description, Price } from './styles.js';

import { convertToReal } from '../../helpers/convertToReal';

const Menu = ({ items }) => (
  <MenuWrapper>
    {items.map(item => (
      <Item key={item.id}>
        <Name>{item.name}</Name>
        <Description>{item.description}</Description>
        <Price>{convertToReal(item.price)}</Price>
      </Item>
    ))}
  </MenuWrapper>
);
export default Menu;
