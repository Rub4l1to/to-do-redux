import React from 'react';

//* Components
import { Search, ItemList } from 'components';

//* Styles
import * as Styled from './styles';

const TodoList = () => {
  return (
    <Styled.TodoList>
      <Search />
      <ItemList />
    </Styled.TodoList>
  );
};

export default TodoList;
