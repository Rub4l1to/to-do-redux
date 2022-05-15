import React from 'react';

//* Styles
import * as Styled from './styles';

//* Redux
import { useAppSelector } from 'redux/hooks';
//* Getters
import { selectTodos } from 'redux/slices/todos/getters';

const ItemList = () => {
  const { items } = useAppSelector(selectTodos);
  return (
    <Styled.List>
      <Styled.Title>{items.length !== 0 ? 'List of items' : 'No items found'}</Styled.Title>
    </Styled.List>
  );
};

export default ItemList;
