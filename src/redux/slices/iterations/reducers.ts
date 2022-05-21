import { PayloadAction } from '@reduxjs/toolkit';

//* Interfaces
import { IterationsState } from '.';

//* Initial state
import { initialState } from './index';

export default {
  setToggleMenu(state: IterationsState) {
    state.menu = !state.menu;
  },
};
