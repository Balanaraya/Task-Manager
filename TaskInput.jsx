import React, { useState } from 'react';

const TaskInput = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      addTask(taskName);
      setTaskName('');
    }
  };

  return (
    
    <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
      <input 
        type="text"
        className="border p-2 flex-1 rounded-md"
        placeholder="Add a new task..."
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button 
        type="submit" 
        className="bg-purple-500 text-white px-4 py-2 rounded-md"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskInput;

