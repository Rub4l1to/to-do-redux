import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';

//* Actions
import reducers from './reducers';

export interface IterationsState {
  menu: boolean;
}

export const initialState = {
  menu: false,
} as IterationsState;

export const iterations = createSlice({
  name: 'iterations',
  initialState,
  reducers,
  extraReducers: ({ addMatcher, addCase }) => {},
});

export const { setToggleMenu } = iterations.actions;

export default iterations.reducer;
