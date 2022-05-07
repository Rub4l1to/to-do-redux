import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';

//* Actions
import reducers from './reducers';

export interface ExampleState {}

export const initialState = {} as ExampleState;

export const example = createSlice({
  name: 'example',
  initialState,
  reducers,
  extraReducers: ({ addMatcher, addCase }) => {},
});

export const {} = example.actions;

export default example.reducer;
