import React, { FC } from 'react';

//* Styles
import * as Styled from './styles';

//* Components
import { Item } from 'components';
import { TodoModel } from 'interfaces/redux/todos';

interface ItemListProps {
  items: TodoModel[];
}

export const ItemList: FC<ItemListProps> = ({ items }) => {
  return (
    <Styled.List>
      <Styled.Title>{items.length !== 0 ? 'List of items' : 'No items found'}</Styled.Title>
      <Styled.Items>
        {items.map(({ id, ...props }: TodoModel) => (
          <Item key={`${id}`} {...{ id, ...props }} />
        ))}
      </Styled.Items>
    </Styled.List>
  );
};
