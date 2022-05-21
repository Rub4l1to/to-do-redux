import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import { TodoModel } from 'interfaces/redux/todos';

//* Actions
import reducers from './reducers';

export interface TodosState {
  items: TodoModel[];
  searchItems: TodoModel[];
  item: TodoModel;
  itemEdit: TodoModel;
}

export const initialState = {
  items: [
    {
      id: '1',
      name: 'Todo 1',
      description: 'Description 1',
      amount: 1,
      price: 1,
    },
  ],
  searchItems: [],
  item: {} as TodoModel,
  itemEdit: {} as TodoModel,
} as TodosState;

export const todos = createSlice({
  name: 'todos',
  initialState,
  reducers,
  extraReducers: ({ addMatcher, addCase }) => {},
});

export const {} = todos.actions;

export default todos.reducer;
