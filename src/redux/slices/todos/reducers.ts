import { PayloadAction } from '@reduxjs/toolkit';

//* Interfaces
import { FormCreatorModel } from 'components/FormCreator';

import { v4 as uuidv4 } from 'uuid';

//* Interfaces
import { TodosState } from '.';
import { TodoModel } from 'interfaces/redux/todos';

export default {
  addItem: (state: TodosState, action: PayloadAction<FormCreatorModel>) => {
    const { payload } = action;
    state.items.push({
      id: uuidv4(),
      ...payload,
    });
  },
  removeItem: (state: TodosState, action: PayloadAction<string>) => {
    const { payload } = action;

    state.wantedItems = state.wantedItems.filter((item) => item.id !== payload);
    state.items = state.items.filter((item) => item.id !== payload);
  },
  searchItem: (state: TodosState, action: PayloadAction<string>) => {
    const { payload } = action;

    state.items = [...state.items];
    state.wantedItems = state.items.filter((item) => item.name.includes(payload));
  },
  updateItem: (state: TodosState, action: PayloadAction<TodoModel>) => {
    const { payload } = action;

    const index = state.items.findIndex((item) => item.id === payload.id);
    state.items[index] = payload;
  },
};
