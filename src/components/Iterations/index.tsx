import React from 'react';

//* Components
import { Button } from 'components';

//* Icons
import { AiOutlineArrowRight } from 'react-icons/ai';

//* Styles
import * as Styled from './styles';

//* Redux
import { useAppDispatch, useAppSelector } from 'redux/hooks';
//---- Actions
import { setToggleMenu } from 'redux/slices/example';

const Iterations = () => {
  const dispatch = useAppDispatch();
  const { menu } = useAppSelector((state) => state.example);

  return (
    <Styled.Iterations>
      <Styled.Heading>
        <Styled.Title>Add a new item</Styled.Title>
        <Styled.Subtitle>Create a new article with the following data</Styled.Subtitle>
      </Styled.Heading>
      <Button toggleButton={menu} onClick={() => dispatch(setToggleMenu())}>
        <AiOutlineArrowRight />
      </Button>
    </Styled.Iterations>
  );
};

export default Iterations;
