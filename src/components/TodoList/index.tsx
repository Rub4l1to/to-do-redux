import React, { FC } from 'react';

//* Components
import { Search, ItemList } from 'components';

//* Styles
import * as Styled from './styles';

//* Redux
import { useAppSelector } from 'redux/hooks';
//* Getters
import { selectTodos } from 'redux/slices/todos/getters';

export const TodoList: FC = () => {
  const { items, wantedItems } = useAppSelector(selectTodos);

  return (
    <Styled.TodoList>
      <Search />
      {wantedItems ? <ItemList {...{ items: wantedItems }} /> : <ItemList {...{ items }} />}
    </Styled.TodoList>
  );
};
