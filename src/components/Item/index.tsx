import React, { FC } from 'react';

//* Interfaces
import { TodoModel } from 'interfaces/redux/todos';

export const Item: FC<TodoModel> = ({ name, description, price, amount }) => {
  return <div>Item</div>;
};
