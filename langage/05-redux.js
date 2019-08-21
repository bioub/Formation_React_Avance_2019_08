const { createStore } = require('redux');

const preloadedState = {
  count: 0,
};

const COUNT_INCREMENT = 'COUNT_INCREMENT';

function reducer(previousState, action) {
  switch (action.type) {
    case COUNT_INCREMENT:
      return {
        ...previousState,
        count: previousState.count + 1,
      };
    default:
      return nextState;
  }
}

const store = createStore(reducer, preloadedState);

const selectCount = (state) => state.count;

store.subscribe(() => {
  console.log(selectCount(store.getState()));
});

const countIncrement = () => ({ type: COUNT_INCREMENT });

store.dispatch(countIncrement());
store.dispatch(countIncrement());
store.dispatch(countIncrement());
store.dispatch(countIncrement());
