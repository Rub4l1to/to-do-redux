import { PayloadAction } from '@reduxjs/toolkit';

//* Interfaces
import { ExampleState } from '.';

//* Initial state
import { initialState } from './index';

export default {
  setToggleMenu(state: ExampleState) {
    state.menu = !state.menu;
  },
};
