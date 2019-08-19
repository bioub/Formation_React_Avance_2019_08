import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { todosReducer } from './todos/reducers';
import { usersReducer } from './users/reducers';

const rootReducer = combineReducers({
  todos: todosReducer,
  users: usersReducer,
});

export function configureStore() {
  const store = createStore(rootReducer, composeWithDevTools());

  return store;
}
