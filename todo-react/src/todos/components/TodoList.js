import React from 'react';
import TodoItem from './TodoItem';

// class TodoList extends PureComponent {
//   // shouldComponentUpdate(nextProps) {
//   //   return nextProps.todos !== this.props.todos;
//   // }
//   render() {
//     const props = this.props;
//     const todosJsx = props.todos.map((todo) => (
//       <TodoItem onTodoDelete={props.onTodoDelete} key={todo.id} todo={todo} />
//     ));
//     return <div className="TodoList">{todosJsx}</div>;
//   }
// }

function TodoList(props) {
  const todosJsx = props.todos.map((todo) => (
    <TodoItem onTodoDelete={props.onTodoDelete} key={todo.id} todo={todo} />
  ));
  return <div className="TodoList">{todosJsx}</div>;
}

export default React.memo(TodoList);

// function sum(a, b) {
//   return a + b;
// }

// const memoSum = memo(sum);

// sum(1, 2); // 3
// sum(1, 3); // 4
// sum(1, 2); // 3