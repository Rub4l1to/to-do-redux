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
  getItems: (state: TodosState) => {
    state.wantedItems = state.items;
  },

  removeItem: (state: TodosState, action: PayloadAction<string>) => {
    const { payload } = action;

    state.items = state.items.filter((item) => item.id !== payload);
  },
  searchItem: (state: TodosState, action: PayloadAction<string>) => {
    const { payload } = action;
    const newSearch = state.items.filter((item) => item.name.includes(payload));
    state.wantedItems = payload === '' ? state.items : newSearch;
  },
  updateItem: (state: TodosState, action: PayloadAction<TodoModel>) => {
    const { payload } = action;
    const index = state.items.findIndex((item) => item.id === payload.id);
    state.items[index] = payload;
  },
};
