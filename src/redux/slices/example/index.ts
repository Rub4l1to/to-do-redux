import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';

//* Actions
import reducers from './reducers';

export interface ExampleState {
  menu: boolean;
}

export const initialState = {
  menu: false,
} as ExampleState;

export const example = createSlice({
  name: 'example',
  initialState,
  reducers,
  extraReducers: ({ addMatcher, addCase }) => {},
});

export const { setToggleMenu } = example.actions;

export default example.reducer;
