import React, { PureComponent } from 'react';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoCount } from '../TodoCount/TodoCount';
import { arrayOf, shape, number, string, bool } from "prop-types";

export class TodoList extends PureComponent {
  // shouldComponentUpdate(nextProps) {
  //   return this.props.items !== nextProps.items;
  // }
  static propTypes = {
    items: arrayOf(shape({id: number, text: string, completed: bool})),
  };

  render() {
    const { count, items, onDeleteItem } = this.props;
    return (
      <>
        <div className="TodoList">
          {items.map(it => (
            <TodoItem key={it.id} item={it} onDeleteItem={onDeleteItem} />
          ))}
        </div>
        <TodoCount count={items.length}  />
      </>
    );
  }
}

