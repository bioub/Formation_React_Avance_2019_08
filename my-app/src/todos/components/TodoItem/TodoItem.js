import React from 'react';
import css from './TodoItem.module.scss';

export function TodoItem({ item, onDeleteItem }) {
  return (
    <div className={css.TodoItem}>
      <span>{item.text}</span>
      <button onClick={() => onDeleteItem(item)}>-</button>
    </div>
  );
}
