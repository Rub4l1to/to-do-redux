import React from 'react';

//* Components
import { Search } from 'components';

//* Styles
import * as Styled from './styles';

const TodoList = () => {
  return (
    <Styled.TodoList>
      <Search />
    </Styled.TodoList>
  );
};

export default TodoList;
