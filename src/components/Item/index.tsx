import React, { FC, useState } from 'react';

//* Interfaces
import { TodoModel } from 'interfaces/redux/todos';

//* Styles
import * as Styled from './styles';

export const Item: FC<TodoModel> = ({ name, description, price, amount }) => {
  const [editMode, handleEdit] = useState<boolean>(false);

  return <Styled.Item>Item</Styled.Item>;
};
