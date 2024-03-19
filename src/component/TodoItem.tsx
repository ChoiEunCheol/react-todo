import React from 'react';
import { useTodos } from './TodoContext';

interface TodoItemProps {
  todo: {
    id: number;
    text: string;
    completed: boolean;
  };
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { deleteTodo, toggleTodo } = useTodos();

  return (
    <li>
      <input
        title='do'
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

export default TodoItem;
