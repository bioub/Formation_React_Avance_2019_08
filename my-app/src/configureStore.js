import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { todosReducer } from './todos/reducers';
import { usersReducer } from './users/reducers';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { reducer as reduxFormReducer } from 'redux-form';

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  todos: todosReducer,
  users: usersReducer,
  form: reduxFormReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export function configureStore() {
  const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
  const persistor = persistStore(store)
  return { store, persistor};
}
