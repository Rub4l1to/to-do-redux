import React, { FC, useEffect } from 'react';

//* Styles
import * as Styled from './styles';

//* Components
import { Item } from 'components';
import { TodoModel } from 'interfaces/redux/todos';

//* Redux
import { useAppDispatch, useAppSelector } from 'redux/hooks';
//* Getters
import { selectTodos } from 'redux/slices/todos/getters';
import { getItems } from 'redux/slices/todos';

export const ItemList: FC = () => {
  const { items, wantedItems } = useAppSelector(selectTodos);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [items]);

  return (
    <Styled.List>
      <Styled.Title>{wantedItems.length !== 0 ? 'List of items' : 'No items found'}</Styled.Title>
      <Styled.Items>
        {wantedItems.map(({ id, ...props }: TodoModel) => (
          <Item key={`${id}`} {...{ id, ...props }} />
        ))}
      </Styled.Items>
    </Styled.List>
  );
};
