import React from 'react';

//* Components
import { Arrow, FormCreator } from 'components';

//* Icons
import { AiOutlineArrowRight } from 'react-icons/ai';

//* Styles
import * as Styled from './styles';

//* Redux
import { useAppDispatch, useAppSelector } from 'redux/hooks';
//---- Actions
import { setToggleMenu } from 'redux/slices/iterations';
//---- Getters
import { selectIterations } from 'redux/slices/iterations/getters';

const Iterations = () => {
  const dispatch = useAppDispatch();
  const { menu } = useAppSelector(selectIterations);

  return (
    <Styled.Iterations toggle={menu}>
      <Styled.Content toggle={menu}>
        <Styled.Heading>
          <Styled.Title>Add a new item</Styled.Title>
          <Styled.Subtitle>Create a new article with the following data</Styled.Subtitle>
        </Styled.Heading>
        <FormCreator />
      </Styled.Content>

      <Arrow toggleButton={menu} onClick={() => dispatch(setToggleMenu())}>
        <AiOutlineArrowRight />
      </Arrow>
    </Styled.Iterations>
  );
};

export default Iterations;
