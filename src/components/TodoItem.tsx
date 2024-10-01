import React from 'react';
import { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleComplete, deleteTodo }) => {
  const handleDelete = (id: number) => {
    const isConfirmed = window.confirm("Rostdan ham ushbu ishni o'chirmoqchimisiz?");
    if (isConfirmed) {
      deleteTodo(id);
    }
  };

  return (
    <li>
      <div onClick={() => toggleComplete(todo.id)} style={{ cursor: 'pointer' }}>
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.text}
        </span>
        <div className="todo-details">
          <span>{todo.day}</span>
          <span>{todo.time}</span>
        </div>
      </div>
      <button onClick={() => handleDelete(todo.id)}>O'chirish</button>
    </li>
  );
};

export default TodoItem;
