import type { RootState } from 'redux/store';

export const selectTodos = (state: RootState) => state.todos;
