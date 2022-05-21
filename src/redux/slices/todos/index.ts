import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import { TodoModel } from 'interfaces/redux/todos';

//* Actions
import reducers from './reducers';

export interface TodosState {
  items: TodoModel[];
  wantedItems: TodoModel[];
  item: TodoModel;
  itemEdit: TodoModel;
}

export const initialState = {
  items: [],
  wantedItems: [],
  item: {} as TodoModel,
  itemEdit: {} as TodoModel,
} as TodosState;

export const todos = createSlice({
  name: 'todos',
  initialState,
  reducers,
  extraReducers: ({ addMatcher, addCase }) => {},
});

export const { addItem, removeItem, searchItem, updateItem } = todos.actions;

export default todos.reducer;
