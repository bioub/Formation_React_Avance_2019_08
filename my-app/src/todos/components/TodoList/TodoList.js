import React, { PureComponent } from 'react';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoCount } from '../TodoCount/TodoCount';

export class TodoList extends PureComponent {
  // shouldComponentUpdate(nextProps) {
  //   return this.props.items !== nextProps.items;
  // }
  render() {
    const { count, items, onDeleteItem } = this.props;
    return (
      <>
        <div className="TodoList">
          {items.map(it => (
            <TodoItem key={it.id} item={it} onDeleteItem={onDeleteItem} />
          ))}
        </div>
        <TodoCount count={count} />
      </>
    );
  }
}
