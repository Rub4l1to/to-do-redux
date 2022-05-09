import React from 'react';

//* Styled
import { Home } from './styles';

import { Iterations, TodoList } from 'components';
import { useAppSelector } from 'redux/hooks';

const HomePage = () => {
  const { menu } = useAppSelector((state) => state.example);
  return (
    <Home toggleMenu={menu}>
      <Iterations />
      <TodoList />
    </Home>
  );
};

export default HomePage;
