import React, { ChangeEvent, FC, useState } from 'react';

//* Interfaces
import { TodoModel } from 'interfaces/redux/todos';

//* Styles
import * as Styled from './styles';

//* Components
import { Fields } from 'components/Shared';

export const Item: FC<TodoModel> = ({ id, name, description, price, amount }) => {
  const [editMode, handleEdit] = useState<boolean>(false);

  const [data, setData] = useState<TodoModel>({
    id,
    name,
    description,
    price,
    amount,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <Styled.Item>
      <Styled.Section>
        <Styled.Label>Name</Styled.Label>
        <Fields.InputTextField onChange={handleInputChange} name="name" value={data.name} />
      </Styled.Section>
      <Styled.Section>
        <Styled.Label>Price</Styled.Label>
        <Fields.InputNumberField onChange={handleInputChange} name="price" value={data.price} />
      </Styled.Section>
      <Styled.Section>
        <Styled.Label>Amount</Styled.Label>
        <Fields.InputNumberField onChange={handleInputChange} name="amount" value={data.amount} />
      </Styled.Section>
      <Styled.Section>
        <Styled.Label>Description</Styled.Label>
        <Fields.TextAreaField onChange={handleInputChange} name="description" value={data.description} />
      </Styled.Section>
    </Styled.Item>
  );
};
