// App.js
import React from 'react';
import { TodoProvider } from './component/TodoContext';
import TodoForm from './component/TodoForm';
import TodoList from './component/TodoList';

const App: React.FC = () => {
  return (
    <TodoProvider>
      <h1>To Do List</h1>
      <TodoForm />
      <TodoList />
    </TodoProvider>
  );
}

export default App;