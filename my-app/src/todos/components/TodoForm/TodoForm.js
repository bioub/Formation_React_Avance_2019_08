import React from 'react';
import './TodoForm.css';

export function TodoForm({ newTodoInput, onNewTodoChange, onNewTodoAdd }) {
  function handleSubmit(event) {
    event.preventDefault();
    onNewTodoAdd(newTodoInput);
  }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        value={newTodoInput}
        onChange={event => onNewTodoChange(event.target.value)}
      />
      <button>+</button>
    </form>
  );
}
