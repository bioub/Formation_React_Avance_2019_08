import { connect } from 'react-redux';
import { TodoForm } from '../components/TodoForm/TodoForm';
import { todoChange, todoAdd } from '../actions';
import { selectTodosInput } from '../selectors';

function mapStateToProps(state) {
  return {
    newTodoInput: selectTodosInput(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onNewTodoChange(inputVal) {
      dispatch(todoChange(inputVal));
    },
    onNewTodoAdd(inputVal) {
      dispatch(todoAdd(inputVal));
    },
  };
}

export const TodoFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoForm);
