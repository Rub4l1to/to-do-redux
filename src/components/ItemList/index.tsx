import React, { FC } from 'react';

//* Styles
import * as Styled from './styles';

//* Redux
import { useAppSelector } from 'redux/hooks';
//* Getters
import { selectTodos } from 'redux/slices/todos/getters';

//* Components
import { Item } from 'components';
import { TodoModel } from 'interfaces/redux/todos';

export const ItemList: FC = () => {
  const { items } = useAppSelector(selectTodos);
  return (
    <Styled.List>
      <Styled.Title>{items.length !== 0 ? 'List of items' : 'No items found'}</Styled.Title>
      {items.map(({ id, ...props }: TodoModel) => (
        <Item key={`${id}`} {...{ id, ...props }} />
      ))}
    </Styled.List>
  );
};
