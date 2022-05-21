import React, { FC, useState } from 'react';

//* Interfaces
import { TodoModel } from 'interfaces/redux/todos';

//* Styles
import * as Styled from './styles';

//* Components
import { Fields } from 'components/Shared';

// Icons
import { HiPencil, HiTrash, HiSave } from 'react-icons/hi';

//* Redux
import { useAppDispatch } from 'redux/hooks';
//---- Actions
import { removeItem, updateItem } from 'redux/slices/todos';
import { useTodo } from 'hooks';

export const Item: FC<TodoModel> = ({ id, name, description, price, amount }) => {
  const dispatch = useAppDispatch();
  const [editMode, handleEdit] = useState<boolean>(false);

  const { handleInputChange, data } = useTodo({ id, name, description, price, amount });

  return (
    <Styled.Item>
      <Styled.Section>
        <Styled.Label>Name</Styled.Label>
        <Fields.InputTextField disabled={!editMode} onChange={handleInputChange} name="name" value={data.name} />
      </Styled.Section>
      <Styled.Section>
        <Styled.Label>Price</Styled.Label>
        <Fields.InputNumberField type="number" disabled={!editMode} onChange={handleInputChange} name="price" value={data.price} />
      </Styled.Section>
      <Styled.Section>
        <Styled.Label>Amount</Styled.Label>
        <Fields.InputNumberField type="number" disabled={!editMode} onChange={handleInputChange} name="amount" value={data.amount} />
      </Styled.Section>
      <Styled.Section>
        <Styled.Label>Description</Styled.Label>
        <Fields.TextAreaField disabled={!editMode} onChange={handleInputChange} name="description" value={data.description} />
      </Styled.Section>

      <Styled.Section>
        <Styled.Actions>
          {editMode ? (
            <Styled.Icon color="standar">
              <HiSave
                onClick={() => {
                  dispatch(updateItem(data));
                  handleEdit(!editMode);
                }}
              />
            </Styled.Icon>
          ) : (
            <Styled.Icon color="standar">
              <HiPencil onClick={() => handleEdit(!editMode)} />{' '}
            </Styled.Icon>
          )}
          <Styled.Icon color="danger">
            <HiTrash onClick={() => dispatch(removeItem(id))} />
          </Styled.Icon>
        </Styled.Actions>
      </Styled.Section>
    </Styled.Item>
  );
};
