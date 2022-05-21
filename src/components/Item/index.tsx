import React, { FC, useState } from 'react';

//* Interfaces
import { TodoModel } from 'interfaces/redux/todos';

//* Styles
import * as Styled from './styles';

//* Components
import { Fields } from 'components/Shared';

export const Item: FC<TodoModel> = ({ name, description, price, amount }) => {
  const [editMode, handleEdit] = useState<boolean>(false);

  return (
    <Styled.Item>
      <Styled.Section>
        <Styled.Label>Name</Styled.Label>
        <Fields.InputTextField name="name" value={name} />
      </Styled.Section>
      <Styled.Section>
        <Styled.Label>Price</Styled.Label>
        <Fields.InputNumberField name="price" value={price} />
      </Styled.Section>
      <Styled.Section>
        <Styled.Label>Amount</Styled.Label>
        <Fields.InputNumberField name="amount" value={amount} />
      </Styled.Section>
      <Styled.Section>
        <Styled.Label>Description</Styled.Label>
        <Fields.TextAreaField name="description" value={description} />
      </Styled.Section>
    </Styled.Item>
  );
};
