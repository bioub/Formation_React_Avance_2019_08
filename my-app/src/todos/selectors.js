// @flow

// recompose (aussi l'ancetre des hooks)
// const selectTodosCount = compose(
//  selectTodosItems,
//  (items) => items.length
// );

// reselect (similaire à compose avec Memoize)
// const selectTodosCount = createSelector(
//  selectTodosItems,
//  (items) => items.length
// );

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface State {
  todos: {
    items: Todo[],
    input: String,
  }
}

function selectTodos(state: State) {
  return state.todos;
}

function selectTodosCount(state: State) {
  return selectTodosItems(state).length;
}

function selectTodosItems(state: State) {
  return selectTodos(state).items;
}

function selectTodosInput(state: State) {
  return selectTodos(state).input;
}

export { selectTodos, selectTodosItems, selectTodosInput, selectTodosCount };
