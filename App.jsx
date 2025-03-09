import React, { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';



const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    setTasks([...tasks, { id: Date.now(), name: taskName, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className=" card min-h-screen flex items-center justify-center bg-purple-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center">Task Tracker</h1>
        <TaskInput addTask={addTask} />
        <TaskList 
          tasks={tasks} 
          toggleComplete={toggleComplete} 
          deleteTask={deleteTask} 
        />
      </div>
    </div>
  );
};

export default App;


