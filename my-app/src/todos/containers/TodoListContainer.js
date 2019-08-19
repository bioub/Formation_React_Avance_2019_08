import { connect } from 'react-redux';
import { TodoList } from '../components/TodoList/TodoList';
import { selectTodosItems, selectTodosCount } from '../selectors';

function mapStateToProps(state) {
  return {
    items: selectTodosItems(state),
    count: selectTodosCount(state),
  };
}

export const TodoListContainer = connect(mapStateToProps)(TodoList);
