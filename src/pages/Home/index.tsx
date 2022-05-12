import React, { useEffect } from 'react';

//* Styled
import { Home } from './styles';

import { Iterations, TodoList } from 'components';
const HomePage = () => {
  return (
    <Home>
      <Iterations />
      <TodoList />
    </Home>
  );
};

export default HomePage;
