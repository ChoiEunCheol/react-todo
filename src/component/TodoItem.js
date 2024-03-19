// TodoItem.js
import React from 'react';
import { useTodos } from './TodoContext';

export default function TodoItem({ todo }) {
  const { deleteTodo, toggleTodo } = useTodos();

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>🗑</button>
    </li>
  );
}
