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

function selectTodos(state) {
  return state.todos;
}

function selectTodosCount(state) {
  return selectTodosItems(state).length;
}

function selectTodosItems(state) {
  return selectTodos(state).items;
}

function selectTodosInput(state) {
  return selectTodos(state).input;
}

export { selectTodos, selectTodosItems, selectTodosInput, selectTodosCount };
