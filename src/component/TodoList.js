// TodoList.js
import React from 'react';
import { useTodos } from './TodoContext';
import TodoItem from './TodoItem';

export default function TodoList() {
  const { todos } = useTodos();

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
