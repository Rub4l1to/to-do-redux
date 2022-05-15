//* Redux
import { combineReducers } from 'redux';

//* Reducers
import { iterations, todos } from './slices';

export default combineReducers({
  iterations,
  todos,
});
