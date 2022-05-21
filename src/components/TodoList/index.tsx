import React, { FC } from 'react';

//* Components
import { Search, ItemList } from 'components';

//* Styles
import * as Styled from './styles';

export const TodoList: FC = () => {
  return (
    <Styled.TodoList>
      <Search />
      <ItemList />
    </Styled.TodoList>
  );
};
