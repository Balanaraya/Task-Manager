import React from 'react';

const TaskList = ({ tasks, toggleComplete, deleteTask }) => (
  <ul className="mt-4">
    {tasks.length === 0 && (
      <p className="text-gray-500 text-center">No tasks yet. Add one to get started!</p>
    )}
    {tasks.map(task => (
      <li 
        key={task.id}
        className={`flex justify-between items-center p-2 border-b ${
          task.completed ? 'line-through text-gray-400' : ''
        }`}
      >
        <span onClick={() => toggleComplete(task.id)}>{task.name}</span>
        <button 
          onClick={() => deleteTask(task.id)}
          className="bg-red-500 text-white px-2 py-1 rounded-md"
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default TaskList;
