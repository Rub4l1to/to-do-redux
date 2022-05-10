import React, { useEffect } from 'react';

//* Styled
import { Home } from './styles';

import { Iterations, TodoList } from 'components';
import { useAppSelector, useAppDispatch } from 'redux/hooks';
import { useWindowDimensions } from 'hooks/useWindowDimesions';
import { setToggleMenu } from 'redux/slices/example';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { menu } = useAppSelector((state) => state.example);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width >= 895 && menu) dispatch(setToggleMenu());
  }, [width]);

  return (
    <Home>
      <Iterations />
      <TodoList />
    </Home>
  );
};

export default HomePage;
