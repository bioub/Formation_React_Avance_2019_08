// @flow
import React from 'react';
import css from './TodoItem.module.scss';
import { shape, number, string, bool, func } from "prop-types";
import { Todo } from "../../selectors";

export function TodoItem({ item, onDeleteItem = (item: Todo) => {} }: {item: Todo, onDeleteItem: (item: Todo) => {}}) {
  return (
    <div className={css.TodoItem}>
      <span>{item.text}</span>
      <button onClick={() => onDeleteItem(item)}>-</button>
    </div>
  );
}

TodoItem.propTypes = {
  item: shape({id: number, text: string, completed: bool}).isRequired,
  onDeleteItem: func,
};
