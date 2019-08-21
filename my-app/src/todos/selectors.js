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

// Bibliothèque reselect / redux-starter-kit
// createSelector => memoized selector
// selecteur où quand les params sont les mêmes que l'appel précédent
// (précédent dispatch), le résultat est mis en cache et simple retournée

// const selectTodosItems = createSelector(
//   selectTodos,
//   function selectTodosItems(todos) {
//     const filter = todos.filter || 'ALL';

//     if (filter === 'ALL') {
//       return todos.items;
//     }
//     else if (filter === 'COMPLETED') {
//       return todos.items.filter(it => it.completed);
//     } else if (filter === 'ACTIVE') {
//       return todos.items.filter(it => !it.completed);
//     }

//     return .items;
//   }
// )

function selectTodosItems(todos: any) {
  const filter = todos.filter || 'ALL';

  if (filter === 'COMPLETED') {
    return todos.items.filter(it => it.completed);
  } else if (filter === 'ACTIVE') {
    return todos.items.filter(it => !it.completed);
  }

  return todos.items || [];
}


function selectTodosInput(state: State) {
  return selectTodos(state).input;
}

export { selectTodos, selectTodosItems, selectTodosInput, selectTodosCount };
